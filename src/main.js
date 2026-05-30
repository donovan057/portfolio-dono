import './style.css';

document.addEventListener('DOMContentLoaded', () => {

  // 1. REDIRECTIONS FLUIDES POUR LE MENU DE NAVIGATION
  const navLinks = document.querySelectorAll('.nav-links a');
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const targetId = link.getAttribute('href'); 
      
      // CORRECTION : On bloque le clic SEULEMENT si c'est une ancre (commence par #)
      if (targetId && targetId.startsWith('#')) {
        e.preventDefault(); 
        const targetSection = document.querySelector(targetId);
        if (targetSection) {
          targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
      // Si c'est un lien comme "index.html", on le laisse charger la nouvelle page !
    });
  });

  // 2. REDIRECTION FLUIDE POUR LE BOUTON PRINCIPAL "MES PROJETS"
  const btnMesProjets = document.querySelector('.btn-primary');
  if (btnMesProjets) {
    btnMesProjets.addEventListener('click', (e) => {
      const sectionProjets = document.querySelector('#projets');
      // On bloque le clic seulement si la section existe sur la page actuelle
      if (sectionProjets) {
        e.preventDefault(); 
        sectionProjets.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  }

  // 3. REDIRECTION FLUIDE POUR LE BOUTON SECONDAIRE "ME CONTACTER"
  const btnContact = document.querySelector('.btn-secondary');
  if (btnContact) {
    btnContact.addEventListener('click', (e) => {
      const sectionContact = document.querySelector('#contact');
      if (sectionContact) {
        e.preventDefault();
        sectionContact.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  }

  // 4. EFFET DE LUMIÈRE DYNAMIQUE (MOUSE TRACKING SHINE)
  const interactiveElements = document.querySelectorAll('.btn, .project-card, .skill-category, .contact-container');
  interactiveElements.forEach(element => {
    element.addEventListener('mousemove', (e) => {
      const rect = element.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      element.style.setProperty('--mouse-x', `${x}px`);
      element.style.setProperty('--mouse-y', `${y}px`);
    });
  });

  // ==========================================================================
  // 5. ENVOI DU FORMULAIRE PAR E-MAIL (VIA WEB3FORMS) + RECAPTCHA 
  // ==========================================================================
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
      e.preventDefault();

      // 1. Vérification du Google reCAPTCHA
      const recaptchaResponse = grecaptcha.getResponse();
      
      // CORRECTION : "length" à la place de "lenght"
      if (recaptchaResponse.length === 0) {
        alert("⚠️ Veuillez valider le test Google reCAPTCHA avant d'envoyer votre message.");
        return;
      }

      // 2. On récupère les valeurs tapées par le visiteur
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const message = document.getElementById('message').value;

      // Petit effet UX : on change le text du bouton pendant l'envoi
      const btn = contactForm.querySelector('button[type="submit"]');
      const originalBtnText = btn.innerHTML;
      btn.innerHTML = "Envoi en cours... ⌛"
      btn.disabled = true; // Empêche de cliquer deux fois

      try {
        // 3. On envoie les données au "facteur" Web3Forms
        const response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify({
            access_key: "0a7d7372-f0ff-402a-bee5-7e70320addea",
            name: name,
            email: email, 
            message: message
          })
        });

        if (response.ok) {
          // 4. Si l'envoi a réussi, on affiche le message de succès !
          contactForm.innerHTML = `
          <div style="text-align: center; padding: 2rem 0;">
            <span style="font-size: 3rem;">🎉</span>
            <h3 style="margin-top: 1rem; font-size: 1.5rem; color: var(--primary-neon);">Merci ${name} !</h3>
            <p style="color: var(--text-muted); margin-top: 0.5rem;">Votre message a bien été envoyé. Je reviens vers vous rapidement.</p>
          </div>
          `;
        } else {
          // Si l'API Web3Forms a un bug
          alert("Une erreur est survenue côté serveur. Veuillez réessayer.");
          btn.innerHTML = originalBtnText;
          btn.disabled = false;
        }

      } catch (error) {
        // Si le visiteur n'a plus de connexion internet au moment de cliquer
        alert("Erreur de connexion. Vérifiez votre réseau internet.");
        btn.innerHTML = originalBtnText;
        btn.disabled = false;
      }
    });
  }
});