import React from 'react'
import { Type } from './pokemonType-style'

function PokemonTypes({ type, color }) {
	return <Type key={type.name} color={color} >{type.name}</Type>
}

export default PokemonTypes