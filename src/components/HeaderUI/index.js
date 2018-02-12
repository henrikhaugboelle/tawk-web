import React from 'react'
import Styled from 'styled-components'

import View from 'components/View'
import Line from 'components/Line'

const HeaderUI = Styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
`

export default ({ children }) => (
  <View>
    <HeaderUI>{children}</HeaderUI>
    <Line />
  </View>
)
