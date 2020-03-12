<p align="center">
  <a href="https://www.gatsbyjs.org">
    <img alt="Gatsby" src="https://www.gatsbyjs.org/monogram.svg" width="60" />
  </a>
</p>
<h1 align="center">
  Gatsby Starter using Emotion, Typescript, Jest, React-Testing-Library (and later Cypress).
</h1>

## Purpose

The purpose of this is to get quickly up and running with a Gatsby site using
typescript, emotion, and jest / react-testing-library as well as Cypress (coming later).

I also wanted to keep it as close to the original gatsby starter as possible.

## Prerequisites

- Node 12.13 (I have only tested this on 12.13, it could definitely work on lower versions)

## Getting Started

### With Docker / Docker-compose

```bash
npx gatsby new <YourProjectName> https://github.com/ParamagicDev/gatsby-starter-emotion-typescript-and-tests.git
cd <YourProjectName>
docker-compose up --build
```

Navigate to `localhost:8000` and you will see the site running!
You can run the test suite in a seperate terminal and you can run:

```bash
docker-compose exec web npm run test
```

### Without Docker / Docker-compose

```bash
npm install -g gatsby-cli
gatsby new <YourProjectName> https://github.com/ParamagicDev/gatsby-starter-emotion-typescript-and-tests.git
cd <YourProjectName>
gatsby develop
```

Navigate to `localhost:8000` to see your site running in browser.

To run the test suite:

```bash
npm run test
```

For a further list of commands, check out the `package.json` file.

## Features

### Aliased module imports:

- `import x from "$"` => `import x from "./src"`
- `import x from "$components"` => `import x from "./src/components"`
- `import x from "$styles"` => `import x from "./src/styles"`

### Typescript by default

All components are `.tsx` files by default
Pages are written as `.tsx` files.

### CSS-in-JS using Emotion

[emotion.sh](emotion.sh)

### Testing via Jest / React-Testing-Library / (And later Cypress)

[jestjs.io](jestjs.io)
[https://testing-library.com/docs/react-testing-library/intro](https://testing-library.com/docs/react-testing-library/intro)

### Docker / Docker-Compose included

Default `Dockerfile` and `docker-compose.yml` included

### Roadmap

- [ ] Adding Cypress
