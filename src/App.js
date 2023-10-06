import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/login';
import Register from './components/registrar';
import Reparaciones from './components/reparaciones';
import Repuestos from './components/repuestos';
import Vehiculos from './components/vehiculos';
import Clientes from './components/clientes';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/registrar" element={<Register />} />
          <Route path='/reparaciones' element={<Reparaciones />} /> 
          <Route path='/repuestos' element={<Repuestos />} />
          <Route path='/vehiculos' element={<Vehiculos />} />
          <Route path='/clientes' element={<Clientes />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
