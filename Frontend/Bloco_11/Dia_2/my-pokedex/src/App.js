import './App.css';
import pokemons from './data';
import Pokedex from './Pokedex';

function App() {
  return (
    <div className="main">
      <h1 className="title">Pokedex</h1>
      <Pokedex pokemons={pokemons} />
    </div>
  );
}

export default App;
