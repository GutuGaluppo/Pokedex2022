import React, { useState, useEffect, useMemo } from 'react'
import { useQuery } from '@apollo/react-hooks';
import { GET_ALL_POKEMON } from './graphql/getPokemon';
import './app-style.js';

import PokemonContainer from './components/PokemonContainer/PokemonContainer';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';

import { Main } from './app-style';
import Loading from './components/Loading/Loading';
import Footer from './components/Footer/Footer';

function App() {

	const { loading, error, data } = useQuery(GET_ALL_POKEMON);

	const [pokemons, setPokemons] = useState([]);
	const [pokemonType, setPokemonType] = useState([]);
	const [typesFilter, setTypesFilter] = useState([]);
	const [nameFilter, setNameFilter] = useState('');
	const [typesArr, setTypesArr] = useState([]);

	// const [favorites, setFavorites] = useState([])
	// TODO: 
	// 1. add function to favorite pokemon

	// const favoritePokemons = (checked, name) => {
	// 	console.log('checked APP', checked);
	// 	console.log('name APP', name);
	// 	if (checked) {
	// 		setFavorites([...favorites, name])
	// 	} else {
	// 		setFavorites(favorites.filter(pokemon => pokemon !== name))
	// 	}
	// };

	const filterByTypes = (checked, type) => {

		// TODO
		// 0.1 check if it's checked
		// 1. store selected types
		if (checked) {
			setTypesFilter([...pokemonType, type]);
		} else {
			// 1.2 on uncheck, remove selected types in array
			setTypesFilter(pokemonType.filter(item => item !== type));
		}
	}

	const searchPokemonName = (name) => {
		setNameFilter(name.toLowerCase())
	}

	// // Sort pokemon by name
	// const sortByName = (checked, pokemons) => {
	// 	// TODO
	// 	// 0.1 check if it's checked
	// 	// 1. sort by name
	// 	// 0.2 check if it's unchecked
	// 	// 1. sort by id
	// 	if (checked) {
	// 		const sortByNamePokemon = pokemons.sort((a, b) => {
	// 			if (a.name < b.name) {
	// 				return -1;
	// 			}
	// 			if (a.name > b.name) {
	// 				return 1;
	// 			}
	// 			return 0;
	// 		});
	// 		// console.log('sortedPokemon', sortedPokemon);
	// 		setPokemons(sortByNamePokemon)
	// 	} else {
	// 		const sortByIdPokemon = pokemons.sort((a, b) => {
	// 			if (a.id < b.id) {
	// 				return -1;
	// 			}
	// 			if (a.id > b.id) {
	// 				return 1;
	// 			}
	// 			return 0;
	// 		});
	// 		// console.log('sortedPokemon', sortedPokemon);
	// 		setPokemons(sortByIdPokemon)
	// 	}

	// }

	useEffect(() => {
		if (!data) return
		const pokeTypes = typesArr.map(type => {
			const typeNames = type.values();
			for (let name of typeNames) {
				return name
			}
			return typeNames
		})
		const allTypes = pokeTypes.map(type => {
			return type
		})
		const unique = [...new Set(allTypes)];
		setPokemonType(unique);
	}, [data, typesArr]);

	useEffect(() => {
		if (!data) return;
		setPokemons(data.allPokemon);
		setTypesArr(data.allPokemon.map(type => type?.types.map(type => type?.name)));
	}, [data]);

	const filteredList = useMemo(() => {
		const filteredPokemon = pokemons.filter(pokemon => {
			const toLowerCaseName = pokemon.name.toLowerCase();
			const toLowerCaseSearch = nameFilter.toLowerCase();
			return toLowerCaseName.includes(toLowerCaseSearch);
		});

		return filteredPokemon

		// // 2. filter by selected type
		// if (typesFilter.length === 0) {
		// 	// 2.1 if types array is empty, return all pokemons
		// 	return filteredPokemon
		// } else {
		// 	// 2.2 else reutrn pokemons with selected types in array
		// 	return filteredPokemon.types.filter(type => {
		// 		return typesFilter.includes(type.name)
		// 	})
		// }
	}, [pokemons, nameFilter, typesFilter]);

	if (error) {
		console.error(error)
		return <p>Error :(</p>;
	}

	return (
		<div>
			<Header />
			{loading ? <Loading /> : <Main>
				<Sidebar
					pokemonType={pokemonType}
					filterByTypes={filterByTypes}
					nameFilter={nameFilter}
					searchPokemonName={searchPokemonName}
					pokemons={pokemons}
				/>
				<PokemonContainer
					filteredList={filteredList}
					typesFilter={typesFilter}
				/>
			</Main>
			}
			<Footer />
		</div>
	);
}

export default App;
