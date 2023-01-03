const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { data } = await graphql(`
    query News {
      allStrapiNewsticker {
        nodes {
          slug
        }
      }
      allStrapiBildungsangebote {
        nodes {
          slug
          categories {
            category
          }
        }
      }
    }
  `)

  data.allStrapiNewsticker.nodes.forEach(node => {
    actions.createPage({
      path: "/aktuelles/" + node.slug,
      component: path.resolve("./src/templates/news-details.js"),
      context: { slug: node.slug },
    })
  })

  data.allStrapiBildungsangebote.nodes.forEach(node => {
    actions.createPage({
      path:
        "/bildungsangebote/" +
        node.categories[0].category.toLowerCase() +
        "/" +
        node.slug.toLowerCase(),
      component: path.resolve("./src/templates/bildungsangebote-details.js"),
      context: { slug: node.slug },
    })
  })
}
