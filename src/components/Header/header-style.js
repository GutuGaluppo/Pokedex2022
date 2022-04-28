import styled from 'styled-components';

export const Head = styled.header`
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 0.5rem 2rem;
	height: 5rem;
	background: linear-gradient(22deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%);
	border-bottom: 1px solid #e5e5e5;
`
export const ImageContainer = styled.div`
	position: absolute;
	top: 90%;
	left: 50%;
	transform: translate(-50%, -50%);
`