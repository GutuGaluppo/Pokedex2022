import React from 'react'
import './header.css'

import Pokeball from '../../images/pokeball.png'

function Header({ setSearchPokemon, searchPokemon }) {
	return <div className="header">
		<img src={Pokeball} alt="pokeball" width='50px' />
		<input
			type="search"
			value={searchPokemon}
			onChange={e => setSearchPokemon(e.target.value)}
		/>
	</div>
}

export default Header