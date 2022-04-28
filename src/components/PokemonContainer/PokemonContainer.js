import PokemonCard from '../PokemonCard/PokemonCard';
import { ListContainer } from './pokemonContainer-style.js';

function PokemonContainer({ filteredList, favoritePokemons, favorites }) {

	return (
		<ListContainer>
			{
				filteredList.map(pokemon => (
					<PokemonCard
						key={pokemon.id}
						pokemon={pokemon}
					/>
				))
			}
		</ListContainer>
	)
}

export default PokemonContainer