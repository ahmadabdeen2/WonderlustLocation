import styled, { keyframes } from 'styled-components'

import { motion } from 'framer-motion'
export const LoaderMainContainer = styled(motion.div)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* z-index:101010101010; */
    height: 100vh;
`
const spin = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
    `
    export const SpinningTriangle = styled.img`

    width: 34.5vh;
    height: 30vh;
    
    animation: ${spin} 10s linear infinite;
    /* z-index: -1; */
 
      
        `

export const Triangle = styled.img`
/* clip-path: polygon(0 0, 0% 100%, 100% 100%); */
width: 30vh;

`

