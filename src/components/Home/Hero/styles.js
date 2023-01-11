import styled from 'styled-components';
import {homescreenhero, earth, symbol} from '../../../assets'
import {keyframes} from 'styled-components'
export const HeroContainer = styled.div`
/* height:80vh; */
width:100%;
display:flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 1rem 0;
height: 90vh;
@media (min-width: 1000px){
    height: 90vh;
    background: url(${earth});
background-size: 35%;
background-position-x:95%;
background-position-y: 50%;
background-repeat: no-repeat;
    
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
    /* position: absolute; */
  
    width: 80%;
    height: 80%;
    /* margin-right: 10rem; */
    /* transform: translate(-50%, -50%); */
    
    /* animation: ${spin} 10s linear infinite; */
    z-index: -10;
    /* flex: 0.5; */
    /* position: absolute; */
    
      
        `



export const MainTextContainer = styled.div`

height:100%;
width:100%;
display:flex;
color: var(--white);
flex-direction: column;
justify-content: center;
align-items: flex-start;
padding: 0 1rem;
/* flex: 1; */
@media (min-width: 480px){
    padding: 0 2rem;

}
@media (min-width: 768px){
 
    padding: 0 3rem;
}


`

export const HeroSubContainer = styled.div`

height:100%;
width:100%;
display:flex;
color: var(--white);

justify-content: center;
align-items: center;


`
export const Heading = styled.h1`
font-family: var(--fontbook);
font-weight: 700;
font-size: clamp(1rem, 3.5vw, 5.5rem);


`


export const Description = styled.p`
display: flex;
align-items: center;
justify-content: center;
font-family:var(--fontlight);
/* font-size: clamp(200px, 200px,200px) */
font-size: clamp(0.8rem, 1.5vw, 1.5rem);
/* font-size: calc(8px + 0.390625vw); */
margin-bottom: 0.5rem;

&:before{
    content: "";
    display: block;
    width: 20px;
    height: 1px;
    background: var(--green);
    margin-right: 1rem;

}
@media (min-width: 768px){
    &.before{
        width: 40px;
        height: 1.5px;
    }
}
@media (min-width: 1024px){

    &.before{
        width: 50px;
        height: 2px;
    }
}


`

export const Arrow = styled.img`
padding: 0 1rem;
width: 50px;
height: 50px;
margin-bottom: 5rem;
transition: all 0.3s ease-in-out;
align-self: center;
&:hover{
    cursor: pointer;
    transform: translateY(-0.5rem);
}
@media (min-width: 480px){
align-self: center;
    width: 60px;
    height: 60px;
}
@media (min-width: 768px){
    margin-bottom: 1rem;
    width: 70px;
    height: 70px;

}

`

export const Triangle = styled.div`
clip-path: polygon(0 100%, 100% 0%, 0% 0);
width: 30vh;
height: 20vh;
background-color: #1e1e1e;
position: absolute;
top: 0%;
left: 0;
opacity: 1;
z-index: -1;
@media (min-width: 768px){
    width: 40vh;
    height: 30vh;
}

`

export const Triangle2 = styled.div`
clip-path: polygon(0 100%, 100% 100%, 100% 0);
width: 30vh;
height: 40vh;
background-color: var(--green);
position: absolute;
bottom: 0%;
right: 0;
z-index: -1;
@media (min-width: 768px){
    width: 40vh;
    height: 50vh;
}

`

export const Underline = styled.span`
position: relative;
&:after{
    content: "";
  position: absolute;
  bottom: -15px;
  left: 0;
  /* height: 7px; */
  width: 100%;
  border: solid 3px var(--green);
  border-color: var(--green) transparent transparent transparent;
  border-radius: 50%;
}

`
