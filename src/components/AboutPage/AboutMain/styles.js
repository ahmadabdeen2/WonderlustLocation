import styled from 'styled-components';
import {keyframes} from 'styled-components'
export const AboutMainContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 1rem;
    height: 40vh;

    /* position: relative; */
    @media (min-width: 480px){
        padding: 0 2rem;
    }
    @media (min-width: 768px){
        padding: 0 3rem;
        height:50vh;
    }
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
    position: absolute;
    top: 30%;
    left: 70%;

    width: 11.5vh;
    height: 10vh;
    
    transform: translate(-50%, -50%);
    
    animation: ${spin} 10s linear infinite;
    z-index: -1;
    @media (min-width:768px){
        width:23vh;
        height:20vh;
        left:60%;
    }
      
        `



export const Triangle = styled.div`
clip-path: polygon(0 0, 0% 100%, 100% 100%);
width: 30vh;
height: 20vh;
background-color: var(--green);
position: absolute;
bottom: 0%;
left: 0;
opacity: 1;
z-index: -10;
@media (min-width: 768px){
    width: 40vh;
    height: 30vh;
}

`
export const Line = styled.div`
width: 100%;
height: 10px;
background-color: var(--green);
/* margin: 1rem 0; */
position: absolute;
bottom:0;
left: 0;

`

export const Heading = styled.h2`
font-family: var(--fontbook);
font-size: clamp(1.6rem, 4vw, 5rem);
color: var(--white);
z-index: 10;
margin-bottom: 0;




`