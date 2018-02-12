import React from 'react'
import Styled from 'styled-components'

import View from 'components/View'
import Line from 'components/Line'

const WriterUI = Styled.div`
  padding: 1rem;
`

export default ({ children }) => (
  <View>
    <Line />
    <WriterUI>{children}</WriterUI>
  </View>
)
