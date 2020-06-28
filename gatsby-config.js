const config = {
  siteMetadata: {
    title: 'Intersected',
    description: "Phuoc's Personal Site"
  },
  plugins: [
    {
      resolve: 'gatsby-theme-essentials'
      // options: {
      //   enableManifest: {
      //     name: 'Phuocsss',
      //     short_name: 'Phuocsss',
      //     start_url: '/',
      //     background_color: '#663399',
      //     theme_color: '#663399',
      //     display: 'standalone',
      //     icon: 'src/images/icon.png' // This path is relative to the root of the site.
      //   }
      // }
    },
    // 'gatsby-plugin-layout',
    'gatsby-plugin-catch-links',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`
      }
    },
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        extensions: ['.mdx', '.md'],
        defaultLayouts: {},
        gatsbyRemarkPlugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 672
            }
          }
        ]
      }
    }
  ]
}

createMDXPages('blog')
createMDXPages('works')

function createMDXPages (key) {
  const source = `/src/contents/${key}`

  try {
    const mdxPluginIndex = config.plugins.findIndex(
      ({ resolve }) => resolve === 'gatsby-plugin-mdx'
    )

    config.plugins[mdxPluginIndex].options.defaultLayouts[
      key
    ] = require.resolve(`.${source}/Layout.js`)
  } catch (e) {}

  config.plugins.unshift(
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: key,
        path: `${__dirname}${source}`
      }
    },
    {
      resolve: 'gatsby-plugin-page-creator',
      options: {
        ignore: ['Layout.js'],
        path: `${__dirname}${source}`
      }
    }
  )
}

module.exports = config
