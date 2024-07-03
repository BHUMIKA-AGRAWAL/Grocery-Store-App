import React, { useState } from 'react';

const GroceryDetails = ({ grocery, onSave, onCancel }) => {
  const [editedGrocery, setEditedGrocery] = useState({ ...grocery });

  const handleChange = e => {
    const { name, value } = e.target;
    setEditedGrocery(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSave = () => {
    onSave(editedGrocery);
  };

  return (
    <div>
      <h2>Edit Grocery</h2>
      <form>
        <label>Name:</label>
        <input type="text" name="name" value={editedGrocery.name} onChange={handleChange} />
        
        <button type="button" onClick={handleSave}>Save</button>
        <button type="button" onClick={onCancel}>Cancel</button>
      </form>
    </div>
  );
};

export default GroceryDetails;