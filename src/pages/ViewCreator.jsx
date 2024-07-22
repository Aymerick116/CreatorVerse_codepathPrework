// src/pages/ViewCreator.jsx
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { supabase } from '../client';

const ViewCreator = () => {
  const { id } = useParams();
  const [creator, setCreator] = useState(null);

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

  return (
    <div className="container mx-auto p-4">
      {creator ? (
        <>
          <h1 className="text-2xl font-bold mb-4">{creator.name}</h1>
          <p className="text-gray-600 mb-4">{creator.description}</p>
          <a href={creator.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Visit Channel</a>
          {creator.imageURL && <img src={creator.imageURL} alt={creator.name} className="mt-2 w-full h-64 object-cover rounded-md" />}
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ViewCreator;







// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import { supabase } from '../client';

// const ViewCreator = () => {
//   const { id } = useParams(); // Fetch the id from URL params
//   const [creator, setCreator] = useState(null);

//   useEffect(() => {
//     const fetchCreator = async () => {
//       try {
//         const { data, error } = await supabase
//           .from('creators')
//           .select('*')
//           .eq('id', id)
//           .single();

//         if (error) {
//           throw error;
//         }

//         setCreator(data);
//       } catch (error) {
//         console.error('Error fetching creator:', error.message);
//       }
//     };

//     fetchCreator();
//   }, [id]); // Dependency on `id` to re-fetch when `id` changes

//   if (!creator) {
//     return <div>Loading...</div>; // Handle loading state
//   }

//   return (
//     <div className="container mx-auto mt-4">
//       <h1 className="text-2xl font-bold">{creator.name}</h1>
//       <p className="text-gray-700 mt-2">{creator.description}</p>
//       <a href={creator.url} className="text-blue-500 mt-2" target="_blank" rel="noopener noreferrer">
//         Visit Channel
//       </a>
//       {creator.imageURL && (
//         <div className="mt-4">
//           <img src={creator.imageURL} alt={creator.name} className="rounded-lg" style={{ maxWidth: '100%' }} />
//         </div>
//       )}
//     </div>
//   );
// };

// export default ViewCreator;
