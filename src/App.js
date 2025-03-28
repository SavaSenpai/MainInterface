import React from 'react';

import MainInterface from './components/MainInterface/MainInterface';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import './App.scss';

function App() {
  return (
    <div>
    <Header />

      {/* MainInterface всегда отображается */}
      <MainInterface />

      <Footer />
      </div>
  );
}

export default App;
