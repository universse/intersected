const { matchPosts } = require('./utils')

module.exports = async ({ page, actions: { createPage, deletePage } }) => {
  const match = matchPosts(page.component)

  if (match) {
    const [, path, filename] = match

    if (path === 'pages') return

    deletePage(page)

    filename === 'index.js'
      ? createPage({
          ...page,
          path: `/${path}`
        })
      : createPage({
          ...page,
          path: `/${path}${page.path}`
        })
  }
}
