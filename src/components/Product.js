import React from 'react';

//fetch

const Product = ({ name, price, description }) => {
  return (
    <div className="product">
      <h2>{name}</h2>
      <p>Prix: {price} €</p>
      <p>{description}</p>
    </div>
  );
};

export default Product;