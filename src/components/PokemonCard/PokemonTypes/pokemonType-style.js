import styled from 'styled-components'

export const Type = styled.li`
	list-style: none;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 3px 15px;
	margin: 8px 5px;
	border: 1px solid white;
	border-radius: 50px;
	background: rgba(${props => props.theme.color});
	color: white;
	font-weight: bold;
	text-shadow: 1px 2px 5px rgba(0, 0, 0, 0.5);
	box-shadow: 0px px 10px rgba(0, 0, 0, 0.5);
	`