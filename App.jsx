import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import AddNewGrocery from './components/AddNewGrocery';
import GroceryList from './components/GroceryList';
import Footer from './components/Footer';
import GroceryCard from './components/GroceryCard';
import GroceryDetail from './components/GroceryDetail';
import UpdateForm from './components/UpdateForm';

function App(props) {


  return (
  <>
  
  <Router>
  
  <Navbar/>
    <Routes> 
    <Route path='groceryDetail' element={<GroceryDetail/> } />
    <Route path='/' element={<GroceryList/>} />
    <Route path='add' element={<AddNewGrocery/>} />
    <Route path='groceryList' element={<GroceryList/>} />
    <Route path='add/home' element={<AddNewGrocery/>} />
    <Route path='updateForm/:id' element={<UpdateForm/>} />
    
    

     </Routes>
    <Footer />
     </Router>
     </>
  );
}
export default App;