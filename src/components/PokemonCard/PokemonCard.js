import React, { useMemo, useState } from 'react'
import { ThemeProvider } from 'styled-components';
import { Card, TitleContainer, Title, TypeList, ImgContenainer } from './pokemonCard-style'
import PokemonTypes from './PokemonTypes/PokemonTypes';
import Checkbox from '../Checkbox/Checkbox';

function PokemonCard({ pokemon }) {

	const captilizeFirstLetter = name => {
		return name.charAt(0).toUpperCase() + name.slice(1);
	};

	const pokemonColor = `${pokemon.dominant_color.r}, ${pokemon.dominant_color.g}, ${pokemon.dominant_color.b}`

	const theme = {
		color: pokemonColor
	}

	const [favorites, setFavorites] = useState([])

	const favoritePokemon = (checked, name) => {

		if (checked) {
			setFavorites([...favorites, name])
		} else {
			setFavorites(favorites.filter(pokemon => pokemon !== name))
		}
	}

	const isFavorite = useMemo(() => favorites.includes(pokemon.name), [favorites, pokemon.name])
	// const isFavorite = () => {
	// 	return favorites.includes(pokemon.name)
	// }

	return <ThemeProvider theme={theme}>
		<Card>
			<TitleContainer>
				<Title>{captilizeFirstLetter(pokemon.name)}</Title>
			</TitleContainer>
			<label>
				<Checkbox
					checked={isFavorite}
					onChange={(e) => favoritePokemon(e.target.checked, pokemon.name)}
				/>
			</label>
			<ImgContenainer>
				<img src={pokemon.sprites.front_default} alt={pokemon.name} width="200px" />
			</ImgContenainer>
			<TypeList>
				{pokemon.types.map(type => (
					<PokemonTypes key={type.name} type={type} />
				))}
			</TypeList>
		</Card>
	</ThemeProvider>
}

export default PokemonCard