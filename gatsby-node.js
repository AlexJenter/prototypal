/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

 // You can delete this file if you're not using it

const Promise = require(`bluebird`)
const path = require(`path`)

// Implement the Gatsby API “onCreatePage”. This is
// called after every page is created.
exports.onCreatePage = ({ page, boundActionCreators }) => {
  const { createPage } = boundActionCreators
  return new Promise((resolve, reject) => {
    // Make the front page match everything client side.
    // Normally your paths should be a bit more judicious.
    if (page.path === `/proto/`) {
      page.matchPath = `/proto/:page`
      createPage(page)
    }
    resolve()
  })
}
