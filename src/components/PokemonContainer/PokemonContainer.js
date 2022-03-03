import PokemonCard from '../PokemonCard/PokemonCard';

function PokemonContainer({ filteredPokemon }) {

	return (
		<div>
			<ul style={{ marginInline: "auto", width: 300 }}>
				{
					filteredPokemon.map(pokemon => (
						<PokemonCard key={pokemon.id} pokemon={pokemon} />
					))
				}
			</ul>
		</div>
	)
}

export default PokemonContainer