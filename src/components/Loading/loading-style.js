import styled, { keyframes } from 'styled-components';
import pokeBall from '../../images/pokeball.png';

export const Loader = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: 100vh;
	margin: 0 auto;
`

const rotate = keyframes`
  0% {
    transform: rotate(0deg) scale(.5);	
  }
  50% {
    transform: rotate(360deg) scale(2);
  }
	100% {
		transform: rotate(720deg) scale(.5);
	}
`;
export const PokeBall = styled.div`
	margin: 50px auto;
  display: inline-block;
  animation: ${rotate} 3s linear infinite;
  padding: 5px;
  font-size: 1.2rem;
	width: 200px;
	height: 200px;
	background-size: cover;
	background-image: url(${pokeBall});
`;