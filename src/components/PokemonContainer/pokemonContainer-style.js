import styled from 'styled-components';

export const ListContainer = styled.ul`
	margin-top: 5rem;
	list-style-type: none;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-wrap: wrap;
	max-height: 1000px;
	overflow-y: scroll;
	::-webkit-scrollbar {
    width: 0px;
    background: transparent; /* make scrollbar transparent */
	}
	::-mozila-scrollbar {
    width: 0px;
    background: transparent; /* make scrollbar transparent */
	}
`