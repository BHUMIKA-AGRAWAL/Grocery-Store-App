import React, { useState } from 'react';
import axios from 'axios';
import './Navbar.css';

const AddNewGrocery = ({ onAddGrocery }) => {
  const [name, setName] = useState('');
  const [type, setType] = useState('');
  const [source, setSource] = useState('');
  const [quantity, setQuantity] = useState('');
  const [cost, setCost] = useState('');

  const statesOfIndia = [
    'Andhra Pradesh',
    'Arunachal Pradesh',
    'Assam',
    'Bihar',
    'Chhattisgarh',
    'Goa',
    'Gujarat',
    'Haryana',
    'Himachal Pradesh',
    'Jharkhand',
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newGrocery = {
      groceryName: name,
      groceryType: type,
      costPerItem: parseFloat(cost),
      groceryAmounts: { itemsAvailable: parseInt(quantity) },
      grocerySource: { stateName: source }
    };

    try {
      const response = await axios.post('http://localhost:8080/api/groceries', newGrocery);
      onAddGrocery(response.data); // Assuming the API returns the added grocery item
      // Clear form fields after successful submission
      setName('');
      setType('');
      setSource('');
      setQuantity('');
      setCost('');
    } catch (error) {
      console.error('Error adding grocery:', error);
    }
  };

  return (
    <div className="flex justify-center items-center h-full">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-lg font-bold mb-4">Add New Grocery</h2>
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name:</label>
          <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" required />
        </div>

        <div className="mb-4">
          <label htmlFor="type" className="block text-sm font-medium text-gray-700">Type:</label>
          <input type="text" id="type" value={type} onChange={(e) => setType(e.target.value)} className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" required />
        </div>

        <div className="mb-4">
          <label htmlFor="source" className="block text-sm font-medium text-gray-700">Source:</label>
          <select
            id="source"
            value={source}
            onChange={(e) => setSource(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          >
            <option value="">Select a state</option>
            {statesOfIndia.map(state => (
              <option key={state} value={state}>{state}</option>
            ))}
          </select>
        </div>

        <div className="mb-4">
          <label htmlFor="quantity" className="block text-sm font-medium text-gray-700">Quantity:</label>
          <input type="number" id="quantity" value={quantity} onChange={(e) => setQuantity(e.target.value)} className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" required />
        </div>

        <div className="mb-4">
          <label htmlFor="cost" className="block text-sm font-medium text-gray-700">Cost per item:</label>
          <input type="number" id="cost" value={cost} onChange={(e) => setCost(e.target.value)} className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" step="0.01" required />
        </div>

        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Add Grocery</button>
      </form>
    </div>
  );
};

export default AddNewGrocery;
