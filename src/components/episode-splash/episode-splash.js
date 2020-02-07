import React from 'react';
import './episode-splash.css';
import { Link } from 'gatsby';

const EpisodeSplash = ({ lang, data }) => (
    <div className="site-content no-margin">
            <div className="cs-container">
                <div className="main-content">
                    <div className="content-area">
                        <main className="site-main">
                            <header className="page-header">
                                <h2 className="title-block content-header">{lang === 'uz' ? "Barcha ko'rsatuvlar" : (lang === 'ru' ? 'Все передачи' : 'All episodes')}</h2>
                            </header>
                            <div className="post-archive">
                                <div className="archive-wrap">
                                    <div className="archive-main">
                                            <article className="layout-list-alternative">
                                                <div className="post-outer">
                                                    <Link to={data.node.fields.slug} state={{ lang }} className="post-link"></Link>
                                                    <div className="post-inner entry-thumbnail">
                                                        <div className="cs-overlay cs-bg-dark cs-overlay-ratio cs-ratio-landscape">
                                                            <div className="cs-overlay-background">
                                                                <img src={data.node.frontmatter.image} alt="article" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="post-inner entry-inner">
                                                        <div className="entry-data">
                                                            <header className="entry-header">
                                                                <h2 className="entry-title">{data.node.frontmatter.title}</h2>
                                                            </header>
                                                            <div className="entry-excerpt" dangerouslySetInnerHTML={{ __html: `${data.node.html.substring(0, 300)}...` }} />
                                                            <ul className="post-meta">
                                                                {/* <li className="meta-date meta-author"></li> */}
                                                                <li className="meta-date">{data.node.frontmatter.date}</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </article>
                                    </div>
                                </div>
                            </div>
                        </main>
                    </div>
                </div>
            </div>
        </div>
)

export default EpisodeSplash;