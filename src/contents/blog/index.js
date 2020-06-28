import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'

import Layout from 'layouts/Layout'
import SEO from 'components/SEO'

export default function BlogIndex ({
  data: {
    allMdx: { nodes }
  }
}) {
  return (
    <>
      <SEO title='Thoughts Unspoken' />
      <Layout>
        {nodes.map(({ fields: { slug }, frontmatter: { date, title } }) => (
          <article key={slug}>
            <h2 className='PostTitle'>
              <Link to={slug}>{title}</Link>
            </h2>
            <time>{date}</time>
          </article>
        ))}
      </Layout>
    </>
  )
}

BlogIndex.propTypes = {
  data: PropTypes.object.isRequired
}

export const pageQuery = graphql`
  query {
    allMdx(
      filter: { fields: { slug: { glob: "/blog/**" } } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      ...posts
    }
  }
`
