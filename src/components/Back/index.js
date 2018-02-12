import React from 'react'
import Styled from 'styled-components'
import { transparentize } from 'polished'

const Button = Styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  padding-left: 0.5rem;
  border-radius: ${props => props.theme.radius}px;
  cursor: pointer;
  transition: .3s;

  &:hover {
    background: ${props => transparentize(0.8, props.theme.colors.primary)};
  }
`

const Lines = Styled.div`
  transform: rotate(45deg);
`

const LineA = Styled.div`
  width: 2px;
  height: 1rem;
  background: ${props => props.theme.colors.primary};
b`

const LineB = Styled.div`
  width: calc(1rem + 2px);
  height: 2px;
  background: ${props => props.theme.colors.primary};
`

export default ({ onClick }) => (
  <Button onClick={onClick}>
    <Lines>
      <LineA />
      <LineB />
    </Lines>
  </Button>
)
