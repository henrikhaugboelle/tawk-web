/* eslint-disable no-unused-expressions */
import { injectGlobal } from 'styled-components'
import { normalize } from 'polished'

import theme from 'shared/theme/index'

injectGlobal`
  ${normalize()}

  html, body {
    height: 100%;
  }

  body {
    background: ${theme.colors.lightGray};
    color: ${theme.colors.text};
    line-height: 1.5;
  }

  #root, main {
    height: 100%;
  }

  *, *:before, *:after {
    box-sizing: border-box;
  }
`

export default theme
