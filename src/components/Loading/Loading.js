import React from 'react'
import { Loader, PokeBall } from './loading-style.js'

function Loading() {
	return (
		<Loader>
			<PokeBall />
			<h1>
				Loading...
			</h1>
		</Loader>
	)
}

export default Loading