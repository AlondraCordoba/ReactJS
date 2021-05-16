import React from 'react';
import PropTypes from 'prop-types';
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


SearchPokemon.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node,
  className: PropTypes.string,
};

export default SearchPokemon;
