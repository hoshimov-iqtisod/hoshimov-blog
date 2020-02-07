import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from '../components/seo'
import '../components/blog-post.css'

export default ({ data, location }) => {
    const post = data.markdownRemark
    const lang = location.state ? location.state.lang : 'uz'
    return (
        <Layout lang={lang}>
            <SEO title={post.frontmatter.title} />
            <div className="site-content blog-post">
                <div className="main-content">
                    <div className="content-area article">
                        <main className="site-main">
                            <article className="entry">
                                <div className="post-media">
                                    <figure>
                                        <img src={`../${post.frontmatter.image}`} alt="Poster" />
                                    </figure>
                                </div>
                                <div className="cs-container">
                                    <section className="entry-header entry-header-standard entry-container">
                                        <div className="cs-container">
                                            <div className="entry-meta-details">
                                                <ul className="post-meta">
                                                    {/* <li className="meta-author"></li> */}
                                                    <li className="meta-date">{post.frontmatter.date}</li>
                                                </ul>
                                            </div>
                                            <h1 className="entry-title">{post.frontmatter.title}</h1>
                                            {/* <div className="content-box">
                                                <ul className="horizontal-list horizontal-list--bulleted">
                                                    <li className="horizontal-list__title">Subscribe</li>
                                                    <li>
                                                        <a href="https://t.me/iqtisodchi_kundaligi">Telegram</a>
                                                    </li>
                                                    <li>
                                                        <a href="https://www.youtube.com/channel/UCRsqjw8SVM9oMZPP0anA_kA">YouTube</a>
                                                    </li>
                                                    <li>
                                                        <a href="https://t.me/iqtisodchi_kundaligi">Facebook</a>
                                                    </li>
                                                </ul>
                                            </div> */}

                                        </div>
                                    </section>
                                    <div className="player">
                                        <iframe title={post.frontmatter.title} width="640" height="360" src={post.frontmatter.video_url} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                                    </div>
                                    <div className="entry-container">
                                        <div className="entry-content-wrap">
                                            <div className="entry-content" dangerouslySetInnerHTML={{ __html: post.html }} />
                                        </div>
                                    <div className="player">
                                        <strong>Listen to the full conversation</strong>
                                        <audio controls>
                                            <source src={`../${post.frontmatter.audio}`} type="audio/mpeg" />
                                            <track kind="captions" />
                                            Your browser does not support the audio element
                                        </audio>
                                    </div>
                                    </div>
                                </div>
                            </article>
                        </main>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      id
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        image
        video_url
        audio
      }
      fields {
          slug
      }
    }
  }
`