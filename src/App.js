import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginForm from './Components/LoginForm/LoginForm';
import Register from './Components/Player/Register/Register'
import PlayerRegister from './Components/Player/Register/RegisterPlayer'

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
    <Route path='/register' element={<Register/>}/>
    <Route path='/player/register' element={<PlayerRegister/>}/>
  </Routes>
</BrowserRouter>
</div>
  );
}

export default App;
