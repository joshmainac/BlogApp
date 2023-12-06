import React from 'react';
import { Link } from 'react-router-dom';
import './BlogPost.css';

const BlogPost = (props) => (
    <div className="blog-post">
        <Link to={`/post/${props.id}`}>
            <h2>{props.title}</h2>
        </Link>
        {props.images && props.images.map((image, index) => (
            <img key={index} src={image} alt={`Image for ${props.title}`} className="blog-post-image" />
        ))}
        <p className="category">{props.category}</p>
        <p className="summary">{props.summary}</p>
        <p className="date">{props.date}</p>
    </div>
);

export default BlogPost;
