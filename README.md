# Nest.js GraphQL practice

This is a simple [GraphQL](https://graphql.org/) server using [Nest.js](https://nestjs.com/),
and uses [Prisma](https://www.prisma.io/), [PlanetScale](https://planetscale.com/),

## Languages and Tools

<div align="center">
  <a href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer"> 
    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" alt="typescript" width="40" height="40"/> 
  </a>
  <a href="https://nestjs.com/" target="_blank" rel="noreferrer"> 
    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nestjs/nestjs-plain.svg" alt="nestjs" width="40" height="40"/> 
  </a> 
  <a href="https://graphql.org" target="_blank" rel="noreferrer"> 
    <img src="https://www.vectorlogo.zone/logos/graphql/graphql-icon.svg" alt="graphql" width="40" height="40"/> 
  </a> 
  <a href="https://www.mysql.com/" target="_blank" rel="noreferrer"> 
    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg" alt="mysql" width="40" height="40"/> 
  </a>
</div>

# Features

- [X] [GraphQL](https://graphql.org/)
- [X] [Prisma ORM](https://www.prisma.io/)
- [X] [PlanetScale](https://planetscale.com/)
- [ ] Authentication
- [ ] Dockerized

## Get Started

Generate the .env file, and add your database credentials.

```bash
$ cp .env.example .env
```

Install the dependencies with [PnPm](https://pnpm.io/)

```bash
$ pnpm install
```

Generate Prisma clients and schemas

```bash
$ prisma generate
```

Running the app

```bash
# development
$ pnpm start

# watch mode
$ pnpm start:dev

# production mode
$ pnpm start:prod
```

Testing the app

```bash
# unit tests
$ pnpm test

# e2e tests
$ pnpm test:e2e

# test coverage
$ pnpm test:cov
```
