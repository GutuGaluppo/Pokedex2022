import React from 'react'
import { Head } from './header-style.js'
import Title from '../../images/logo_title.svg'

const Header = ({ setSearchPokemon, searchPokemon }) => {
	return <Head>
		<img src={Title} alt="title" width='400px' />
		<input
			type="search"
			value={searchPokemon}
			onChange={e => setSearchPokemon(e.target.value)}
		/>
	</Head>
}

export default Header