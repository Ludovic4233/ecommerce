import React, { useState, useEffect } from 'react';
import Product from '../components/Product';
// import Contact from '../components/Contact';

const HomePage = () => {
    const [filteredProducts, setFilteredProducts] = useState([]);
    
    return (
        <div className="homepage">
            <h1>Nos Produits</h1>
            <div className="products-container">
                <Product setFilteredProducts={setFilteredProducts} />
            </div>
            <div className="products-container">
                {filteredProducts.map(product => (
                    <div key={product._id}>
                        <h2>{product.name}</h2>
                        <p>Prix: {product.price} €</p>
                        <p>Description: {product.desc}</p>
                        <p>Stock: {product.stock}</p>
                        <p>Marque: {product.brand}</p>
                        <p>Couleur: {product.color}</p>
                    </div>
                ))}
            </div>
            {/* <div className="contact">
                <Contact />
            </div> */}
        </div>
    );
};

export default HomePage;
