import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import { Route , Routes} from 'react-router-dom';
import BIPage from './pages/PowerBIPage';

function App() {
  return (
    <Routes>
      <Route path="/"  element={<Home/>} />
      <Route path="/PowerBIDemo" element={<BIPage/>} />
    </Routes>
  );
}

export default App;
