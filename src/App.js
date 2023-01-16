import "./App.scss";
import "./navbar.css";
import React, { useState, useEffect } from "react";
import NavBar from "./components/navbar/NavBar";
import ItemListContainer from "./containers/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./containers/itemDetailContainer/ItemDetailContainer";
import Cart from "./components/Cart/Cart";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";

// Componente APP
function App() {
  const [productList, setProductList] = useState([]);

  async function getProducts() {
    let respuesta = await fetch(`https://fakestoreapi.com/products/`);
    let products = await respuesta.json();
    console.log(products);
    setProductList(products);
  }

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/category/:idCategory" element={<ItemListContainer />} />
        <Route path="/detail/:id" element={<ItemDetailContainer />} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="*" element={<NotFoundPage />} />
        
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
