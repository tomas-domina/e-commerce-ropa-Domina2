import "./App.css";
import ItemListContainer from "./components/Cuerpo/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";

function App() {
  let saludos = "Bienvenidos";

  return (
    <div className="App">
      <nav>
        <NavBar></NavBar>
      </nav>

      <main>
        <ItemListContainer greeting={saludos}></ItemListContainer>
      </main>
    </div>
  );
}

export default App;
