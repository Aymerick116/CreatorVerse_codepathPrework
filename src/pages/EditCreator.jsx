// src/pages/EditCreator.jsx
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { supabase } from '../client';

const EditCreator = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [creator, setCreator] = useState({ name: '', url: '', description: '', imageURL: '' });

  useEffect(() => {
    const fetchCreator = async () => {
      let { data: creator, error } = await supabase
        .from('creators')
        .select('*')
        .eq('id', id)
        .single();
      if (error) console.error('Error fetching creator:', error);
      else setCreator(creator);
    };

    fetchCreator();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCreator({ ...creator, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, url, description, imageURL } = creator;

    let { error } = await supabase
      .from('creators')
      .update({ name, url, description, imageURL })
      .eq('id', id);

    if (error) console.error('Error updating creator:', error);
    else navigate('/');
  };

  const handleDelete = async () => {
    let { error } = await supabase
      .from('creators')
      .delete()
      .eq('id', id);

    if (error) console.error('Error deleting creator:', error);
    else navigate('/');
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Edit Creator</h1>
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
        <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded-md">
          Save
        </button>
        <button type="button" onClick={handleDelete} className="bg-red-500 text-white px-4 py-2 rounded-md ml-2">
          Delete
        </button>
      </form>
    </div>
  );
};

export default EditCreator;
