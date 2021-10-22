import React from 'react';
import './App.css';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import { BrowserRouter } from 'react-router-dom'
import Routes from './Routes'

function App() {
  return (
    <BrowserRouter>

      <Routes />

    </BrowserRouter>
  );
}

export default App;
