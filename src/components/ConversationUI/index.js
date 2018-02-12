import Styled from 'styled-components'
import Media from 'styled-media-query'
import { transparentize } from 'polished'

export default Styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 42rem;
  max-width: 100%;
  margin: 0 auto;
  background: ${props => props.theme.colors.white};

  ${Media.greaterThan('42rem')`
    border: 1px solid ${props => transparentize(0.9, props.theme.colors.black)};
    border-top: 0;
    border-bottom: 0;
  `}
`
