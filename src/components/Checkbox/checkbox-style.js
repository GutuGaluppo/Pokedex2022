import styled from 'styled-components';
import PokeballColor from '../../images/pokeball-color.png'
import PokeballBW from '../../images/pokeball-bw.png'

export const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`

export const StyledCheckbox = styled.div`
  display: inline-block;
	margin-top: 55px;
	width: 50px;
	height: 50px;
	background: url(${props => props.checked ? PokeballColor : PokeballBW});
	background-size: cover;
	background-position: center;
  transition: all 150ms;
`

export const CheckboxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
	cursor: pointer;
`
