import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import ItemListContainer from "../src/components/ItemList/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";
import ItemDetailContainer from "./components/ItemDetail/ItemDetailContainer";
import Cart from "./components/Cart/Cart";

function App() {
  return (
    <BrowserRouter>
      <NavBar></NavBar>
      <Routes>
        <Route index path="/" element={<ItemListContainer />}></Route>
        <Route
          path="/category/:categoriaId"
          element={<ItemListContainer />}
        ></Route>
        <Route path="/details/:id" element={<ItemDetailContainer />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="*" element={<Navigate to="/" />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
