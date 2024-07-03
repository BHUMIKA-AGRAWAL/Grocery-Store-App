import React from 'react';

const GroceryCard = ({ grocery }) => {
  if (!grocery || !grocery.id) {
    return null; 
  }

  const { id, name, type, source, quantity, costPerItem, totalCost } = grocery;

  return (
    <li key={id}>
      <div>
        <h3>{name}</h3>
        <p>Type: {type}</p>
        <p>Source: {source}</p>
        <p>Quantity: {quantity}</p>
        <p>Cost Per Item: {costPerItem}</p>
        <p>Total Cost: {totalCost}</p>
        
      </div>
    </li>
  );
};

export default GroceryCard;