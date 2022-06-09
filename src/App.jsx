import { useEffect, useState } from "react";
import "./App.css";
import ItemListContainer from "../src/components/ItemList/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";
import ItemDetailContainer from "./components/ItemDetail/ItemDetailContainer";

function App() {
  return (
    <div className="App">
      <nav>
        <NavBar></NavBar>
      </nav>

      <main>
        <ItemListContainer></ItemListContainer>
        <ItemDetailContainer></ItemDetailContainer>
      </main>
    </div>
  );
}

export default App;
