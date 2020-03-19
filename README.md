<p align="center">
  <a href="https://www.gatsbyjs.org">
    <img alt="Gatsby" src="https://www.gatsbyjs.org/monogram.svg" width="60" />
  </a>
</p>
<h1 align="center">
  Gatsby Starter using Emotion, Typescript, Jest, React-Testing-Library (and later Cypress).
</h1>

<h2 align="center" id="table-of-contents">
  <a href="#table-of-contents">Table of Contents</a>
</h2>

<ul>
  <li><a href="#purpose">Purpose</a></li>
  <li><a href="#prereqs">Prerequisites</a></li>
  <li><a href="#getting-started">Getting Started</a></li>
    <ul>
      <li><a href="#docker">With Docker / Docker-Compose</a></li>
      <li><a href="#no-docker">Without Docker</a></li>
      <li><a href="#commands">Commands</a></li>
      <ul>
        <li><a href="#jest-commands">Jest Commands</a></li>
        <li><a href="#cypress-commands">Cypress Commands</a></li>
      </ul>
      <li><a href="#routes">Adding Routes</a></li>
    </ul>
  <li><a href="#features"> Features </a></li>
    <ul>
      <li><a href="#aliases">Aliased Module Imports</a></li>
      <li><a href="#typescript">Typescript by Default</a></li>
      <li><a href="#css-in-js">CSS-in-JS (Emotion)</a></li>
      <li><a href="#testing">Testing with Jest, React-Testing-Library, and Cypress</a></li>
      <li><a href="#dockerfile">Dockerfile & docker-compose.yml included</a></li>
    </ul>
  <li><a href="#deviations"> Deviations </a></li>
    <ul>
      <li><a href="#react-helmet">React Helmet Async </a></li>
      <li><a href="#changing-aliases"> Changing Aliases </a></li>
        <ul>
          <li>
            <a href="#alias-modification-process">
              Alias Modification Process
            </a>
          </li>
          <ul>
            <li><a href="#gatsby-node-js">gatsby-node.js</a></li>
            <li><a href="#tsconfig-json">tsconfig.json</a></li>
            <li><a href="#jest-config-js">jest.config.js</a></li>
            <li><a href="#eslintrc-js">.eslintrc.js</a></li>
          </ul>
        </ul>
    </ul>
    <li><a href="#roadmap">Roadmap</a></li>
</ul>

<h2 id="purpose">Purpose</h2>

The purpose of this is to get quickly up and running with a Gatsby site using
typescript, emotion, and jest / react-testing-library as well as Cypress (coming later).

I also wanted to keep it as close to the original gatsby starter as possible.

<h2 id="prereqs"> Prerequisites </h2>

- Node 12.13 (I have only tested this on 12.13, it could definitely work on lower versions)
- Docker / Docker-Compose (Optional)

<h2 id="getting-started"> Getting Started </h2>

<h3 id="docker"> With Docker / Docker-compose </h3>

```bash
npx gatsby new <YourProjectName> https://github.com/ParamagicDev/gatsby-starter-emotion-typescript-and-tests.git
cd <YourProjectName>
docker-compose up --build
```

Navigate to `localhost:8000` and you will see the site running!
You can run the test suite in a seperate terminal and you can run:

```bash
docker-compose exec web npm run test # runs jest unit tests
docker-compose exec web npm run test:e2e:ci # runs cypress end to end testing
```

<h3 id="no-docker"> Without Docker / Docker-compose </h3>

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

<h3 id="commands">Commands</h3>

[List of additional Gatsby Commands](https://www.gatsbyjs.org/docs/gatsby-cli)

<strong>`npm run format`</strong>

Uses prettier to auto fix `.ts[x] .js[x] .json .md` files

<strong>`npm run lint`</strong>

Lints all `.ts[x]` files via eslint

<strong> `npm run type-check` </strong>

Runs `tsc` on the project

<h4 id="jest-commands"> Jest Commands </h4>

<strong>`npm run test`</strong> Single run of the Jest test suite

<strong>`npm run test:watch`</strong> Only watch for changed files

<strong>`npm run test:watchAll`</strong> Rerun test suite on file changes

<h4 id="cypress-commands"> Cypress commands </h4>

<strong>`npm run test:e2e`</strong> Runs Cypress in browser (Local development)

<strong>`npm run test:e2e:ci`</strong> Runs Cypress in a headless browser (CI/CD)

<h3 id="routes"> Adding routes </h3>

Routes are handled the same way as they are in the gatsby default starter.

<br />

Simply create a file in the `src/pages` directory.

IE:

`src/pages/my-cool-route.tsx` can be navigated via `localhost:8000/my-cool-route`

<h2 id="features"> Features </h2>

<h3 id="aliases"> Aliased module imports </h3>

- `import x from "~"` => `import x from "./src"`
- `import x from "~components"` => `import x from "./src/components"`
- `import x from "~fixtures"` => `import x from "./__fixtures__/"`

<h3 id="typescript"> Typescript by default </h3>

All components are `.tsx` files by default

<br />

Pages are written as `.tsx` files.

<h3 id="css-in-js"> CSS-in-JS using Emotion </h3>

[emotion.sh](emotion.sh)

<h3 id="testing"> Testing via Jest / React-Testing-Library / Cypress </h3>

Jest - [jestjs.io](jestjs.io)

Jest tests are located in the `./__tests__` directory.

<br />

React-Testing-Library - [https://testing-library.com/docs/react-testing-library/intro](https://testing-library.com/docs/react-testing-library/intro)

<br />

Cypress - [cypress.io](cypress.io)

Cypress tests are located in the `./cypress` directory.

<h3 id="dockerfile"> Dockerfile & docker-compose.yml included </h3>

Default `Dockerfile` and `docker-compose.yml` included

<h2 id="deviations">  Deviations </h2>

<h3 id="react-helmet"> React-Helmet-Async </h3>

Gatsby uses [react-helmet](https://github.com/nfl/react-helmet) however, `react-helmet` uses "unsafe component lifecycles". There is a fork of `react-helmet` called [react-helmet-async](https://github.com/staylor/react-helmet-async) which solves the lifecycle method issue.

As a result, [src/components/seo/index.tsx](https://github.com/ParamagicDev/gatsby-starter-emotion-typescript-and-tests/blob/master/src/components/seo/index.tsx) uses `react-helmet-async`.

<h3 id="changing-aliases"> Changing Aliases </h3>

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

<h4 id="alias-modification-process"> Alias Modification Process </h4>

Here is how the modifications would take place:

<h5 id="gatsby-node-js">
  <a href="https://github.com/ParamagicDev/gatsby-starter-emotion-typescript-and-tests/blob/master/gatsby-node.js">
    gatsby-node.js
  </a>
</h5>

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

<h5 id="tsconfig-json">
  <a href="https://github.com/ParamagicDev/gatsby-starter-emotion-typescript-and-tests/blob/master/tsconfig.json">
    tsconfig.json
  </a>
</h5>

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

<h5 id="jest-config-js">
  <a href="https://github.com/ParamagicDev/gatsby-starter-emotion-typescript-and-tests/blob/master/jest.config.js">
  jest.config.js
  </a>
</h5>

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

<h5 id="eslintrc-js">
  <a href="https://github.com/ParamagicDev/gatsby-starter-emotion-typescript-and-tests/blob/master/.eslintrc.js">
    .eslintrc.js
  </a>
</h5>

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

<h2 id="roadmap"> Roadmap </h2>

- [x] Add Cypress
- [x] Add more detail to the readme as to capabilities.
- [x] Finish unit testing of components
- [x] Add E2E testing
