/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require("path")

exports.createPages = async ({ actions }) => {
  for (let number of [1, 2, 3]) {
    actions.createPage({
      path: `dynamic-page-${number}`,
      // you'll need to create this
      component: path.resolve("src/templates/dynamic-page.js"),
      context: {
        pageNumber: number,
      },
    })
  }
}
