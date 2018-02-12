import React from 'react'
import Styled from 'styled-components'
import { lighten, transparentize } from 'polished'

import FormattedTimestamp from 'shared/components/FormattedTimestamp'
import AnimalIcon from 'components/AnimalIcon'

const Container = Styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  border-radius: ${props => props.theme.radius}px;

  ${props => props.self && `
    flex-direction: row-reverse;
    text-align: right;
  `}
`

const Circle = Styled.div`
  background: ${props => transparentize(0.25, props.color)};
  border-radius: 1em;
  font-size: 1.5rem;
  padding: 0.25rem;
  height: 2rem;
  width: 2rem;

  ${props => props.self && `
    margin-left: 0.5rem;
  `}

  ${props => !props.self && `
    margin-right: 0.5rem;
  `}
`

const Info = Styled.div`
  font-size: 0.7rem;
  line-height: 1.25;
`

const Label = Styled.div`
  color: ${props => lighten(0.2, props.theme.colors.text)};
`

const Timestamp = Styled.div`
  font-style: italic;
  color: ${props => lighten(0.4, props.theme.colors.text)};
`

export default ({ user, message, self }) => (
  <Container color={user.identity.color} self={self}>
    <Circle color={user.identity.color} self={self}>
      <AnimalIcon
        color={user.identity.color}
        animal={user.identity.animal}
      />
    </Circle>
    <Info>
      <Label>{user.displayName}</Label>
      <FormattedTimestamp timestamp={message.timestamp} component={Timestamp} />
    </Info>
  </Container>
)
