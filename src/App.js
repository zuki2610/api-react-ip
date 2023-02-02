import React from "react";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Productos from "./Components/Produtos";
import Home from "./Components/Home";
import Password from "./Components/Password";

function App() {
  return (
    <BrowserRouter>
      <main>
        <Routes>
          <Route path="/api-react-ip/home" element={<Home />} />
          <Route path="/api-react-ip/productos" element={<Productos />} />
          <Route path="/api-react-ip/login" element={<Password />} />
          <Route path="/api-react-ip/" element={<Home />} />
          <Route exact path="/" element={<Home />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
