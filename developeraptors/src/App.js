
//import './App.css';
import './css-vistas/ComponenHeader.css';
import './css-vistas/ListaProductos.css';
import ComponenteHeader from './componente/componenteHeader';
import ListaProductos from './componente/ListaProductos';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ComponenteHeader/>
      </header>
      <main>
        <ListaProductos/>
      </main>
    </div>
  );
}

export default App;
