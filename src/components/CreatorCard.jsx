
// src/components/CreatorCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const CreatorCard = ({ creator, onDelete }) => {
  return (
    <div className="border rounded-md p-4 shadow-md">
      <h2 className="text-xl font-bold mb-2">{creator.name}</h2>
      <p className="mb-2">{creator.description}</p>
      {creator.imageURL && <img src={creator.imageURL} alt={creator.name} className="mb-2"/>}
      <a href={creator.url} className="text-blue-500 mb-2 block">Visit</a>
      <div className="flex space-x-2">
        <Link to={`/view/${creator.id}`} className="bg-blue-500 text-white px-2 py-1 rounded">View</Link>
        <Link to={`/edit/${creator.id}`} className="bg-yellow-500 text-white px-2 py-1 rounded">Edit</Link>
        <button
          onClick={() => onDelete(creator.id)}
          className="bg-red-500 text-white px-2 py-1 rounded"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default CreatorCard;


// import React from 'react';

// const CreatorCard = ({ creator }) => {
//   return (
//     <div className="max-w-sm rounded overflow-hidden shadow-lg m-4 bg-white">
//       {creator.imageURL && (
//         <img className="w-full" src={creator.imageURL} alt={`${creator.name}'s image`} />
//       )}
//       <div className="px-6 py-4">
//         <div className="font-bold text-xl mb-2">{creator.name}</div>
//         <p className="text-gray-700 text-base">{creator.description}</p>
//       </div>
//       <div className="px-6 pt-4 pb-2">
//         <a 
//           href={creator.url} 
//           target="_blank" 
//           rel="noopener noreferrer"
//           className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//         >
//           Visit Channel 
//         </a>
//       </div>
//     </div>
//   );
// };

// export default CreatorCard;
