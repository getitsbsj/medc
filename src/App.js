import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import Medicines from './components/Medicines';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import HospitalLocator from './components/HospitalLocator';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/hospitallocator" element={<HospitalLocator />} />
          <Route path="/medicines" element={<Medicines />} />
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;
