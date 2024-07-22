// src/pages/AddCreator.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../client';

const AddCreator = () => {
  const navigate = useNavigate();
  const [creator, setCreator] = useState({ name: '', url: '', description: '', imageURL: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCreator({ ...creator, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, url, description, imageURL } = creator;

    let { error } = await supabase
      .from('creators')
      .insert([{ name, url, description, imageURL }]);

    if (error) console.error('Error adding creator:', error);
    else navigate('/');
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Add New Creator</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="name"
          value={creator.name}
          onChange={handleChange}
          placeholder="Name"
          className="w-full p-2 border rounded-md"
          required
        />
        <input
          name="url"
          value={creator.url}
          onChange={handleChange}
          placeholder="URL"
          className="w-full p-2 border rounded-md"
          required
        />
        <textarea
          name="description"
          value={creator.description}
          onChange={handleChange}
          placeholder="Description"
          className="w-full p-2 border rounded-md"
          required
        />
        <input
          name="imageURL"
          value={creator.imageURL}
          onChange={handleChange}
          placeholder="Image URL (optional)"
          className="w-full p-2 border rounded-md"
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">
          Add Creator
        </button>
      </form>
    </div>
  );
};

export default AddCreator;

