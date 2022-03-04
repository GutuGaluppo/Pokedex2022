import React from 'react'
import { ThemeProvider } from 'styled-components';
import { Card, TitleContainer, Title, TypeList, ImgContenainer } from './pokemonCard-style'
import PokemonTypes from './PokemonTypes/PokemonTypes';

function PokemonCard({ pokemon }) {

	const captilizeFirstLetter = name => {
		return name.charAt(0).toUpperCase() + name.slice(1);
	};

	const pokemonColor = `${pokemon.dominant_color.r}, ${pokemon.dominant_color.g}, ${pokemon.dominant_color.b}`

	const theme = {
		color: pokemonColor
	}

	return <ThemeProvider theme={theme}>
		<Card>
			<TitleContainer>
				<Title>{captilizeFirstLetter(pokemon.name)}</Title>
			</TitleContainer>
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