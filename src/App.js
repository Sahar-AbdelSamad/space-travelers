import React from 'react';
import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom';
import Header from './components/Header';
import Rockets from './components/Rockets';
import Missions from './components/Missions';
import Profile from './components/MyProfile';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Rockets />} />
          <Route path="missions" element={<Missions />} />
          <Route path="myProfile" element={<Profile />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
