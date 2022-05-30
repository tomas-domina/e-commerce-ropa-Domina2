import './App.css'
import ItemListContainer from './components/Cuerpo/ItemListContainer'
import NavBar from './components/NavBar/NavBar'


function App() {
  
  let saludos = 'Bienvenidos'
  return (
    <div className='App'>
      <NavBar></NavBar>
      <ItemListContainer greeting={saludos}></ItemListContainer>
    </div>
  )
}

export default App