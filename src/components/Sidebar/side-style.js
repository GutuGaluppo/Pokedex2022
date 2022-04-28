import styled from 'styled-components'

export const Aside = styled.aside`
	height: 100%;
	padding: 10px 50px;
`

export const Button = styled.button`
	background-color: ${props => props.typeColor};
	color: white;
	border: none;
	padding: 10px 15px;
	margin: 10px;
	border-radius: 20px;
	font-weight: bold;
	cursor: pointer;
	&:hover {
		box-shadow: 0 2px 3px rgba(0, 0, 0, 0.3);
		translateY: 5px;
	}
`