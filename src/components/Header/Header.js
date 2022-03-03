import React from 'react'

function Header({ setSearchPokemon, searchPokemon }) {
	return <input
	type="search"
	value={searchPokemon}
	onChange={e => setSearchPokemon(e.target.value)}
/>
}

export default Header