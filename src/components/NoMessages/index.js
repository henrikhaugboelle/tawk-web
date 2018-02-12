import Styled from 'styled-components'
import { transparentize } from 'polished'

export default Styled.div`
  padding: 4rem 0;
  text-align: center;
  font-size: 0.85rem;
  font-style: italic;
  color: ${props => transparentize(0.5, props.theme.colors.text)};
`
