import React from 'react'
import {AboutMainContainer, SpinningTriangle, Triangle, Line, Heading} from './styles'
import {triangle} from '../../../assets'
const AboutMain = () => {
  return (
    <AboutMainContainer>
<Heading>Meet Wonderlust</Heading>
        <SpinningTriangle src={triangle} alt="triangle"/>


    </AboutMainContainer>
  )
}

export default AboutMain