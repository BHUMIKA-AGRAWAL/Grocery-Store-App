import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const UpdateForm = ({ grocery, onUpdate }) => {
  const [editedGrocery, setEditedGrocery] = useState();
  const [groceryDetails, setGroceryDetails] = useState();
  const [isEditing, setIsEditing] = useState(false); 
  const { id } = useParams();

  const [states, setStates] = useState([]);
  const [selectedSourceId, setSelectedSourceId] = useState('');

  useEffect(() => {
    
    async function fetchGroceryDetails() {
      try {
        const response = await axios.get(`http://localhost:8080/api/groceries/${id}`);
        setGroceryDetails(response.data);
        setEditedGrocery(response.data);
      } 
      catch (error) {
        console.error('Error fetching grocery details:', error);
      }
    }
    
    fetchAllStates();
    fetchGroceryDetails(); 
  }, [id]); 

  async function fetchAllStates() {
    try {
      const response = await axios.get('http://localhost:8080/api/states');
      setStates(response.data);
      setSelectedSourceId(response.data[0]?.source_id || '');
    } catch (error) {
      console.error('Error fetching states:', error);
    }
  }

  const handleSourceChange = (e) => {
    setSelectedSourceId(e.target.value);
    setEditedGrocery({ ...editedGrocery, grocerySource: { source_id: e.target.value } });
  };

  const handleUpdate = async () => {
    try {
      const updatedGrocery = await axios.put(`http://localhost:8080/api/groceries/${groceryDetails.item_id}`, editedGrocery);
      setGroceryDetails(updatedGrocery.data);
      setIsEditing(false); 
    } catch (error) {
      console.error('Error updating grocery:', error);
    }
  };

  return (
    <div className="border rounded-lg p-4 bg-white shadow-md">
      <h3 className="text-lg font-bold mb-4">Update Grocery</h3>
      {groceryDetails && (
        <>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">ID</label>
          <input
            type="text"
            placeholder="Enter grocery ID"
            value={groceryDetails.item_id}
            disabled
            className="border rounded-lg px-3 py-2 mb-2 w-full"
          />

          <label htmlFor="type" className="block text-sm font-medium text-gray-700">Name:</label>
          <input
            type="text"
            placeholder="Enter grocery name"
            value={isEditing ? editedGrocery.groceryName : groceryDetails.groceryName}
            onChange={(e) => setEditedGrocery({ ...editedGrocery, groceryName: e.target.value })}
            className="border rounded-lg px-3 py-2 mb-2 w-full"
          />

          

          <button onClick={handleUpdate} className="bg-blue-500 text-white px-4 py-2 rounded mr-2 hover:bg-blue-600">
            Save
          </button>
          {isEditing ? (
            <button onClick={() => setIsEditing(false)} className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
              Cancel
            </button>
          ) : (
            <button onClick={() => setIsEditing(true)} className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400">
              Edit
            </button>
          )}
        </>
      )}
    </div>
  );
};

export default UpdateForm;
