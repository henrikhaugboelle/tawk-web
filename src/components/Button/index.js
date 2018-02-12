import React from 'react'
import Styled from 'styled-components'
import Media from 'styled-media-query'
import { lighten, darken } from 'polished'

import Loader from 'components/Loader'

const Button = Styled.button`
  position: relative;
  display: block;
  font-size: 1em;
  line-height: 1em;
  background: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.white};
  border-radius: ${props => props.theme.radius}px;
  border: 0;
  padding: 1em 2em;
  cursor: pointer;
  transition: .3s;
  text-align: center;

  ${props => props.disabled && `
    cursor: not-allowed;
    opacity: 0.5;
  `}

  ${Media.greaterThan('medium')`
    &:hover, &:focus {
      background: ${props => lighten(0.2, props.theme.colors.primary)};
    }

    &:active {
      background: ${props => darken(0.2, props.theme.colors.primary)};
    }
  `}
`
const HideableLoader = Styled.span`
  display: block;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  visibility: ${props => (props.hide ? 'hidden' : 'visible')};
  opacity: ${props => (props.hide ? '0' : '1')};
  font-size: 1.5em;
`

const HideableText = Styled.span`
  display: block;
  visibility: ${props => (props.hide ? 'hidden' : 'visible')};
  opacity: ${props => (props.hide ? '0' : '1')};
`

export default ({ loading, label, ...props }) => (
  <Button {...props}>
    <HideableLoader hide={!loading}>
      <Loader variant="white" />
    </HideableLoader>

    <HideableText hide={loading}>
      {label}
    </HideableText>
  </Button>
)
