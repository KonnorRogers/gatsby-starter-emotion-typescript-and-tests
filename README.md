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

### Adding routes

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

As a result, [src/components/seo/index.tsx](https://github.com/ParamagicDev/gatsby-starter-emotion-typescript-and-tests/blob/master/src/components/seo/index.tsx) uses `react-helmet-async`.

### Changing Aliases

To change an alias is quite a process. You must change 4 files:

`gatsby-node.js`

`tsconfig.json`

`jest.config.js`

`eslintrc.js`

Explanation:

`gatsby-node.js` will affect how gatsby aliases imports. If this is not set,
Gatsby itself will throw an error about being unable to find the import.

`tsconfig.json` tells the typescript compiler where to find an aliased module. If
this is not set properly, the typescript compiler will throw an error.

`jest.config.js` The moduleNameMapper API tells Jest where to import modules from
inside of your testing environment. If this is not set properly, jest will throw
an error inside of your tests.

`eslintrc.js` I have installed 2 packages:

[eslint-plugin-import](https://github.com/benmosher/eslint-plugin-import)

and

[eslint-import-resolver-alias](https://github.com/johvin/eslint-import-resolver-alias#readme)

Both of the above are installed when you run `npm install`. These 2 plugins,
combined with the aliases I have already mapped in `.eslintrc.js` allow you to be able
have autocomplete in your text editor of choice if it integrates with eslint.

<br />

#### Modifying aliases

Here is how the modifications would take place:

<br />

##### [gatsby-node.js](https://github.com/ParamagicDev/gatsby-starter-emotion-typescript-and-tests/blob/master/gatsby-node.js)

```js
// gatsby-node.js
const path = require("path");

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        // Aliased paths go here
        "~$": path.resolve(__dirname, "src/"),
        "~fixtures": path.resolve(__dirname, "__fixtures__"),
      },
    },
  });
};
```

Further reading on gatsby-node aliased paths can be found here:

[https://www.gatsbyjs.org/docs/api-files-gatsby-node/](https://www.gatsbyjs.org/docs/api-files-gatsby-node/)

<br />

##### [tsconfig.json](https://github.com/ParamagicDev/gatsby-starter-emotion-typescript-and-tests/blob/master/tsconfig.json)

```json
// tsconfig.json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "~fixtures/*": ["__fixtures__/*"],
      "~*": ["src/*"]
    }
  }
}
```

`"paths"` is where you would place your aliases.

Further reading on tsconfig.json can be found here:

[https://www.typescriptlang.org/docs/handbook/module-resolution.html](https://www.typescriptlang.org/docs/handbook/module-resolution.html)

<br />

##### [jest.config.js](https://github.com/ParamagicDev/gatsby-starter-emotion-typescript-and-tests/blob/master/jest.config.js)

```js
// jest.config.js
module.exports = {
  // ...
  moduleNameMapper: {
    // ...
    // Your aliases here
    "~fixtures(.*)": "<rootDir>/__fixtures__$1",
    "~(.*)$": "<rootDir>/src/$1",
  },
  // ...
};
```

Further reading on Jest module name mapping can be found here:

[https://jestjs.io/docs/en/configuration#modulenamemapper-objectstring-string](https://jestjs.io/docs/en/configuration#modulenamemapper-objectstring-string)

<br />

##### [.eslintrc.js](https://github.com/ParamagicDev/gatsby-starter-emotion-typescript-and-tests/blob/master/.eslintrc.js)

```js
// .eslintrc.js
module.exports = {
  // ...
  settings: {
    // ...
    "import/resolver": {
      // Aliases go here
      alias: [
        ["~fixtures", "./__fixtures__"],
        ["~", "./src/"],
      ],
    },
  },
  // ...
};
```

Further reading about how ESLint handles import can be found here:

[https://github.com/johvin/eslint-import-resolver-alias#readme](https://github.com/johvin/eslint-import-resolver-alias#readme)

<br />

## Roadmap

- [ ] Add Cypress
- [x] Add more detail to the readme as to capabilities.
- [x] Finish unit testing of components
- [ ] Add E2E testing
