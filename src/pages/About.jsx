import React, {useLayoutEffect} from 'react'
import {AboutContainer, PageTransition} from './styles'

import {AboutMain, AboutIntro, HorizontalText, HowWork, OurTeamComponent} from '../components';
import WhatWeOffer from '../components/AboutPage/WhatWeOffer';





const About = () => {
  useLayoutEffect(() => {
    window.scrollTo(0,0)
  })
  return (
    <>


    <AboutContainer
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 1.5 }}
    exitTransition={{ duration: 1.5 }}
    
    >
        <AboutMain/>
        <AboutIntro/>
        <HorizontalText text={"Hello There!"} from={100} to={-300}/>
        <HowWork/>
        <WhatWeOffer/>
        <OurTeamComponent/>
    </AboutContainer>
    </>
  )
}

export default About