import React from 'react'
import Shruti from './Shruti'
import Shrut from './Shrut'

import styledComponent from 'styled-components'

function Home() {
  return (
    
    <HiIamContainer>

    <Shruti
    title="model X"
    description="test"
    backgroundImg="model-x.jpg"
    
    />
    <Shruti
    title="model Y"
    description="test"
    backgroundImg="model-y.jpg"
    />
    
    <Shrut
    title="model S"
    description="test"
    backgroundImg="model-s.jpg"
    />

    </HiIamContainer>
  )
}

export default Home
const HiIamContainer=styledComponent.div``