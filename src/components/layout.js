import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"
import Footer from './footer'
import "./layout.css"

const Layout = ({ children, lang }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div className="site-inner">
      <Header siteTitle={data.site.siteMetadata.title} lang={lang} />
      {children}
      <Footer siteTitle={data.site.siteMetadata.title} />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
