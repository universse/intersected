function matchPosts (path) {
  return path.match(/src\/contents\/(\w+)\/([\w-.]+)/)
}

module.exports = {
  matchPosts
}
