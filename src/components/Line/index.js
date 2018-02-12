import Styled from 'styled-components'
import { transparentize } from 'polished'

export default Styled.div`
  background: ${props => transparentize(0.9, props.theme.colors.black)};
  height: 1px;
`
