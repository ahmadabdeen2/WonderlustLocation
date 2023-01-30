import React from 'react'
import {HeroContainer, MainTextContainer, Heading, Description, Arrow, Underline,  HeroSubContainer} from './styles'
import {arrow} from '../../../assets'



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
</HeroSubContainer>
<Arrow src={arrow} alt="arrow"/>
    </HeroContainer>
</>
  )
}

export default Hero