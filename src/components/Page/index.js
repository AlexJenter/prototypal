import React from 'react';
import data from "../../data/db.yaml";

export default ({ match }) => {
    const { page } = match.params;
    const { title, text, image } = data.pages[page];
    return (
      <div>
        <h1>{title}</h1>
        <img
          src={image.src}
          alt={image.alt}
          style={{ width : '100%' }}
        />
        <p>{text}</p>
      </div>
    )
}
