# Nx Microservice Monorepo (NestJS, Prisma, GraphQL)

## Overview

This repository is a **monorepo** managed by [Nx](https://nx.dev/) for building scalable, modular backends using [NestJS](https://nestjs.com/), [Prisma](https://www.prisma.io/), and [GraphQL](https://graphql.org/). It is designed for rapid development, maintainability, and best practices in modern TypeScript backend engineering.

---

## Features

- **Monorepo with Nx**: Modular structure for apps and libraries, supporting scalable development.
- **NestJS Backend**: Main server app using NestJS, structured with modules for users, authentication, and Prisma integration.
- **GraphQL API**: Apollo Server integration with auto-generated schemas and playground.
- **Prisma ORM**: Type-safe database access, migrations, and PostgreSQL support.
- **Authentication**: JWT-based authentication with Passport.js strategies.
- **Custom Libraries**: Shared code and GraphQL models in `libs/nestjs`.
- **CI/CD**: GitHub Actions workflow for linting, testing, and building.
- **Code Quality**: ESLint, Prettier, Husky, and lint-staged for consistent code style and pre-commit checks.
- **Testing**: Jest for unit and integration tests.

---

## Project Structure

```
.
├── apps/
│   └── server/             # Main NestJS backend app
│       ├── src/            # Application source code
│       └── prisma/         # Prisma schema and migrations
├── libs/
│   └── nestjs/             # Shared NestJS libraries (GraphQL models, etc.)
├── .github/workflows/      # CI/CD pipeline (GitHub Actions)
├── package.json            # Root dependencies and scripts
├── nx.json                 # Nx workspace configuration
├── tsconfig.base.json      # Shared TypeScript config
└── ...
```

---

## Main Tools & Technologies

| Tool / Library     | Purpose                                 |
| ------------------ | --------------------------------------- |
| Nx                 | Monorepo management, task orchestration |
| NestJS             | Modular backend framework               |
| GraphQL / Apollo   | API layer, schema, playground           |
| Prisma             | ORM, migrations, PostgreSQL integration |
| Passport / JWT     | Authentication & authorization          |
| Jest               | Testing framework                       |
| ESLint, Prettier   | Code style and linting                  |
| Husky, lint-staged | Pre-commit hooks for code quality       |
| GitHub Actions     | CI/CD pipeline                          |

---

## Getting Started

### Prerequisites

- Node.js v20+
- PostgreSQL database

### Install Dependencies

```bash
npm ci
```

### Environment Setup

Create a `.env` file in `apps/server/` with at least:

```
DATABASE_URL=postgresql://user:password@localhost:5432/dbname
PORT=3333
JWT_SECRET=your_secret
```

### Database Migration

```bash
npx nx run server:prisma migrate dev --name init
```

### Start Development Server

```bash
npx nx serve server
```

The API will be available at `http://localhost:3333/api` and the GraphQL playground at `/api/graphql`.

---

## Project Structure Details

### apps/server

- `src/app/auth/` - Authentication module (JWT, guards, strategies)
- `src/app/users/` - User management module
- `src/app/prisma/` - Prisma service integration
- `main.ts` - Application bootstrap, global pipes, config

### libs/nestjs

- `lib/graphql/` - Shared GraphQL models and types

---

## CI/CD

- GitHub Actions workflow in `.github/workflows/ci.yml` runs lint, test, and build on push and PRs.
- Nx Cloud (optional) for distributed task execution.

---

## Contributing

1. Fork the repo and create your branch from `main`.
2. Run `npm ci` and ensure all checks pass (`npx nx run-many -t lint test build`).
3. Submit a PR with clear description and context.

---

## License

[MIT](LICENSE)

---

## Credits

- [NestJS](https://nestjs.com/)
- [Prisma](https://www.prisma.io/)
- [Nx](https://nx.dev/)
- [GraphQL](https://graphql.org/)

---

_Last updated: 2025-08-15_
