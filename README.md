# ✨ Mon Portfolio Professionnel

Bienvenue sur le dépôt GitHub de mon portfolio en ligne. Il s'agit d'un site vitrine moderne, entièrement responsive, conçu pour présenter mes compétences, mes projets et me permettre de rester joignable facilement.

Je privilégie une approche orientée **"Vanilla JavaScript"** pour maîtriser les bases fondamentales du développement web avant d'évoluer vers des frameworks.

🚀 **[Voir le site en direct ici](https://donovan057.github.io/portfolio-dono/)**

---

## 🎨 Fonctionnalités & UX/UI

* **Design Glassmorphismc :** Une interface moderne aux tons sombres avec des effets de transparence et de flou d'arrière-plan (*backdrop-filter*).
* **Mouse Tracking Shine :** Une effet de lumière dynamique qui suit le curseur de la souris sur les éléments interactifs (bouton, cartes de projets).
* **Navigation fluide :** Un système de défilement doux (*Smooth Scroll*) géré intelligement en JavaScript pour naviguer entre les sections sans rechargement.
* **Formulaire de contact sécurisé :** *Intégration d'**API Web3Forms** pour la réception instantanée des e-mails.
  * Protection contre les spams via **Google reCAPTCHA v2**.
    * Gestion de l'expérience utilisateur (désactivation du bouton pendant l'envoi, message de succès dynamique).
* **Multi-pages optimisé :** Inclusion d'une page de Mentions Légales conforme (`legal.html`).

--- 

## 🛠️ Technologies utilisées

* **HTML5** & **CSS3** (variables CSS, Flexbox, Grid)
* **JavaScript (ES6+)** - Logique Vanilla (sans framework)
* **Vite.js** - Outillage de build rapide et moderne
* **GitHub Actions** - Automatisation complète de la compilation et du déploiement sur GitHub Pages

---

## ⚙️ Installation et lancement en local 

Si vous souhaitez cloner ce projet et le lancer sur votre machine : 

1. **Cloner le dépôt :**
   ```bash
   git clone [https://github.com/donovan057/portfolio-dono.git](https://github.com/donovan057/portfolio-dono.git)

2. **Accéder au dossier du projet :**
   ```cd portfolio-dono```

3. **Installer les dépendances Node.js :**
   ```npm install```

4. **Lancer le serveur de développement local :**
   ```npm run dev```

   Ouvrez ensuite l'adresse ```http://localhost:5173``` sur votre navigateur.

## 🚀 Déploiement

Le projet utilise un workflow CI/CD avec GitHub Actions (```.github/workflows/deploy.yml```). À chaque fois qu'une modification est poussée sur la branche ```main```, le robot s'occupe automatiquement de : 

1. Configurer l'environnement Node.js.
2. Compiler le projet avec Vite (```npm run build```).
3. Publier les fichiers générés du dossier ```/dist``` directement sur **GitHub Pages**
