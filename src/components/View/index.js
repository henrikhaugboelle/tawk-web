import Styled from 'styled-components'

export default Styled.div`
  ${props => props.width && `
    width: ${props.width}px;
  `}
`
