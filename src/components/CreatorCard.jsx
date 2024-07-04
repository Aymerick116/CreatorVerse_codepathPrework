import React from 'react';

const CreatorCard = ({ name, imageUrl, url, description }) => {
  return (
    <div className="border border-gray-300 rounded-lg p-4 max-w-xs text-center shadow-lg">
      <img src={imageUrl} alt={name} className="w-full rounded-lg mb-4" />
      <h2 className="text-xl font-semibold mb-2">{name}</h2>
      <a href={url} className="text-blue-500 hover:underline mb-2 block">{url}</a>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default CreatorCard;