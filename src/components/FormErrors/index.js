import React, { Component } from 'react'
import Styled from 'styled-components'

const Errors = Styled.div``

const Error = Styled.div`
  display: block;
  padding: 0.25rem;
  margin-top: 0.5rem;
  line-height: 1;
  font-size: 0.85rem;
  background: ${props => props.theme.colors.danger};
  color: ${props => props.theme.colors.white};
  border-radius: ${props => props.theme.radius}px;
`

export default class extends Component {
  render() {
    const { errors = [] } = this.props

    if (errors.length === 0) {
      return null
    }

    return (
      <Errors>
        {errors.map(error => (
          <Error key={error}>
            {error}
          </Error>
        ))}
      </Errors>
    )
  }
}
