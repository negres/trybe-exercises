import React from 'react';
import Pokemon from './Pokemon';

class Pokedex extends React.Component {
  render() {
    return (
      <div className="container">
        {this.props.pokemons.map(pokemon => <Pokemon key={pokemon.id} pokemon={pokemon} />)}
      </div>
    );
  }
}

export default Pokedex;
