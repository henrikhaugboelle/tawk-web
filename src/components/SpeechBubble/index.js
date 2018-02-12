import React from 'react'
import Styled from 'styled-components'
import { triangle } from 'polished'

const Container = Styled.div`
  position: relative;
  background: ${props => props.theme.colors.lightGray};
  border-radius: ${props => props.theme.radius}px;
  padding: 0.5rem 0.75rem;
  font-size: 0.85rem;
  margin: 0 0 0.5rem 0;

  &:before {
    content: "";
    position: absolute;
    top: 100%;
    ${props => triangle({ pointingDirection: 'bottom', width: '10px', height: '6px', foregroundColor: props.theme.colors.lightGray })};

    ${props => props.self && `
      right: calc(1rem - 5px);
    `}

    ${props => !props.self && `
      left: calc(1rem - 5px);
    `}
  }
`

export default ({ message, self }) => (
  <Container self={self}>
    {message}
  </Container>
)
