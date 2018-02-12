import React, { Component } from 'react'
import Styled from 'styled-components'

const Form = Styled.form``

export default class extends Component {
  handleSubmit = (e) => {
    e.preventDefault()

    if (this.props.onSubmit) {
      this.props.onSubmit()
    }
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        {this.props.children}
      </Form>
    )
  }
}
