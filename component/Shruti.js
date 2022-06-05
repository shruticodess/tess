import React from 'react'
import styledComponent from 'styled-components'
function Shruti({backgroundImg,title,description}) {
  return (
    <Wrap bgImage={backgroundImg}>
        <TeslaTitle>
            <h1>
                {title}
            </h1>
            <p1>
                {description}
            </p1>
        </TeslaTitle>
    </Wrap>
  )
}
export default Shruti
const Wrap=styledComponent.div`
width : 50%;
height :50vh;
background-size:cover;
background-position:center;
background-repeat:no-repeat;
float:left;
display:flex;
flex-direction:column;
justify-content:space-between;
align-item:center;
background-image: ${props=>`url("/images/${props.bgImage}")`}
`
const TeslaTitle=styledComponent.div`
padding-top:.1vh;
text-align:center;
`