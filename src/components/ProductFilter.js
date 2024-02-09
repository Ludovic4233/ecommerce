import React, { useState } from 'react';

const ProductFilter = ({ filters, applyFilters, handleFilterChange, handleQuantityChange, selectedProduct }) => {
  return (
    <div className="sidebar">
      <h3>Prix:</h3>
      <input type="number" name="priceRange" placeholder="Prix minimum" value={filters.priceRange[0]} onChange={handleFilterChange} />
      <input type="number" name="priceRange" placeholder="Prix maximum" value={filters.priceRange[Infinity]} onChange={handleFilterChange} />
      <button onClick={applyFilters}>Valider</button>
      <h3>Date de publication:</h3>
      <select name="publicationDate" value={filters.publicationDate} onChange={handleFilterChange}>
        <option value="">Toutes les dates</option>
        <option value="1">2024</option>
      </select>
      <button onClick={applyFilters}>Valider</button>
      <h3>Marque:</h3>
      <select name="brand" value={filters.brand} onChange={handleFilterChange}>
        <option value="">Toutes les marques</option>
        <option value="1">Yamaha</option>
        <option value="2">Apple</option>
        <option value="3">Honda</option>
        <option value="4">Samsung</option>
        <option value="5">Wiko</option>
        <option value="6">LaMaison</option>
        <option value="7">Lebran James</option>
        <option value="8">XP</option>
      </select>
      <button onClick={applyFilters}>Valider</button>
    </div>
  );
};

export default ProductFilter;