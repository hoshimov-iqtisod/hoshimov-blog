import React from 'react';
import { Link } from 'gatsby';
import './blog-posts.css';
import image from '../../images/blog-img.jpg';
import article from '../../images/article.png';

const BlogPosts = () => (
    <div className="site-content">
        <div className="cs-container">
            <div className="main-content">
                <div className="content-area">
                    <main className="site-main">
                        <header className="page-header">
                            <h5 className="title-block">Свежие записи</h5>
                        </header>
                        <div className="post-archive">
                            <div className="archive-wrap">
                                <div className="archive-main">
                                    <article className="layout-list-alternative">
                                        <div className="post-outer">
                                            <Link to="/article" className="post-link"></Link>
                                            <div className="post-inner entry-thumbnail">
                                                <div className="cs-overlay cs-bg-dark cs-overlay-ratio cs-ratio-landscape">
                                                    <div className="cs-overlay-background">
                                                        <img src={image} alt="article"/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="post-inner entry-inner">
                                                <div className="entry-data">
                                                    <header className="entry-header">
                                                        <h2 className="entry-title">Почему дизайнерам нужно говорить на языке бизнеса</h2>
                                                    </header>
                                                    <div className="entry-excerpt">Бизнес и дизайн – это отдельные планеты, и это нужно изменить. У нас существует проблема перевода</div>
                                                    <ul className="post-meta">
                                                        <li className="meta-date meta-author">Николай Геллар</li>
                                                        <li className="meta-date">17 января, 2020</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </article>
                                    <article className="layout-list-alternative">
                                        <div className="post-outer">
                                            <Link to="/article" className="post-link"></Link>
                                            <div className="post-inner entry-thumbnail">
                                                <div className="cs-overlay cs-bg-dark cs-overlay-ratio cs-ratio-landscape">
                                                    <div className="cs-overlay-background">
                                                        <img src={article} alt="article"/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="post-inner entry-inner">
                                                <div className="entry-data">
                                                    <header className="entry-header">
                                                        <h2 className="entry-title">Потому что цвета – это красиво. Создание универсальной цветовой палитры для IBM</h2>
                                                    </header>
                                                    <div className="entry-excerpt"> Создание привлекательной и доступной палитры для брендов, продуктов и опыта. В течение…</div>
                                                    <ul className="post-meta">
                                                        <li className="meta-date meta-author">Николай Геллар</li>
                                                        <li className="meta-date">16 января, 2020</li>
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
);

export default BlogPosts;