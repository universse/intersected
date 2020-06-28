import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'

import Layout from 'layouts/Layout'
import SEO from 'components/SEO'

export default function IndexPage ({
  data: {
    allMdx: { nodes }
  }
}) {
  return (
    <>
      <SEO title='Stream' />
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

IndexPage.propTypes = {
  data: PropTypes.object.isRequired
}

export const pageQuery = graphql`
  query {
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
        }
      }
    }
  }
`
