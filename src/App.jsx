// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ShowCreators from './pages/ShowCreators';
import ViewCreator from './pages/ViewCreator';
import EditCreator from './pages/EditCreator';
import AddCreator from './pages/AddCreator';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ShowCreators />} />
        <Route path="/view/:id" element={<ViewCreator />} />
        <Route path="/edit/:id" element={<EditCreator />} />
        <Route path="/add" element={<AddCreator />} />
      </Routes>
    </Router>
  );
};

export default App;



// import React, { useState, useEffect } from 'react';
// import { BrowserRouter as Router } from 'react-router-dom';
// import { supabase } from './client';
// import { useRoutes } from 'react-router-dom';
// import ShowCreators from './pages/ShowCreators';
// import ViewCreator from './pages/ViewCreator';
// import EditCreator from './pages/EditCreator';
// import AddCreator from './pages/AddCreator';

// const AppRoutes = ({ creators }) => {
//   return useRoutes([
//     { path: "/", element: <ShowCreators creators={creators} /> },
//     { path: "/view/id", element: <ViewCreator /> },
//     { path: "/edit/:id", element: <EditCreator /> },
//     { path: "/new", element: <AddCreator /> },
//   ]);
// };

// const App = () => {
//   const [creators, setCreators] = useState([]);

//   useEffect(() => {
//     const fetchCreators = async () => {
//       try {
//         const { data, error } = await supabase
//           .from('creators')
//           .select('*');

//         if (error) {
//           throw error;
//         }

//         setCreators(data || []);
//       } catch (error) {
//         console.error('Error fetching data:', error.message);
//       }
//     };

//     fetchCreators();
//   }, []);

//   return (
//     <Router>
//       <div className="flex flex-col min-h-screen bg-gray-100">
//         <header className="bg-blue-500 p-4">
//           <div className="container mx-auto">
//             <h1 className="text-2xl font-bold text-white">Creatorverse</h1>
//           </div>
//         </header>
//         <main className="container mx-auto flex-grow p-4">
//           <AppRoutes creators={creators} />
//         </main>
//         <footer className="bg-blue-500 p-4 text-white text-center">
//           <p>&copy; 2024 Creatorverse. All rights reserved.</p>
//         </footer>
//       </div>
//     </Router>
//   );
// };

// export default App;





// import { useRoutes, BrowserRouter as Router } from 'react-router-dom';
// import { React, useState, useEffect } from 'react';
// import { supabase } from './client';

// // Import your pages
// import AllCreators from './pages/ShowCreators';
// import ShowCreators from './pages/ShowCreators';
// import ViewCreator from './pages/ViewCreator';
// import EditCreator from './pages/EditCreator';
// import AddCreator from './pages/AddCreator';

// const AppRoutes = ({ creators }) => {
//   return useRoutes([
//     { path: "/", element: <ShowCreators creators={creators} /> },
//     { path: "/view/", element: <ViewCreator /> },
//     { path: "/edit/:id", element: <EditCreator /> },
//     { path: "/new", element: <AddCreator /> },
//   ]);
// };

// const App = () => {
//   const [creators, setCreators] = useState([]);

//   useEffect(() => {
//     const fetchCreators = async () => {
//       const { data, error } = await supabase
//         .from('creators')
//         .select('*');
      
//       if (error) {
//         console.error('Error fetching data:', error);
//       } else {
//         console.log(data)
//         setCreators(data);
//       }
//     };

//     fetchCreators();
//   }, []);

//   return (
//     <Router>
//       <div className="App">
//         <AppRoutes creators={creators} />
//       </div>
//     </Router>
//   );
// };

// export default App;
