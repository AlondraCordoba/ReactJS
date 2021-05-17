import React from 'react';
import './SearchPokemon.css';

const SearchPokemon = (props) => (
  <button
    className={`ButtonPokemon ${props.className}`}
    onClick={props.onClick}
    type={props.submit ? 'submit' : 'button'}
  >
    {props.children}
  </button>
);


export default SearchPokemon;
