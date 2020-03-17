/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require("path");

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        "~$": path.resolve(__dirname, "src/"),
        "~fixtures$": path.resolve(__dirname, "__fixtures__/"),
      },
    },
  });
};
