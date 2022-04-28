import React from 'react'
import { Aside } from './side-style'


function Sidebar({ pokemonType, searchPokemonName, nameFilter, pokemons, filterByTypes, sortByName }) {

	return (
		<Aside>
			<h1>Search by:</h1>

			<h4>Name</h4>

			<input
				type="search"
				value={nameFilter}
				onChange={e => searchPokemonName(e.target.value)}
			/>
			{/* TODO:
				1. create a button for each type
				2. on click, add type to array
				3. on click button "all", show all pokemon
				4. filter pokemons by selected types
			 */}
			<h4>Type</h4>
			{
				pokemonType.sort().map((type, index) => {
					return <div key={index}>
						<input
							type="checkbox"
							value={type}
							name={type}
							onChange={(e) => filterByTypes(e.target.checked, type)}
						/>
						<label htmlFor={type} style={{ marginLeft: 10 }}>{type}</label>
					</div>
				})
			}

			{/* SORT BY NAME */}
			{/* <input type="checkbox" onChange={(e) => sortByName(e.target.checked, pokemons)} /> */}

			{/* {
				pokemons.map(pokemon => {
					const pokemonColor = `rgb(${pokemon.dominant_color.r}, ${pokemon.dominant_color.g}, ${pokemon.dominant_color.b})`

					return <div key={pokemon.id}>
						<Button
							value={pokemon.name}
							onClick={() => searchPokemonName(pokemon.name)}
							typeColor={pokemonColor}
						>
							{pokemon.name}
						</Button>
					</div>
				})
			} */}
		</Aside>
	)
}

export default Sidebar