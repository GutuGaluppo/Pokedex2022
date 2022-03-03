import React, { useState, useEffect } from 'react'
import { useQuery } from '@apollo/react-hooks';
import { GET_POKEMON } from './graphql/getPokemon';
import './App.css';

import PokemonContainer from './components/PokemonContainer/PokemonContainer';
import Header from './components/Header/Header';


function App() {

	const { loading, error, data } = useQuery(GET_POKEMON);

	const [pokemons, setPokemons] = useState([]);
	const [searchPokemon, setSearchPokemon] = useState('');

	useEffect(() => {
		if (!data) return;
		setPokemons(data.allPokemon);
	}, [data]);

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error :(</p>;
	console.log('data', data.allPokemon);

	const filteredPokemon = pokemons.filter(pokemon => {
		const toLowerCaseName = pokemon.name.toLowerCase();
		return toLowerCaseName.includes(searchPokemon.toLowerCase());
	});

	return (
		<div>
			<Header setSearchPokemon={setSearchPokemon} searchPokemon={searchPokemon} />
			<main>
				<PokemonContainer filteredPokemon={filteredPokemon} />
			</main>
		</div>
	);
}

export default App;
