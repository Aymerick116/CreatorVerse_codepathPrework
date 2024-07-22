// src/pages/ShowCreators.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '../client';
import CreatorCard from '../components/CreatorCard';

const ShowCreators = () => {
  const [creators, setCreators] = useState([]);

  useEffect(() => {
    const fetchCreators = async () => {
      const { data } = await supabase.from('creators').select();
      setCreators(data);
    };

    fetchCreators();
  }, []);

  const handleDelete = async (id) => {
    const { error } = await supabase
      .from('creators')
      .delete()
      .eq('id', id);

    if (error) console.error('Error deleting creator:', error);
    else setCreators(creators.filter((creator) => creator.id !== id));
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">My Favorite Content Creators</h1>
      <Link to="/add" className="bg-blue-500 text-white px-4 py-2 rounded-md mb-4 inline-block">
        Add New Creator
      </Link>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {creators.length === 0 ? (
          <p>No content creators found.</p>
        ) : (
          creators.map((creator) => (
            <CreatorCard key={creator.id} creator={creator} onDelete={handleDelete} />
          ))
        )}
      </div>
    </div>
  );
};

export default ShowCreators;





// // src/pages/ShowCreators.jsx
// import React, { useState, useEffect } from 'react';
// import { supabase } from '../client';
// import CreatorCard from '../components/CreatorCard';
// import { Link } from 'react-router-dom';

// const ShowCreators = () => {
//   const [creators, setCreators] = useState([]);

//   useEffect(() => {
//     const fetchCreators = async () => {
//       let { data: creators, error } = await supabase
//         .from('creators')
//         .select('*');
//       if (error) console.error('Error fetching creators:', error);
//       else setCreators(creators);
//     };

//     fetchCreators();
//   }, []);

//   return (
//     <div className="container mx-auto p-4">
//       <h1 className="text-2xl font-bold mb-4">Creatorverse</h1>
//       <Link to="/add" className="bg-blue-500 text-white px-4 py-2 rounded-md mb-4 inline-block">Add New Creator</Link>
//       <div className="flex flex-wrap justify-center">
//         {creators.length > 0 ? (
//           creators.map(creator => <CreatorCard key={creator.id} creator={creator} />)
//         ) : (
//           <p>No creators found.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ShowCreators;












// import React from 'react';
// import CreatorCard from '../components/CreatorCard';
// import { creators } from '../mockData'; // Import the mock data

// const ShowCreators = ({creators}) => {
//   return (
//     <div className="container mx-auto p-4">
//       <h1 className="text-2xl font-bold mb-4">All Creators</h1>
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
//         {creators.map((creator) => (
//           <CreatorCard
//             key={creator.id}
//             name={creator.name}
//             imageUrl={creator.imageUrl}
//             url={creator.url}
//             description={creator.description}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ShowCreators;
