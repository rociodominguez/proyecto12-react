import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/home/Home';
import TicTacToe from './components/TicTacToe/TicTacToe';
import Hangman from './components/hangman/Hangman';
import NavBar from './components/navbar/NavBar';
import './App.css';

const App = () => {
  return (
    <Router>
      <NavBar />
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tres-en-raya" element={<TicTacToe />} />
          <Route path="/ahorcado" element={<Hangman />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

