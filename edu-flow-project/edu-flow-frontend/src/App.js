import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './pages/Register';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import SessionLogger from './pages/SessionLogger';
import LandingPage from './pages/LandingPage';
import EmotionDetector from './pages/EmotionDetector'; // ← added

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/session" element={<SessionLogger />} />
        <Route path="/emotion" element={<EmotionDetector />} /> {/* ← added */}
      </Routes>
    </Router>
  );
}

export default App;