import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from 'gatsby'
import HomeSplash from '../components/home-splash'
import HomeContent from "../components/home-content"

export default ({ data, location }) => {
  const lang = location.state ? location.state.lang : 'uz';
  return (
    <Layout lang={lang}>
      <SEO title="Home" />
      <HomeSplash />
      <HomeContent data={data.englishPost.edges} />
    </Layout>
  )
}

export const query = graphql`
  query {
    englishPost: allMarkdownRemark(filter: {frontmatter: {language: {eq: "en"}}}, sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
            image
          }
          fields {
            slug
          }
          html
        }
      }
    }
    russianPost: allMarkdownRemark(filter: {frontmatter: {language: {eq: "ru"}}}, sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
            image
          }
          fields {
            slug
          }
          html
        }
      }
    }
    uzbekPost: allMarkdownRemark(filter: {frontmatter: {language: {eq: "uz"}}}, sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
            image
          }
          fields {
            slug
          }
          html
        }
      }
    }
  }
`
