import styled from 'styled-components'
import {motion} from 'framer-motion'
export const HowContainer = styled.div`

display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1rem 1rem;
    /* border-bottom:1px solid var(--green); */
    /* height:90vh; */
    @media (min-width: 480px){
        padding: 2rem 2rem;
    }
    @media (min-width: 768px){
        padding: 2rem 3rem;
    }

`

export const Wrapper = styled.div`
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
@media (min-width: 768px){
    flex-direction:row;
justify-content:space-between;
align-items:flex-start;
min-height:100%;
}


`

export const WorkImage = styled(motion.img)`
width:100%;
object-fit:contain;
@media(min-width:768px){
    width:40%;
}

`

export const HeadingText = styled.h3`
/* font-family:(--fontbold); */
font-size: clamp(1.5rem, 4vw, 5vw);
color: var(--white);
/* padding-top:1rem; */

`

export const Paragraph = styled.p`
font-family:var(--fontlight);
font-size: clamp(0.8rem, 1.5vw, 2vw);
/* line-height: 2.5rem; */
margin-top:1rem;
color: var(--white);
@media (min-width:768px){
    margin-top:2rem;
}

`



export const SectionRight = styled.div`
display:flex;
flex-direction:column;
margin-top:2rem;

@media (min-width:768px){
align-self:center;
display:flex;
flex-direction:column;
justify-content:center;
width:50%;
margin-right:2rem;
margin-top:0;
}
@media(min-width:1024px){
    margin-right:4rem;
}


`

export const ReadMore = styled.a`
font-family: var(--fontbook);
margin-top:1rem;
font-size: clamp(1rem, 1.5vw, 2vw);
color: var(--white);
text-decoration: none;
transition: all 0.3s ease-in-out;



&:hover{
    color: var(--green);
 
 /* transform: translateX(1.2rem); */


}

@media (min-width:768px){
    margin-top:2rem;
}
`