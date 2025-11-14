# Projet Académique Node/NestJS - Users API  - Smail Chemlali


## 📚 Contexte Académique

Ce projet backend a été développé dans le cadre d'un projet académique encadré par **Ameni Hajri**.

L'objectif de ce projet est d'apprendre et de maîtriser les concepts de Node.js côté serveur en utilisant le framework NestJS, tout en implémentant une API REST simple pour la gestion d'utilisateurs.

## 🎯 Objectifs Pédagogiques

- Comprendre l'architecture modulaire d'une application NestJS
- Implémenter des contrôleurs et des routes REST
- Utiliser les DTOs et la validation des données
- Gérer l'injection de dépendances et les services
- Écrire des tests unitaires et e2e avec Jest et Supertest
- Utiliser les outils de développement (lint, format, scripts npm)

## 🚀 Fonctionnalités de l'API

- **CRUD basique sur les utilisateurs** : création, lecture, mise à jour, suppression
- **Filtrage** : exemple de filtrage par statut (active/inactive)
- **Validation (à améliorer)** : DTO fournis (possibilité d'ajouter ValidationPipe)
- **Endpoints de test** : contrôleurs et tests e2e inclus

## 💻 Technologies Utilisées

- **NestJS (v11)** - Framework backend structuré
- **TypeScript** - Langage principal
- **Jest & Supertest** - Tests unitaires et e2e
- **ESLint & Prettier** - Linting et formatage

## 🛠️ Installation et Démarrage

### Prérequis
- Node.js (version 18 ou supérieure recommandé)
- npm (ou yarn)

### Installation
```powershell
npm install
```

### Scripts utiles (depuis `package.json`)

- `npm run start` — démarre l'application (production/local selon configuration)
- `npm run start:dev` — démarre en mode développement (watch)
- `npm run build` — compile TypeScript vers `dist/`
- `npm run test` — lance les tests unitaires
- `npm run test:e2e` — lance les tests end-to-end
- `npm run lint` — lance ESLint et tente de corriger
- `npm run format` — formate le code avec Prettier

### Lancer le serveur en développement
```powershell
npm run start:dev
```
Ouvrez `http://localhost:3000` (par défaut) et utilisez les endpoints exposés (`/users`, etc.).

## 📁 Structure du Projet

```
src/
├── app.controller.ts
├── app.module.ts
├── app.service.ts
├── main.ts             # point d'entrée
└── users/
    ├── users.controller.ts
    ├── users.module.ts
    ├── dto/
    │   └── create-user.dto.ts
    └── users.service.ts (si ajouté)
test/                   # tests e2e
```

## 🔧 Scripts et bonnes pratiques

- Utiliser `start:dev` pour le développement local.
- Ajouter `ValidationPipe` global si vous voulez activer la validation sur DTOs :

```ts
// main.ts
app.useGlobalPipes(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }));
```

## 📖 Concepts côté serveur abordés

1. Contrôleurs et routes (REST)
2. DTO et validation
3. Services et injection de dépendances
4. Tests unitaires et e2e (Jest + Supertest)
5. Linting et formatage automatique

## 👥 Encadrement

**Professeur :** Ameni Hajri  
**Matière :** Javascript côté serveur  
**Développeur :** Smail Chemlali

---

*Projet réalisé dans un contexte pédagogique - [Année académique 2025-2026]*
<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Project setup

```bash
$ npm install
```

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Run tests

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Deployment

When you're ready to deploy your NestJS application to production, there are some key steps you can take to ensure it runs as efficiently as possible. Check out the [deployment documentation](https://docs.nestjs.com/deployment) for more information.

If you are looking for a cloud-based platform to deploy your NestJS application, check out [Mau](https://mau.nestjs.com), our official platform for deploying NestJS applications on AWS. Mau makes deployment straightforward and fast, requiring just a few simple steps:

```bash
$ npm install -g @nestjs/mau
$ mau deploy
```

With Mau, you can deploy your application in just a few clicks, allowing you to focus on building features rather than managing infrastructure.

## Resources

Check out a few resources that may come in handy when working with NestJS:

- Visit the [NestJS Documentation](https://docs.nestjs.com) to learn more about the framework.
- For questions and support, please visit our [Discord channel](https://discord.gg/G7Qnnhy).
- To dive deeper and get more hands-on experience, check out our official video [courses](https://courses.nestjs.com/).
- Deploy your application to AWS with the help of [NestJS Mau](https://mau.nestjs.com) in just a few clicks.
- Visualize your application graph and interact with the NestJS application in real-time using [NestJS Devtools](https://devtools.nestjs.com).
- Need help with your project (part-time to full-time)? Check out our official [enterprise support](https://enterprise.nestjs.com).
- To stay in the loop and get updates, follow us on [X](https://x.com/nestframework) and [LinkedIn](https://linkedin.com/company/nestjs).
- Looking for a job, or have a job to offer? Check out our official [Jobs board](https://jobs.nestjs.com).

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://twitter.com/kammysliwiec)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).
