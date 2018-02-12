import Styled, { keyframes } from 'styled-components'
import { transparentize } from 'polished'

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`

export default Styled.span`
  display: block;
  height: 1em;
  width: 1em;
  line-height: 1;
  font-size: 1em;
  position: relative;
  text-indent: -9999em;
  border-top: 0.1em solid ${props => transparentize(0.2, props.theme.colors[props.variant || 'primary'])};
  border-right: 0.1em solid ${props => transparentize(0.2, props.theme.colors[props.variant || 'primary'])};
  border-bottom: 0.1em solid ${props => transparentize(0.2, props.theme.colors[props.variant || 'primary'])};
  border-left: 0.1em solid ${props => transparentize(1, props.theme.colors[props.variant || 'primary'])};
  transform: translateZ(0);
  animation: ${spin} 1.1s infinite linear;

  &, &:after {
    border-radius: 50%;
    width: 1em;
    height: 1em;
  }
`
