import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Allmovies from './components/Allmovies';
import Toprated from './components/Toprated';
import Upcoming from './components/Upcoming';



function App() {
  return (
    <Router>
      <div>
        <Routes>
        <Route exact path="/" element={<Allmovies />} />
          <Route exact path="/toprated" element={<Toprated />} />
          <Route exact path="/upcoming" element={<Upcoming />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;