import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Headroom from 'react-headroom'
import './header.css'
import logo from '../images/ur-logo-2.png'

const Header = () => (
  <Headroom disableInlineStyles>
  <header className="site-header">
    <nav className="navbar navbar-primary">
      <div className="navbar-wrap">
        <div className="navbar-container">
          <div className="navbar-content">
            <Link to="/" className="navbar-brand">
              <img src={logo} alt="Site logo" />
            </Link>
            <ul className="navbar-nav ">
              <li className="menu-item">
                <Link to="/">Статьи</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  </header>
  </Headroom>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
