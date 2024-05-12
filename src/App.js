import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginForm from './Components/LoginForm/LoginForm';

function App() {
  return (
    // <div className="App">
    //   <div className="App-header">Menu</div>
    //   Body</div>
    // </div>
<div className="App">
<BrowserRouter>
  <Routes>
    <Route path="/" element={<LoginForm />} />
  </Routes>
</BrowserRouter>
</div>
  );
}

export default App;
