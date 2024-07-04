// import { useRoutes, BrowserRouter as Router } from 'react-router-dom';
// import { React, useState, useEffect } from 'react';
// import { supabase } from './client';

// // Import your pages
// import AllCreators from './pages/ShowCreators';
// import ViewCreator from './pages/ViewCreator';
// import EditCreator from './pages/EditCreator';
// import AddCreator from './pages/AddCreator';

// const AppRoutes = ({ creators }) => {
//   return useRoutes([
//     { path: "/", element: <AllCreators creators={creators} /> },
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













//import React from 'react';
import { useRoutes, BrowserRouter as Router } from 'react-router-dom';
import { React, useState, useEffect } from 'react';
import { supabase } from './client';


// Import your pages
import AllCreators from './pages/ShowCreators';
import ViewCreator from './pages/ViewCreator';
import EditCreator from './pages/EditCreator';
import AddCreator from './pages/AddCreator';


const AppRoutes = () => {
  return useRoutes([
    { path: "/", element: <AllCreators /> },
    // { path: "/view/:id", element: <ViewCreator /> },
    { path: "/view/", element: <ViewCreator /> },
    { path: "/edit/:id", element: <EditCreator /> },
    { path: "/new", element: <AddCreator /> },
  ]);
};


const App = () => {

  // const [creators, setCreators] = useState([]);

  // useEffect(() => {
  //   const fetchCreators = async () => {
  //     const { data, error } = await supabase
  //       .from('creators')
  //       .select('*');
      
  //     if (error) {
  //       console.error('Error fetching data:', error);
  //     } else {
  //       setCreators(data);
  //     }
  //   };

  //   fetchCreators();
  // }, []);






  return (
    <Router>
      <div className="App">
        <AppRoutes />
      </div>
    </Router>
  );
};

export default App;

// echo "# test" >> README.md
// git init
// git add README.md
// git commit -m "first commit"
// git branch -M main
// git remote add origin https://github.com/Aymerick116/test.git
// git push -u origin main




https://github.com/Aymerick116/CodepathWeb103_prework.git