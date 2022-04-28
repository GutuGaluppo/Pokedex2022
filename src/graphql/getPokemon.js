import gql from "graphql-tag";

export const GET_ALL_POKEMON = gql`
{
  allPokemon(limit: 20) {
    id
    name
    sprites {
      front_default
    }
		types {
      name
    }
    dominant_color {
      r
      g
      b
    }
  }
}
`

// Get Types only
export const GET_POKEMON_TYPES = gql`
{
	allTypes {
		id
		name
	}
}
`