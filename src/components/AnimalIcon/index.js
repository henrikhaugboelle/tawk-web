import Styled from 'styled-components'

import sprite from 'shared/components/AnimalIcon/icons.png'
import map from 'shared/components/AnimalIcon/map'

export default Styled.i`
  display: block;
  width: 1em;
  height: 1em;
  background-image: url(${sprite});
  background-size: 400% 500%;
  background-position: 
    ${props => map[props.animal][0] * 100 / 3}%
    ${props => map[props.animal][1] * 100 / 4}%
  ;
  background-repeat: no-repeat;
`
