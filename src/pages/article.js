import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ArticleBlock from '../components/article-block'

const Article = () => (
  <Layout>
    <SEO title="Article" />
    <ArticleBlock />
  </Layout>
)

export default Article
