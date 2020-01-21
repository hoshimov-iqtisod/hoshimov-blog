import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Headroom from 'react-headroom'
import './header.css'
import logo from '../images/hi_logo.svg'
import usaFlag from '../images/usa-flag.svg';
import ruFlag from '../images/ru-flag.svg';
import uzFlag from '../images/uz-flag.svg';

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
              <div className="nav-item dropdown">
                <span className="at-left">
                  <img src={uzFlag} alt="select language" />
                </span>
                <div className="dropdown-content">
                  <Link to="/">
                    <img src={uzFlag} alt="UZ flag" />
                    <span className="lang-dark">O'zbek</span>
                  </Link>
                  <Link to="/">
                    <img src={ruFlag} alt="RU flag" />
                    <span className="lang-dark">Русский</span>
                  </Link>
                  <Link to="/">
                    <img src={usaFlag} alt="USA flag" />
                    <span className="lang-dark">English</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  </Headroom >
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
