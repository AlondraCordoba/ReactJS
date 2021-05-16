import React, { useEffect, useState, useCallback } from 'react';
import Pokemon from './Pokemon/Pokemon';
import SearchPokemon from './SearchPokemon/SearchPokemon';
import logoPokemon from '../../../assets/img/pokemonLogo2.png';
import './ApiExample.css';

const BASE_API = 'https://pokeapi.co/api/v2/pokemon';
const ApiExample = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState('');
  const [pokemon, setPokemon] = useState('');
  const [loading, setLoading] = useState(false);
  const [back, setBackPokemon] = useState(false);
  const [shiny, setShinyPokemon] = useState(false);
  const RandomId = Math.floor(Math.random() * 896 + 1);
  const [ pokemonID ] = useState(RandomId);

  const callApi = useCallback(async (pokemon) => {
    setLoading(true);
    try {
      const response = await fetch(`${BASE_API}/${pokemon}`);

      if (response.ok) {
        const result = await response.json();
        setError('');
        setData(result);
      } else {
        setError('Search Error: Something went wrong, try again.');
        setData(null);
      }
    } catch (err) {
      setError(err);
    }
    setLoading(false);
  }, []);


  useEffect(() => {
    callApi(`${pokemonID}`);
  }, [callApi, pokemonID]);

  const handleSwitchPokemon = (event) => {
    setPokemon(event.target.value);
  };

  const handleSearchPokemon = (event) => {
    event.preventDefault();
    callApi(pokemon);
  };

  const handleSwitch = () => {
    setBackPokemon(prePokemonBack => !prePokemonBack);
  };

  const handleShiny = () => {
    setShinyPokemon(prePokemonShiny => !prePokemonShiny);
  };

  const images = data ? {
    back: data.sprites.back_default,
    backShiny: data.sprites.back_shiny,
    front: data.sprites.front_default,
    frontShiny: data.sprites.front_shiny,
  } : null;

  return (
    <div className="api">
      <div className="logo">
        <div className="logoImage">
          <img src={logoPokemon} alt="Pokemon" />
        </div>
      </div>

      <form onSubmit={handleSearchPokemon}>
        <input type="text" value={pokemon} onChange={handleSwitchPokemon} />

        <SearchPokemon submit className="searchPokemon">
          {loading ? 'Loading' : 'Search'}
        </SearchPokemon>
      </form>

      {data
        ? (
          <Pokemon
            name={data.name}
            images={images}
            front={!back}
            shiny={shiny}
            onChangeType={handleShiny}
            onFlip={handleSwitch}
          />
        )
        : null}

        <div className="errorMessage" error><span>{error}</span></div>

    </div>
  );
};

export default ApiExample;
