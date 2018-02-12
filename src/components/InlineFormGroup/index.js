import Styled from 'styled-components'

export default Styled.div`
  display: flex;
  flex-direction: row;

  & > * {
    margin: 0 0.25rem;

    &:first-child {
      margin-left: 0;
    }

    &:last-child {
      margin-right: 0;
    }
  }
`
