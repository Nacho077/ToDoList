import React from 'react';
import Contenedor from './features/modules/contenedor/contenedor';
import Header from './features/modules/header/header'
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Contenedor />
    </div>
  );
}

export default App;
