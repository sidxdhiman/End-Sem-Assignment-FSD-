// card.js
import React from 'react';

const Card = ({ title, content }) => {
  return (
    <div>
      <h3>{title}</h3>
      <p>{content}</p>
    </div>
  );
};

export default Card;