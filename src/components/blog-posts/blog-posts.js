import React from 'react';
import { Link } from 'gatsby';
import './blog-posts.css';

const BlogPosts = ({ data, lang }) => {
    return (
            <div className="cs-container mt-3">
                <div className="episodes">
                    <div className="episodes-content">
                        {data.map((obj, i) => (
                            <Link to={obj.node.fields.slug} key={i} className="episode blog-episode">
                                <div className="episode without-margin">
                                <div className="blog-image">
                                    <img src={obj.node.frontmatter.image} alt="Episode"/>
                                </div>
                                </div>
                                <h3>{obj.node.frontmatter.title}</h3>
                                <div className="entry-excerpt" dangerouslySetInnerHTML={{ __html: `${obj.node.html.substring(0, 150)}...` }} />
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
    );
};
export default BlogPosts;

