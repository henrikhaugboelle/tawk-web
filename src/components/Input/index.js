import React from 'react'
import Styled from 'styled-components'
import { darken, lighten } from 'polished'

const Input = Styled.input`
  display: block;
  width: 100%;
  background: ${props => props.theme.colors.white};
  border: 1px solid ${props => darken(0.125, props.theme.colors.white)};
  border-radius: ${props => props.theme.radius}px;
  padding: 1rem 1rem;
  color: ${props => props.theme.colors.text};
  font-size: 1rem;
  line-height: 1rem;
  margin: 0;
  transition: .3s;

  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.primary};
  }

  &[disabled] {
    opacity: 0.5;
  }

  &::placeholder {
    color: ${props => lighten(0.25, props.theme.colors.text)};
    font-style: italic;
  }

`

export default ({ type, value, placeholder, disabled, innerRef, onChange }) => (
  <Input
    type={type}
    value={value}
    placeholder={placeholder}
    disabled={disabled}
    onChange={(e) => { onChange(e.target.value) }}
    innerRef={innerRef}
  />
)
