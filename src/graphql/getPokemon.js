import gql from "graphql-tag";

export const GET_POKEMON = gql`
{
  allPokemon(limit: 20) {
    id
    name
    sprites {
      front_default
    }
    dominant_color {
      r
      g
      b
    }
  }
}
`