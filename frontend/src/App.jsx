import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import Auth from './pages/Auth';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/auth" element={<Auth />} />
        {/* Placeholder for other routes */}
        <Route path="/features" element={<Landing />} />
        <Route path="/pricing" element={<Landing />} />
        <Route path="/docs" element={<Landing />} />
      </Routes>
    </Router>
  );
}

export default App;
