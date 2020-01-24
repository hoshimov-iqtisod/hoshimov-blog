import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import BlogPosts from '../components/blog-posts'
import { graphql } from 'gatsby'

export default ({ data, location }) => (
  <Layout lang={location.state ? location.state.lang : 'uz'}>
    <SEO title="Home" />
    <BlogPosts data={location.state.lang === 'ru' ? data.russianPost.edges : data.englishPost.edges} lang={location.state ? location.state.lang : 'uz'} />
  </Layout>
)

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
  }
`
