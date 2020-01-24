import React from 'react';
import { Link } from 'gatsby';
import './blog-posts.css';

const BlogPosts = ({ data, lang }) => {
    return (
        <div className="site-content">
            <div className="cs-container">
                <div className="main-content">
                    <div className="content-area">
                        <main className="site-main">
                            <header className="page-header">
                                <h5 className="title-block">{lang === 'uz' ? "So'nggi xabarlar" : (lang === 'ru' ? 'Свежие записи' : 'New entries')}</h5>
                            </header>
                            <div className="post-archive">
                                <div className="archive-wrap">
                                    <div className="archive-main">
                                        {data.map(({ node }) => (
                                            <article className="layout-list-alternative" key={node.id}>
                                                <div className="post-outer">
                                                    <Link to={node.fields.slug} className="post-link"></Link>
                                                    <div className="post-inner entry-thumbnail">
                                                        <div className="cs-overlay cs-bg-dark cs-overlay-ratio cs-ratio-landscape">
                                                            <div className="cs-overlay-background">
                                                                <img src={node.frontmatter.image} alt="article" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="post-inner entry-inner">
                                                        <div className="entry-data">
                                                            <header className="entry-header">
                                                                <h2 className="entry-title">{node.frontmatter.title}</h2>
                                                            </header>
                                                            <div className="entry-excerpt" dangerouslySetInnerHTML={{ __html: `${node.html.substring(0, 100)}...` }} />
                                                            <ul className="post-meta">
                                                                {/* <li className="meta-date meta-author"></li> */}
                                                                <li className="meta-date">{node.frontmatter.date}</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </article>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </main>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default BlogPosts;

