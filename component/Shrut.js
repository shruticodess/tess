import React from 'react'
import styledComponent from 'styled-components'
function Shrut({backgroundImg,title,description}) {
  return (
    <Wrap bgImage={backgroundImg}>
        <TeslaTitle>
            <h2>
                {title}
            </h2>
            <p>
                {description}
            </p>
        </TeslaTitle>
    </Wrap>
  )
}
export default Shrut
const Wrap=styledComponent.div`
width : 100%;
height :50vh;
background-size:cover;
background-position:center;
background-repeat:no-repeat;
display:flex;
flex-direction:column;
justify-content:space-between;
align-item:center;
background-image: ${props=>`url("/images/${props.bgImage}")`}
`
const TeslaTitle=styledComponent.div`
padding-top:0.00001vh;
text-align:center;
`