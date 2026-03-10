# 🏓 Padel Reservation Platform - MERN Stack

## 📌 Description du projet

Cette application est une **plateforme web de réservation de terrains de Padel** développée avec la **stack MERN (MongoDB, Express.js, React.js, Node.js)**.

Elle permet aux utilisateurs de réserver facilement des terrains de padel selon la **date, l'heure et le nombre de joueurs**.  
La plateforme inclut également un **système multi-administrateur** permettant aux clubs ou gestionnaires de terrains de gérer leurs réservations, leurs disponibilités et leurs utilisateurs.

L'objectif du projet est de fournir une **solution moderne, rapide et scalable** pour la gestion des réservations sportives en ligne.

---

# 🚀 Fonctionnalités

## 👤 Utilisateurs

- Création de compte
- Connexion / Authentification sécurisée (JWT)
- Consultation des terrains disponibles
- Réservation d'un terrain
- Choix de la date et de l'heure
- Historique des réservations
- Annulation d'une réservation
- Profil utilisateur

---

## 🏢 Administrateurs

- Dashboard administrateur
- Gestion des terrains de padel
- Gestion des créneaux horaires
- Gestion des réservations
- Gestion des utilisateurs
- Statistiques de réservation
- Multi-admin support

---

## 🏓 Gestion des terrains

- Ajouter un terrain
- Modifier un terrain
- Supprimer un terrain
- Définir les disponibilités
- Gestion des horaires

---

# 🧠 User Stories

### Utilisateur

- En tant qu'utilisateur, je veux **créer un compte** afin de pouvoir réserver un terrain.
- En tant qu'utilisateur, je veux **voir les terrains disponibles** afin de choisir où jouer.
- En tant qu'utilisateur, je veux **réserver un créneau horaire** afin de garantir mon terrain.
- En tant qu'utilisateur, je veux **annuler une réservation** si je ne peux plus jouer.

### Administrateur

- En tant qu'administrateur, je veux **ajouter des terrains** afin de gérer mon club.
- En tant qu'administrateur, je veux **voir toutes les réservations** afin d'organiser les créneaux.
- En tant qu'administrateur, je veux **gérer les utilisateurs** afin de maintenir la plateforme.

---

# 🛠️ Technologies utilisées

## Frontend

- React.js
- React Router
- Axios
- Tailwind CSS ou CSS Modules

## Backend

- Node.js
- Express.js
- JWT Authentication
- REST API

## Base de données

- MongoDB
- Mongoose

## Autres outils

- Git
- GitHub
- Postman
- dotenv

---

# 🏗️ Architecture du projet

```
padel-reservation-app
│
├── backend
│   ├── controllers
│   ├── models
│   ├── routes
│   ├── middleware
│   └── server.js
│
├── frontend
│   ├── src
│   │   ├── pages
│   │   ├── components
│   │   ├── services
│   │   └── App.js
│
└── README.md
```

---

# ⚙️ Installation du projet

## 1️⃣ Cloner le repository

```bash
git clone https://github.com/username/padel-reservation-app.git
```

```
cd padel-reservation-app
```

---

## 2️⃣ Installation du Backend

```
cd backend
npm install
```

Créer un fichier `.env`

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

Lancer le serveur :

```
npm run dev
```

---

## 3️⃣ Installation du Frontend

```
cd frontend
npm install
```

Lancer l'application :

```
npm start
```

---

# 🌐 API Endpoints

## Authentification

```
POST /api/auth/register
POST /api/auth/login
```

## Réservations

```
GET /api/reservations
POST /api/reservations
DELETE /api/reservations/:id
```

## Terrains

```
GET /api/courts
POST /api/courts
PUT /api/courts/:id
DELETE /api/courts/:id
```

---

# 🔐 Sécurité

- Authentification avec **JWT**
- Protection des routes
- Validation des données
- Hash des mots de passe avec **bcrypt**

---

# 📈 Améliorations futures

- Paiement en ligne
- Notifications email
- Application mobile
- Statistiques avancées
- Calendrier interactif
- QR code pour accès terrain

---

# 👨‍💻 Auteur

Projet développé avec la **stack MERN** pour démontrer la création d'une **application web full stack moderne et scalable**.

---

# 📜 Licence

Projet open-source libre d'utilisation.