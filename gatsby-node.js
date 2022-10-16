const path = require('path')

exports.createPages = async ({ graphql, actions }) => {
  const { data } = await graphql(`
    query Projects {
      allMarkdownRemark {
        nodes {
          frontmatter {
            slug
          }
        }
      }
    }
  `)

  data.allMarkdownRemark.nodes.map(node => {
    actions.createPage({
      path: '/projects/' + node.frontmatter.slug, // generates the route for page
      component: path.resolve('./src/templates/project-details.jsx'), // links the component used as template to build the page
      context: { slug: node.frontmatter.slug } // what is passed to the component
    })
  })
}
