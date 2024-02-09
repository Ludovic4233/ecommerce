import React, { useState, useEffect } from 'react';
import ProductFilter from './ProductFilter';

const Product = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [filters, setFilters] = useState({
    priceRange: [0, Infinity],
    publicationDate: '',
    brand: '',
    quantity: 1
  });

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://api-3wa-ecomm-524fde41edfa.herokuapp.com/api/product', {
          headers: {
            'x-auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1YzRlZTk3NjlmZDAwMDgyMjI3MmVlMSIsImlhdCI6MTcwNzQwNDk1MX0.NwIbOFWPK04vsHw9KZW13UDDhBdu5tk_9ehRBs7ImQw'
          }
        });

        if (!response.ok) {
          throw new Error('Impossible de récupérer les données des produits');
        }

        const data = await response.json();
        setProducts(data);
        setFilteredProducts(data);
      } catch (error) {
        console.error('Erreur lors de la récupération des données des produits:', error);
      }
    };

    fetchProducts();
  }, []);

  const handleCategoryClick = (productName) => {
    const product = products.find(product => product.name === productName);
    setSelectedProduct(product);
  };

  const applyFilters = () => {
    let filtered = products.filter(product => {
      const price = product.price;
      if (price < filters.priceRange[0] || price > filters.priceRange[1]) {
        return false;
      }
      if (filters.publicationDate && product.publicationDate !== filters.publicationDate) {
        return false;
      }
      if (filters.brand && product.brand !== filters.brand) {
        return false;
      }
      return true;
    });
    setFilteredProducts(filtered);
  };

  const handleFilterChange = (event) => {
    const { name, value } = event.target;
    setFilters({ ...filters, [name]: value });
  };

  const handleQuantityChange = (event) => {
    let value = parseInt(event.target.value);
    if (value < 1) {
      value = 1;
    } else if (selectedProduct && value > selectedProduct.stock) {
      value = selectedProduct.stock;
    }
    setFilters({ ...filters, quantity: value });
  };

  return (
    <div>
      <ProductFilter
        filters={filters}
        applyFilters={applyFilters}
        handleFilterChange={handleFilterChange}
        handleQuantityChange={handleQuantityChange}
        selectedProduct={selectedProduct}
      />
      <div className="product-list">
        <h2>Liste des produits</h2>
        <div className="categories">
          {filteredProducts.map(product => (
            <button key={product._id} onClick={() => handleCategoryClick(product.name)}>{product.name}</button>
          ))}
        </div>
        {selectedProduct && (
          <div className="selected-product">
            <h3>{selectedProduct.name}</h3>
            <img src={selectedProduct.image} alt={selectedProduct.name} />
            <p>Prix: {selectedProduct.price} €</p>
            <p>Description: {selectedProduct.desc}</p>
            <p>Stock: {selectedProduct.stock}</p>
            <p>Choisir la quantité:</p>
              {selectedProduct && (
                <div>
                  <input type="number" name="quantity" value={filters.quantity} onChange={handleQuantityChange} />
                  <button onClick={applyFilters}>Valider</button>
                </div>
              )}
            <p>Marque: {selectedProduct.brand}</p>
            <p>Couleur: {selectedProduct.color}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Product;