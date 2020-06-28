import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

import Logo from './Logo'

export default function Header ({ siteTitle }) {
  return (
    <header>
      <div>
        <Link to='/'>
          <Logo siteTitle={siteTitle} />
        </Link>
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string
}
