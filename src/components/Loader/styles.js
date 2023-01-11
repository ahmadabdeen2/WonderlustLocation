import styled, { keyframes } from 'styled-components'

import { motion } from 'framer-motion'
export const LoaderMainContainer = styled(motion.div)`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
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
    margin-top:10rem;
    width: 23vh;
    height: 20vh;
    @media (min-width: 480px) {
        width: 34.5vh;
        height:30vh;
    }
    
    
    animation: ${spin} 2s linear infinite;
    /* z-index: -1; */
 
      
        `

export const Triangle = styled.img`
/* clip-path: polygon(0 0, 0% 100%, 100% 100%); */
width: 30vh;

`

