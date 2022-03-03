import React from 'react'

function PokemonCard({ pokemon }) {
	// TODO:
	// - Captialize the first letter of the name

	const captilizeFirstLetter = name => {
		return name.charAt(0).toUpperCase() + name.slice(1);
	};

	return <li>
		<p>{captilizeFirstLetter(pokemon.name)}</p>
		<div
			style={{
				width: 'min-content',
				padding: 10,
				background: `rgba(${pokemon.dominant_color.r}, ${pokemon.dominant_color.g}, ${pokemon.dominant_color.b}, 0.8)`,
				borderRadius: `50%`
			}}
		>
			<img src={pokemon.sprites.front_default} alt={pokemon.name} />
		</div>
	</li>
}

export default PokemonCard