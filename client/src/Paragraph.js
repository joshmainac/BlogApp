import React from 'react';
import './Paragraph.css'; // Make sure to create a corresponding CSS file

const Paragraph = (props) => (
    <div className="paragraph">
        <img src={props.image} alt={props.title} className="paragraph-image" />
        <h3 className="paragraph-title">{props.title}</h3>
        <p className="paragraph-content">{props.content}</p>
    </div>
);

export default Paragraph;
