import React, {useState, useEffect} from 'react'
import {useScroll, useTransform,useViewportScroll, useMotionValue, useVelocity, useSpring, AnimatePresence} from 'framer-motion'
import {Title, Section} from './styles'


const HorizontalText = (props) => { 

    // const { scrollYProgress } = useScroll();
    const { scrollYProgress } = useViewportScroll();
//   const scale = useTransform(scrollYProgress, [0, 1], [1, 5]);
    const x = useTransform(scrollYProgress, [0, 1], [props.from, props.to]);
  
  

  
  return (
<AnimatePresence>
    <Section>
        {/* title the moves from right to left when scrolled with framer motion */}
        {/* <Title initial={{x: 1000}} animate={{x: -10}} transition={{duration: 1, delay: 0}} exit = {{x: 1000}}> */}
        <Title style={{x}}>
      {props.text}</Title> 
     </Section>
        </AnimatePresence>
  )
}

export default HorizontalText