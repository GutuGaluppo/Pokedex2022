import styled from 'styled-components'

export const Card = styled.li`
	position: relative;
	list-style: none;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	margin: 10px 20px;
	padding: 10px;
	border-radius: 16px;
	background: rgba(${props => props.theme.color}, 0.19);
	box-shadow: 0 4px 10px rgba(${props => props.theme.color}, 0.1);
	backdrop-filter: blur(14.8px);
	-webkit-backdrop-filter: blur(14.8px);
	border-bottom: 3px solid rgba(${props => props.theme.color}, 0.3);
	overflow: hidden;
	`

export const ImgContenainer = styled.div`
		margin: 80px auto;
		width: 200px;
		height: 200px;
		border: 2px solid white;
		border-radius: 50%;
		padding: 10px;
		background: rgba(${props => props.theme.color}, 0.19);
		box-shadow: 0 4px 10px rgba(${props => props.theme.color}, 0.1);
		backdrop-filter: blur(14.8px);
		-webkit-backdrop-filter: blur(14.8px);
		border: 1px solid rgba(${props => props.theme.color}, 0.3);
		`

export const TitleContainer = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	background: rgb(${props => props.theme.color});
	border-radius: 0px 0px 10px 0px;
	box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.4);
	`

export const Title = styled.h3`
	text-align: center;
	margin: 10px;
	padding: 0px 10px;
	font-size: 1.5em;
	color: white;
	text-shadow: 1px 2px 2px rgba(0, 0, 0, 0.5);
	`

export const TypeList = styled.ul`
		position: absolute;
		bottom: 0;
		right: 0;
		background: rgb(${props => props.theme.color});
		border-radius: 10px 0px 0px 0px;
		list-style: none;
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		align-items: center;
		padding: 0px 10px;
		box-shadow: inset 2px 2px 5px rgba(0, 0, 0, 0.6);
		`