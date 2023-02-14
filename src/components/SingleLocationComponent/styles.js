import styled from 'styled-components';
import {motion } from 'framer-motion'
export const SingleLocationContainer = styled.div`
    display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  
  
  margin-bottom:3rem;
  position: relative;

  overflow-x: hidden;
  /* @media (min-width: 480px) {
    padding: 8rem 2rem;
  }
  @media (min-width: 768px) {
    padding:8rem 3rem;
  } */

  
    `

export const Heading = styled.h1`
font-family: var(--fontbook);
font-size: clamp(2.3rem, 4vw, 5rem);
color: var(--white);
align-self:center;
z-index: 10;
margin-bottom: 0;
height:60vh;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;


`

export const SubHeading = styled.p`
font-family: var(--fontlight);
font-size: clamp(0.6rem, 1.5vw, 2rem);
color: var(--white);
z-index: 10;
margin-bottom: 1rem;


`
export const LocationThumbnail = styled(motion.img)`
width: 100%;
height: 60vh;
object-fit: cover;
/* margin-top:10rem; */
align-self: center;
overflow-x: hidden;
`

export const DescriptionContainer = styled.div`
display:flex;
flex-direction:column;
align-items: flex-start;
width: 100vw;
margin-top:2rem;
padding: 0 1rem;
@media (min-width: 480px) {
    padding: 0 2rem;
    margin-top:3rem;
}
@media (min-width: 768px) {
    padding: 0 3rem;
    margin-top:4rem;
    
  }


`

export const Description = styled.p`
font-family: var(--fontregular);
font-size: clamp(0.7rem, 1.3vw, 2rem);


width:100%;
color: var(--white);
z-index: 10;
margin-bottom: 1rem;
/* padding-right:; */
@media (min-width: 768px) {
    width:90%;
}


`


export const Details = styled.div`
display:grid;
grid-template-columns: 1fr;

justify-content:space-between;
width:100%;
margin-top:1.5rem;
color: var(--white);
z-index: 10;
padding-right:2rem;
@media (min-width: 480px) {
    grid-template-columns: repeat(2,1fr);
    margin-top:3rem;
}

`
export const DetailsText = styled.p`
font-family: var(--fontregular);
font-size: clamp(0.6rem, 1.1vw, 1.5rem);
color: var(--white);
margin-bottom: 1.2rem;



`

export const CarouselContainer = styled(motion.div)`
display:flex;
flex-direction:column;
justify-content: flex-start;
align-items: flex-start;
margin-top:2rem;
overflow: hidden;
padding: 0 1rem;
@media (min-width: 480px) {
    padding: 0 2rem;
}
@media (min-width: 768px) {
    padding: 0 3rem;
    
  }


`
export const FullScreenCarouselContainer = styled(motion.div)`
display:flex;
flex-direction:column;
justify-content: center;
align-items: flex-start;
overflow: hidden;
position:fixed;
top:0;
width:100%;
height:100%;
background:rgba(0,0,0,0.8);
z-index:100000000;



`

export const Container = styled(motion.div)`
display:flex;
flex-direction:column;
justify-content: flex-start;
align-items: flex-start;
margin-top:6rem;
overflow: hidden;
padding: 0 1rem;
@media (min-width: 480px) {
    padding: 0 2rem;
}
@media (min-width: 768px) {
    padding: 0 3rem;
    
  }

`
export const Carousel = styled(motion.div)`
display:flex;
justify-content: flex-start;
margin-bottom:3rem;

`

export const CarouselInner = styled(motion.div)`
/* height:100vh; */
width:90vw;
padding-right:1rem;
@media (min-width: 480px) {
    width:80vw;
}
@media (min-width: 768px) {
    width: 50vw;;
}
`

export const CarouselImage = styled.img`
width:100%;
height:100%;
object-fit:cover;
pointer-events:none;
transition: all 0.3s ease-in-out;

`


export const HeaderText = styled.h2`
 font-size: clamp(1.2rem, 2.5vw, 5vw);
color: var(--white);
  font-weight: 700;
  color: var(--white);
  text-align: center;
  position: relative;

`

export const FullScreenCarousel = styled(motion.div)`
display:flex;
justify-content: center;
align-items:center;


`

export const FullScreenCarouselInner = styled(motion.div)`
/* height:100%; */
width:100vw;
margin-right:1rem;



`

export const FullScreenCarouselImage = styled.img`
width:100%;
height:100%;
object-fit:contain;
pointer-events:none;
transition: all 0.3s ease-in-out;

`

export const CloseButton = styled(motion.button)`
position:absolute;
top:1rem;
right:3.5rem;
background:transparent;
border:none;
color:var(--white);
font-size:2rem;
z-index:999999999;
`