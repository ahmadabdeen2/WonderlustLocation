import React from 'react'
import {HeroContainer, MainTextContainer, Heading, Description, Arrow, Triangle, Triangle2, Underline, SpinningTriangle, HeroSubContainer} from './styles'
import {arrow, arrow2, homescreenhero, earth} from '../../../assets'



const Hero = () => {
  return (
    <>
    <HeroContainer>
      <HeroSubContainer>
<MainTextContainer>
    <Description>
        Hello There, We are Wonderlust!
    </Description>
    <Heading>Location Management Agency <br/>
based in <Underline> Riyadh, Saudi Arabia. </Underline>
</Heading>
</MainTextContainer>
{/* <SpinningTriangle src={earth} alt="triangle"/> */}
</HeroSubContainer>
<Arrow src={arrow} alt="arrow"/>
{/* <Triangle2/> */}
{/* <Triangle/> */}
    </HeroContainer>
</>
  )
}

export default Hero