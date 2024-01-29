
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import PriceList from './Component/Dashboard/PriceList/PriceList';
import Tearms from './Component/Terms/Tearms';

const App = () => {
  return (
    <Router>
      <div className='h-screen'>
        <Routes>
          <Route path="/" element={<Tearms />} />
          <Route path="/pricelist" element={<PriceList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
