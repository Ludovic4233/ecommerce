import React, { useState, useEffect } from 'react';
import Product from '../components/Product';
// import ContactAdmin from '../components/Contact';

const HomePage = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://api-3wa-ecomm-524fde41edfa.herokuapp.com/api/product')
            .then(response => response.json())
            .then(data => setProducts(data))
            .catch(error => console.error("Erreur lors du chargement des produits depuis l'API:", error));
    }, []);

    return (
        <div className="homepage">
            <h1>Nos Produits</h1>
                <div className="products-container">
                    {products.map((product, index) => (
                    <Product
                    key={index}
                    name={product.name}
                    price={product.price}
                    description={product.description}
                />
                ))}
                </div>
                {/*<div className="homepage">
                    <Contact />
                </div> */}
            </div>
        );
    };

export default HomePage;

//Faker -> Fake données