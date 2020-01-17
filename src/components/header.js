import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import './header.css'

const Header = ({ siteTitle }) => (
  <header className="site-header">
    <nav className="navbar navbar-primary">
      <div className="navbar-wrap">
        <div className="navbar-container">
          <div className="navbar-content">
            <Link to="/" className="navbar-brand">{siteTitle}</Link>
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
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
