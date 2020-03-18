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
- Docker / Docker-Compose (Optional)

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

## Adding routes

Routes are handled the same way as they are in the gatsby default starter.

<br />

Simply create a file in the `src/pages` directory.

IE:

`src/pages/my-cool-route.tsx` can be navigated via `localhost:8000/my-cool-route`

## Features

### Aliased module imports

- `import x from "~"` => `import x from "./src"`
- `import x from "~components"` => `import x from "./src/components"`
- `import x from "~fixtures"` => `import x from "./__fixtures__/"`

### Typescript by default

All components are `.tsx` files by default

<br />

Pages are written as `.tsx` files.

### CSS-in-JS using Emotion

[emotion.sh](emotion.sh)

### Testing via Jest / React-Testing-Library / (And later Cypress)

Jest - [jestjs.io](jestjs.io)

React-Testing-Library - [https://testing-library.com/docs/react-testing-library/intro](https://testing-library.com/docs/react-testing-library/intro)

Cypress - [cypress.io](cypress.io)

### Docker / Docker-Compose included

Default `Dockerfile` and `docker-compose.yml` included

### Deviations

Gatsby uses [react-helmet](https://github.com/nfl/react-helmet) however, `react-helmet` uses "unsafe component lifecycles". There is a fork of `react-helmet` called [react-helmet-async](https://github.com/staylor/react-helmet-async) which solves the lifecycle method issue.

As a result [src/components/seo/index.tsx](https://github.com/ParamagicDev/gatsby-starter-emotion-typescript-and-tests/blob/master/src/components/seo/index.tsx) uses `react-helmet-async`.

### Roadmap

- [ ] Adding Cypress
- [ ] Add more detail to the readme as to capabilities.
- [ ] Finish unit testing of components
- [ ] Add integration tests
- [ ] Add E2E testing
