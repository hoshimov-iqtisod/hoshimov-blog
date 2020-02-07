import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Headroom from 'react-headroom'
import './header.css'
import logo from '../images/hi_logo.svg'
import usaFlag from '../images/usa-flag.svg';
import ruFlag from '../images/ru-flag.svg';
import uzFlag from '../images/uz-flag.svg';
import { FaTelegram, FaYoutube, FaFacebook } from 'react-icons/fa';

const Header = ({ lang }) => (
  <Headroom disableInlineStyles>
    <header className="site-header">
      <nav className="navbar navbar-primary">
        <div className="navbar-wrap">
          <div className="navbar-container">
            <div className="navbar-content">
              <Link to="/" state={{ lang }} className="navbar-brand">
                <img src={logo} alt="Site logo" />
              </Link>
              <ul className="navbar-nav ">
                <li className="menu-item">
                  <Link to="/episodes" state={{ lang }}>{lang === 'uz' ? "Ko'rsatuvlar" : (lang === 'ru' ? 'Передачи' : 'Episodes')}</Link>
                </li>
              </ul>
              <div className="pk-social-links-items social-menu">
                    <div className="pk-social-links-item">
                        <a href="https://t.me/iqtisodchi_kundaligi" className="pk-social-links-link" target="_blank" rel="noopener noreferrer">
                            <i className="pk-social-links-icon pk-icon pk-icon-telegram">
                              <FaTelegram size="22px" />
                            </i>
                        </a>
                    </div>
                    <div className="pk-social-links-item">
                        <a href="https://www.youtube.com/channel/UCRsqjw8SVM9oMZPP0anA_kA" className="pk-social-links-link" target="_blank" rel="noopener noreferrer">
                            <i className="pk-social-links-icon pk-icon pk-icon-youtube">
                              <FaYoutube size="22px" />
                            </i>
                        </a>
                    </div>
                    <div className="pk-social-links-item">
                        <a href="https://t.me/iqtisodchi_kundaligi" className="pk-social-links-link" target="_blank" rel="noopener noreferrer">
                            <i className="pk-social-links-icon pk-icon pk-icon-fb">
                              <FaFacebook size="22px" />
                            </i>
                        </a>
                    </div>
                </div>
              <div className="nav-item dropdown">
                <span className="at-left">
                  <img src={lang === 'uz' ? uzFlag : (lang === 'ru' ? ruFlag : usaFlag)} alt="select language" />
                </span>
                <div className="dropdown-content">
                  <Link to="/" state={{ lang: 'uz' }}>
                    <img src={uzFlag} alt="UZ flag" />
                    <span className="lang-dark">O'zbek</span>
                  </Link>
                  <Link to="/" state={{ lang: 'ru' }}>
                    <img src={ruFlag} alt="RU flag" />
                    <span className="lang-dark">Русский</span>
                  </Link>
                  <Link to="/" state={{ lang: 'en' }}>
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
