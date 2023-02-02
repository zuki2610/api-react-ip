import React from 'react';
import './index.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Productos from './Componentes/Produtos';
import Home from './Componentes/Home';
import Password from './Componentes/Password';


function App() {
  return (
  <BrowserRouter>
  
  <main>
    <Routes>
        <Route path='/renderizacion_react/productos' element={<Productos />} />
        <Route path='/renderizacion_react/login' element={<Password />} />
        <Route path='/renderizacion_react/' element={<Home />} />
    </Routes>
  </main>
</BrowserRouter>
)
}

export default App;
