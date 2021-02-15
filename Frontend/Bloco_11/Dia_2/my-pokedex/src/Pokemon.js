import React from 'react';
import PropTypes from 'prop-types';

class Pokemon extends React.Component {
  render() {
    const { pokemon } = this.props;
    const { name, type, color, averageWeight, image } = pokemon;
    return (
      <div className="pokemon" style={{background: color}}>
        <div>
          <p>{name}</p>
          <p>{type}</p>
          <p>{`Average weight: ${averageWeight.value}${averageWeight.measurementUnit}`}</p>
        </div>
          <img src={image} alt={name} />
      </div>
    );
  }
}

Pokemon.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string,
    type: PropTypes.string,
    averageWeight: PropTypes.shape({
      value: PropTypes.number,
      measurementUnit: PropTypes.string,
    }),
    image: PropTypes.string,
  }).isRequired,
};

export default Pokemon;
