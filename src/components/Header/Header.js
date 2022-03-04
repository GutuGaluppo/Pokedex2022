import React from 'react'
import { Head } from './header-style.js'
import Title from '../../images/logo_title.svg'

const Header = () => {
	return <Head>
		<img src={Title} alt="title" width='400px' />
	</Head>
}

export default Header