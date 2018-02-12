import React, { Component } from 'react'
import Styled from 'styled-components'

import Message from 'components/Message'
import NoMessages from 'components/NoMessages'

const Container = Styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`

const List = Styled.div`
  overflow: auto;
`

export default class extends Component {
  componentDidMount() {
    this.scrollToEnd()
  }

  componentDidUpdate() {
    this.scrollToEnd()
  }

  scrollToEnd() {
    this.list.scrollTop = this.list.scrollHeight
  }

  render() {
    const { user, messages } = this.props

    return (
      <Container>
        <List innerRef={(e) => { this.list = e }}>
          {messages.length === 0 &&
            <NoMessages>No recent messages ...</NoMessages>
          }

          {messages.map((message, index) => (
            <Message
              key={message._id}
              user={user}
              message={message}
              first={index === 0}
              last={index === messages.length - 1}
            />
          ))}
        </List>
      </Container>
    )
  }
}
