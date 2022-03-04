import React from 'react'
import { Aside } from './side-style'

function Sidebar({ pokemonType, setSearchPokemon, searchPokemon }) {

	return (
		<Aside>
			<h1>Search by:</h1>

			<h4>Name</h4>

			<input
				type="search"
				value={searchPokemon}
				onChange={e => setSearchPokemon(e.target.value)}
			/>
			{/* TODO:
				1. create a checkbox for each type
				2. on check, add type to array
				3. on uncheck, remove type from array
				4. filter pokemons by selected types
			 */}
			<h4>Type</h4>
			{
				pokemonType.map((type, index) => {
					return <div key={index} class="mx-4 my-2">
						<input
							type="checkbox"
							value={type.name}
							name={type.name}
							onChange={(e) => setSearchPokemon(e.target.checked, type.name)}
						/>
						<label htmlFor={type}>{type}</label>
					</div>
				})
			}
		</Aside>
	)
}

export default Sidebar