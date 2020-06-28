const { createFilePath } = require('gatsby-source-filesystem')

const { matchPosts } = require('./utils')

module.exports = ({ actions: { createNodeField }, getNode, node }) => {
  if (node.internal.type === 'Mdx') {
    const [, path] = matchPosts(node.fileAbsolutePath)
    createNodeField({
      node,
      name: 'slug',
      value: `/${path}${createFilePath({
        node,
        getNode,
        trailingSlash: false
      })}`
    })
  }
}
