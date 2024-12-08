import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../Pages/Home'; // Import the Home component
import Remote from '../Pages/remote/Remote'; // Import the Remote component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} /> {/* Default Route */}
        <Route path="/remote" element={<Remote />} /> {/* Remote Page Route */}
      </Routes>
    </Router>
  );
}

export default App;
