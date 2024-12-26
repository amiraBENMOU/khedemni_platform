import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../Pages/Home'; // Import the Home component
import Remote from '../Pages/remote/Remote'; // Import the Remote component
import Admin_component from '../Pages/admin/Admin'; // Import the Admin component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} /> {/* Default Route */}
        <Route path="/remote" element={<Remote />} /> {/* Remote Page Route */}
        <Route path="/admin" element={<Admin_component />} /> {/* Admin Page Route */}
      </Routes>
    </Router>
  );
}

export default App;