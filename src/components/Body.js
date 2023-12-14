import React, { useState } from 'react';
import ProductDetail from './ProductDetail';

const Body = ({ productList }) => {
  const [selectedProducts, setSelectedProducts] = useState([]);

  const handleProductSelect = (id) => {
    const updatedProducts = selectedProducts.includes(id)
      ? selectedProducts.filter((productId) => productId !== id)
      : [...selectedProducts, id];

    setSelectedProducts(updatedProducts);
  };

  return (
    <div>
      {productList.map((product) => (
        <div key={product.id}>
          <input
            type="checkbox"
            checked={selectedProducts.includes(product.id)}
            onChange={() => handleProductSelect(product.id)}
          />
          <label>{product.name}</label>
        </div>
      ))}

      {productList.map((product) => (
        selectedProducts.includes(product.id) && (
          <ProductDetail
            key={product.id}
            product={product}
          />
        )
      ))}

      <p>Selected Products:</p>
      <ul>
        {productList
          .filter((product) => selectedProducts.includes(product.id))
          .map((product) => (
            <li key={product.id}>{product.name}</li>
          ))}
      </ul>
    </div>
  );
};

export default Body;
