import React from 'react'
import PropTypes from 'prop-types'

import Layout from 'layouts/Layout'
import SEO from 'components/SEO'

export default function WorksLayout ({ children, pageContext }) {
  const { title, date } = pageContext.frontmatter

  return (
    <>
      <SEO title={title} />
      <Layout>
        <article>
          <h1>{title}</h1>
          <time>
            {new Date(date).toLocaleDateString(undefined, {
              day: 'numeric',
              month: 'long',
              year: 'numeric'
            })}
          </time>
          {children}
        </article>
      </Layout>
    </>
  )
}

WorksLayout.propTypes = {
  children: PropTypes.node.isRequired,
  pageContext: PropTypes.object.isRequired
}
