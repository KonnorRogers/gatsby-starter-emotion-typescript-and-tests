const babelOptions = {
  presets: [
    "babel-preset-gatsby",
    "@emotion/babel-preset-css-prop",
    "@babel/preset-typescript",
  ],
};

module.exports = require("babel-jest").createTransformer(babelOptions);
