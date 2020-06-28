import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

export default function Footer ({ siteTitle }) {
  return (
    <footer>
      <div>
        <span>
          © {new Date().getFullYear()},{' '}
          <Link to='/'>{siteTitle.toLowerCase()}.now.sh</Link>
        </span>
      </div>
    </footer>
  )
}

Footer.propTypes = {
  siteTitle: PropTypes.string
}
