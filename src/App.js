import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Movies from './components/Movies';
import './AnimationStyle.css';

function App() {
  return (
    <Router>
      <div className="container">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/movie/:id" element={<Movies />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
