import styled from 'styled-components'
import {keyframes} from 'styled-components'
import {motion} from 'framer-motion'
import {Link} from 'react-router-dom'
export const ClientContainer = styled(motion.div)`
    padding: 2rem 1rem;
    /* display: flex; */
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    overflow:hidden;
    @media (min-width: 480px) {
        padding:3rem 2rem ;
    }
    @media (min-width: 768px) {
        padding: 4rem 3rem ;
    }
`





export const ClientWrapper = styled.div`
width: 100%;   
    display: flex;
    flex-direction: column;
    justify-content: center;
    
`


export const HeaderText = styled.h2`
  /* font-family: var(--fontregular);
  font-size: clamp(1rem, 3vw, 5rem); */
  font-size: clamp(1.5rem, 4vw, 5vw);
color: var(--white);
  font-weight: 700;
  color: var(--white);
  text-align: left;
  position: relative;


`

export const ClientGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 1rem;
    width: 100%;
    padding-bottom: 2rem;
    @media (min-width: 428px) {
        grid-template-columns: 1fr 1fr;
        padding-bottom: 2rem;
        grid-gap:2rem;
    }
    @media (min-width: 1024px) {
        grid-template-columns: 1fr 1fr 1fr 1fr;
        padding-bottom: 2rem;
        grid-gap:2rem;
    }

`


export const ClientGridItem = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    position: relative;
    /* margin-bottom: 1rem; */
    /* border-bottom: 1px solid var(--green); */
    /* border: 1px solid var(--green); */
`


export const TextLarge = styled.h3`
    font-family: var(--fontregular);
    font-size: clamp(1rem, 1.3vw, 5rem);
    font-weight: 700;
    color: var(--white);
    text-align: start;
    position: relative;
    line-height: 1.5;
    margin-top:0.5rem;
`

export const TextSmall = styled.p`
    font-family: var(--fontregular);
    font-size: clamp(0.8rem, 0.8vw, 2rem);
    font-weight: 400;
    color: var(--white);
    /* margin-top: 1rem; */
    line-height: 1.5rem;
    letter-spacing: 0.02rem;
    text-align: left;
    position: relative;
    margin-top: 0.5rem;
    /* margin-bottom: 1.5rem; */

`

export const ClientImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    margin-bottom: 1rem;
    
    /* box-shadow: 0px 0px 5px 0px rgba(40, 196, 164, 0.4);
    -webkit-box-shadow: 0px 0px 5px 0px rgba(40, 196, 164, 0.4);
    -moz-box-shadow:0px 0px 5px 0px rgba(40, 196, 164,0.4); */
    transition: all 0.2s ease-in-out;


`



export const ClientsHeader = styled(motion.div)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-bottom: 2rem;
    @media (min-width: 1024px) {
        margin-bottom: 4rem;
    }
    /* height: 100%; */



`

export const ViewAll = styled(Link)`
    font-family: var(--fontregular);
    font-size: clamp(0.6rem, 1vw, 1.2rem);
    font-weight: 700;
    text-transform: capitalize;
    color: var(--white);
    text-align: center;
    text-decoration: none;
    transition: 0.3s all ease-in-out;
    &:hover {
        color: var(--green);
    }
    

   


`

export const CarouselContainer = styled(motion.div)`
display:flex;
flex-direction:column;
justify-content: flex-start;
align-items: flex-start;
margin-top:2rem;
overflow: hidden;

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
width:60vw;
aspect-ratio: 1/1;
padding-right:1rem;

@media (min-width: 480px) {
    width:40vw;
    padding-right:2rem;
}
@media (min-width:768px){
    width:25vw;

}
`

export const CarouselImage = styled.img`
width:100%;
height:100%;
object-fit:cover;
pointer-events:none;
`



export const GalleryWrapper = styled(motion.div)`
  margin-top: 3rem;
  display: grid;
  grid-template-columns: 1fr;
  grid-row-gap: 1rem;
  width: 100%;
  /* padding-bottom: 2rem; */
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    padding-bottom: 2rem;
    grid-gap:2rem;
  }
`;
export const Galleries = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  /* margin-bottom: 1rem; */
  /* border-bottom: 4px solid var(--green); */
  cursor: pointer;
  text-decoration: none;

`;
export const GalleryVideo = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  margin-bottom: 1rem;

  transition: 0.3s all ease-in-out;
  &:hover {
    filter: brightness(0.5);
  }

  @media (min-width: 768px) {
    margin-bottom: 2rem;
  }
`;