import React from 'react';
import CreatorCard from '../components/CreatorCard';
import { creators } from '../mockData'; // Import the mock data

const ShowCreators = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">All Creators</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {creators.map((creator) => (
          <CreatorCard
            key={creator.id}
            name={creator.name}
            imageUrl={creator.imageUrl}
            url={creator.url}
            description={creator.description}
          />
        ))}
      </div>
    </div>
  );
};

export default ShowCreators;
