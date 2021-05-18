import React from 'react';
import PropTypes from 'prop-types';
import SearchPokemon from '../SearchPokemon/SearchPokemon';
import pokebolaImage from '../../../../assets/img/pokebola.png';
import './Pokemon.css';

const Pokemon = (props) => {
  let pokemonImage = props.images.front;

  if (props.shiny && props.front) {
    pokemonImage = props.images.frontShiny;
  } else if (props.shiny) {
    pokemonImage = props.images.backShiny;
  } else if (!props.front) {
    pokemonImage = props.images.back;
  }

  return (
    <div className="pokemon">
      <SearchPokemon onClick={props.onChangeType}>
        {props.shiny
          ? 'Switch to regular'
          : 'Switch to shiny'}
      </SearchPokemon>

      <img src={pokemonImage} alt="" />
      <div className="pokebola"><img src={pokebolaImage} alt="" /></div>
      <span>{props.name}</span>

      <SearchPokemon onClick={props.onFlip}>
        {props.front ? 'Back' : 'Front'}
      </SearchPokemon>
    </div>
  );
};


Pokemon.propTypes = {
  front: PropTypes.bool.isRequired,
  images: PropTypes.shape({
    front: PropTypes.string.isRequired,
    frontShiny: PropTypes.string.isRequired,
    back: PropTypes.string.isRequired,
    backShiny: PropTypes.string.isRequired,
  }).isRequired,
  shiny: PropTypes.bool.isRequired,
  onFlip: PropTypes.func.isRequired,
  onChangeType: PropTypes.func.isRequired
};

export default Pokemon;