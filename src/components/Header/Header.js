import React from 'react'
import { Head, ImageContainer } from './header-style.js'
import Title from '../../images/logo_title.svg'

const Header = () => {
	return <Head>
		<ImageContainer>
			<img src={Title} alt="title" width='400px' />
		</ImageContainer>
	</Head>
}

export default Header