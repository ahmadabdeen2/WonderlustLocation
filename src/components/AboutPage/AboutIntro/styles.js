import styled from 'styled-components';
import {Link} from 'react-router-dom';
export const AboutIntroContainer = styled.div`

display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 1rem;
    height: 80vh;


    /* position: relative; */
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
color: var(--white);
position: relative;
width: 75%;
/* text-align: center; */

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