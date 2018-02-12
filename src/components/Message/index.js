import React from 'react'
import Styled from 'styled-components'

import SpeechBubble from 'components/SpeechBubble'
import Avatar from 'components/Avatar'

const Message = Styled.div`
  padding: 0.5rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: ${props => (props.self ? 'flex-end' : 'flex-start')};

  ${props => props.self && `
    padding-left: 3.5rem;
  `}

  ${props => !props.self && `
    padding-right: 3.5rem;
  `}

  ${props => props.first && `
    padding-top: 1rem;
  `}

  ${props => props.last && `
    padding-bottom: 1rem;
  `}
`

export default ({ user, message, first, last }) => (
  <Message self={message.user._id === user._id} first={first} last={last}>
    <SpeechBubble message={message.message} self={message.user._id === user._id} />
    <Avatar user={message.user} message={message} self={message.user._id === user._id} />
  </Message>
)
