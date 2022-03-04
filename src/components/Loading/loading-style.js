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
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;
export const PokeBall = styled.div`
  display: inline-block;
  animation: ${rotate} 2s linear infinite;
  padding: 5px;
  font-size: 1.2rem;
	width: 200px;
	height: 200px;
	background-size: cover;
	background-image: url(${pokeBall});
`;