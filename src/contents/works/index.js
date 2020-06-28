import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'

import Layout from 'layouts/Layout'
import SEO from 'components/SEO'

export default function WorksIndex ({
  data: {
    allMdx: { nodes }
  }
}) {
  return (
    <>
      <SEO title='My Works' />
      <Layout>
        {nodes.map(({ fields, frontmatter }) => {
          const { date, title } = frontmatter

          return (
            <article key={fields.slug}>
              <h2 className='PostTitle'>
                <Link to={fields.slug}>{title}</Link>
              </h2>
              <time>{date}</time>
            </article>
          )
        })}
      </Layout>
    </>
  )
}

WorksIndex.propTypes = {
  data: PropTypes.object.isRequired
}

export const pageQuery = graphql`
  query {
    allMdx(
      filter: { fields: { slug: { glob: "/works/**" } } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      ...posts
    }
  }
`
