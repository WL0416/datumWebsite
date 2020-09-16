const path = require("path")

module.exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  const result = await graphql(
    `
      {
        allContentfulSubPage {
          nodes {
            title
            slug
            body {
              content {
                content {
                  value
                }
              }
            }
          }
        }
      }
    `
  )

  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  // Create pages for each course.
  const subPage = path.resolve(`src/templates/subpage.js`)
  result.data.allContentfulSubPage.nodes.forEach(node => {
    const slug = node.slug
    createPage({
      path: "/" + slug,
      component: subPage,
      // In your blog post template's graphql query, you can use pagePath
      // as a GraphQL variable to query for data from the markdown file.
      context: {
        content: node.body.content[0].content[0].value,
      },
    })
  })
}
