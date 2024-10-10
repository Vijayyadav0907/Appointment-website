/* eslint-disable no-unused-vars */
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Contact from './pages/Contact.jsx';
import FindDoctor from './pages/FindDoctor';
import Services from './pages/Services';
import Register from './pages/Register';
import Login from './pages/Login';
import Doctors from './pages/Doctors/Doctors';
import "./App.css";

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/find-doctor" element={<Doctors />} />
        <Route path="/services" element={<Services />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
