import React from 'react';
import './home-content.css';
import avatar from '../../images/avatar.jpg';
import { Link } from 'gatsby';

const HomeContent = ({ data, lang }) => (
    <section className="section-about">
        <div className="site-content">
            <div className="cs-container">
                <div className="about-content">
                    <img src={avatar} alt="Hoshimov"/>
                    <article>
                        <h2 className="content-header">About the podcast</h2>
                        <div className="text-block entry-content">
                            <p>You can’t imitate a worldview. But you can form your own by listening and learning (and learning how to listen). On the <em>Conversations with Tyler</em> podcast, produced by the Mercatus Center at George Mason University, celebrated polymath and academic economist Tyler Cowen explores the minds and methods of today’s top thinkers. Tyler’s intense research leads to stimulating and surprising questions that provoke guests into deep examinations of their work and how they see the world. Eager to exploit their insights? All you have to do is listen.</p>
                        </div>
                    </article>
                </div>
            </div>
        </div>
        <div className="site-content">
            <div className="cs-container">
                <div className="episodes">
                    <h2 className="content-header">Latest episodes</h2>
                    <div className="episodes-content">
                        {data.map((obj, i) => (
                            <Link to={obj.node.fields.slug} key={i} className="episode">
                                <div className="episode-image"><img src={obj.node.frontmatter.image} alt="Episode"/></div>
                                <h3 className="episode-title">{obj.node.frontmatter.title}</h3>
                                <div className="overlay"></div>                                
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </section>
)

export default HomeContent;