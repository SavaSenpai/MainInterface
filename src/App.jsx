import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import MainInterface  from './components/MainInterface/MainInterface';
import DecisionMaking  from './components/DecisionMaking/DecisionMaking';
import Calculator from './components/Calculator/Calculator';
import Notfoundpage  from './components/Notfoundpage/Notfoundpage';
import Information from './components/Information/information';
import './App.scss';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/MainInterface" element={<MainInterface />} />
        <Route path="/DecisionMaking" element={<DecisionMaking />} />
        <Route path='/information' element={<Information />} />
        <Route path="/Calculator" element={<Calculator />} />
        <Route path="*" element={<Notfoundpage />} />
      </Route>
    </Routes>
  );
}

export default App;
