import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import BlogPosts from '../components/blog-posts'
import { graphql } from 'gatsby'

export default ({ data, location }) => (
  <Layout lang={location.state ? location.state.lang : 'uz'}>
    <SEO title="Home" />
    <BlogPosts data={data.allMarkdownRemark.edges} lang={location.state ? location.state.lang : 'uz'} />
  </Layout>
)

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          id
          frontmatter {
            title
            title_Ru
            title_En
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
