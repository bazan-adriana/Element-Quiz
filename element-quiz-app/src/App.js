import './App.css';
import React from 'react';
import QuizApp from './components/QuizApp';
import Navbar from './components/Navbar';
import {  Routes, Route } from 'react-router-dom';
import DashboardPage from './views/DashboardPage';
import DetailsPage from './views/DetailsPage';
import NewMain from './views/NewMain';

function App() {
  return (
    <div className="App">
      <Navbar /> <br></br>
      <QuizApp />

      <h3>Periodic Table of Elements</h3> 
      <Routes>
        <Route path="/" element={<NewMain />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/elements/:atomicNumber" element={<DetailsPage />} />
      </Routes>
    </div>
  );
}

export default App;
