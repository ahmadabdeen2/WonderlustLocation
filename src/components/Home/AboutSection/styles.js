import styled from 'styled-components';
import {Link} from 'react-router-dom';
export const AboutContainer = styled.div`

display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 1rem;
    height: 80vh;
    @media (min-width: 480px){
        padding: 0 2rem;
    }
    @media (min-width: 768px){
        padding: 0 3rem;
    }






`



export const Text = styled.p`
font-family: var(--fontbook);
font-size: 1rem;
color: var(--black);
position: relative;
width: 75%;


@media (min-width: 480px){
    font-size: 1.2rem;
}
@media (min-width: 768px){
    font-size: 1.4rem;
}
@media (min-width: 1024px){

    font-size: 1.9rem;
    line-height: 3rem;
}


`

export const TextContainer = styled.div`
  display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;


`

export const Triangle = styled.div`

clip-path: polygon(0 0, 100% 100%, 100% 0);
width: 40vh;
height: 20vh;
background-color: var(--black);
position: absolute;
top: 0%;
right: 0;
z-index: 0;
@media (min-width: 480px){
    width: 40vh;
    height: 30vh;
}

`

export const ReadMore = styled(Link)`
font-family: var(--fontbook);
font-size: 2.5rem;
color: var(--black);
position: relative;
width: 75%;
text-decoration: none;
text-align: left;
transition: all 0.3s ease-in-out;


@media (min-width: 480px){

    font-size: 3rem;
}

span{
    transition: all 0.3s ease-in-out;

&:hover{
    color: var(--green);
 font-size: 5rem;
 transform: translateX(0.5rem);

}
}
`