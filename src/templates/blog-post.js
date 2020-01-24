import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import poster from '../images/poster.jpg'
import NotFoundPage from '../pages/404'

export default ({ data, location }) => {
    if(location.state) {
    const post = data.markdownRemark
    const lang = location.state.lang
    return (
        <Layout lang={lang}>
            <div className="site-content">
                <section className="entry-header entry-header-standard">
                    <div className="cs-container">
                        <h1 className="entry-title">{post.frontmatter.title}</h1>
                        <div className="entry-meta-details">
                            <ul className="post-meta">
                                {/* <li className="meta-author"></li> */}
                                <li className="meta-date">{post.frontmatter.date}</li>
                            </ul>
                        </div>
                    </div>
                </section>
                <div className="cs-container">
                    <div className="main-content">
                        <div className="content-area article">
                            <main className="site-main">
                                <article className="entry">
                                    <div className="post-media">
                                        <figure>
                                            <a href={poster}>
                                                <img src={`../${post.frontmatter.image}`} alt="Poster" />
                                            </a>
                                        </figure>
                                    </div>
                                    <div className="entry-container">
                                        <div className="entry-content-wrap">
                                            <div className="entry-content" dangerouslySetInnerHTML={{ __html: post.html }} />
                                        </div>
                                    </div>
                                </article>
                            </main>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
} else {
    return <NotFoundPage />
}
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        image
      }
    }
  }
`