import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import { BrowserRouter, Route , Routes} from 'react-router-dom';
import BI from './pages/PowerBIPage';

function App() {
  return (
    <Routes>
      <Route path="/"  element={<Home/>} />
      <Route path="/PowerBIDemo" element={<BI/>} />
    </Routes>
  );
}

export default App;
