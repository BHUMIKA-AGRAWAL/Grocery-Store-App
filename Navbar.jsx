import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
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

  return (
    <nav className="navbar bg-Yellow-600 p-4 flex items-center justify-between">
      <div className="container mx-auto flex items-center">
        <div className="text-white text-2xl font-bold flex items-center">
          
          <span>Grocery Store</span>
        </div>
      </div>
      <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 text-white">
        <li>
          <Link to="/" className="hover:text-gray-300">Home</Link>
        </li>
        <li>
          <Link to="/add" className="hover:text-gray-300">Add New Grocery</Link>
        </li>
       
      </ul>
    </nav>
  );
};

export default Navbar;
