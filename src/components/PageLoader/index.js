import React from 'react'
import Styled from 'styled-components'

import Loader from 'components/Loader'

const Positioner = Styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 3rem;
`

export default ({ variant }) => (
  <Positioner>
    <Loader variant={variant} />
  </Positioner>
)
