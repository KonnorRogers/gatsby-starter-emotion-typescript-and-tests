/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

import path from "path";

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        $: path.resolve(__dirname, "src/"),
        $components: path.resolve(__dirname, "src/components"),
        $styles: path.resolve(__dirname, "src/styles"),
      },
    },
  });
};
