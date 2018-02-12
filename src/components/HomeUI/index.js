import React from 'react'
import Styled from 'styled-components'

import expoImage from './get-on-expo.png'

const Container = Styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Content = Styled.div`
  max-width: calc(100% - 2rem);
  width: 24rem;
`

const ExpoLink = Styled.a`
  display: block;
  width: 128px;
  margin: 4rem auto;
`

const ExpoImage = Styled.img.attrs({
  src: expoImage
})`
  display: block;
  width: 100%;
`

export default ({ children }) => (
  <Container>
    <Content>
      {children}

      <ExpoLink href="https://expo.io/@henrikhaugboelle/tawk">
        <ExpoImage />
      </ExpoLink>
    </Content>
  </Container>
)
