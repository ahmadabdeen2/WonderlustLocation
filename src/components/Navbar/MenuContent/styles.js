import styled from 'styled-components';
import {Link} from 'react-router-dom';
export const MenuContentContainer = styled.div`

position:fixed;

top:0;
border: 1px solid var(--green);
right:0;
background:#1e1e1e;
width:100vw;
height:100vh;
transform: translateX(100%);
transition: 0.5s all ease-in-out;
z-index: 120;

&.true{
    transform: translateX(0%);
}

@media (min-width: 768px){
    width: 40vw;
    height: 100vh;
    transform: translateX(97%);
    transition: 0.5s all ease-in-out;
    z-index: 99;
    border: 2px solid var(--green);
border-radius: 2rem 0 0 2rem;
    &.true{
        transform: translateX(0%);
    }
}

`

export const NavLinksContainer = styled.div`
width:100%;
height:100%;
display:flex;
flex-direction: column;
justify-content: center;
align-items: flex-start;
padding: 0 2rem;
@media (min-width: 480px){
    padding: 0 3rem;

}
@media (min-width: 768px){

    padding: 0 4rem;
}


`

export const NavLinks = styled.ul`

display:flex;
flex-direction: column;
justify-content: flex-start;
width:100%;
align-items: flex-start;
list-style:none;
text-decoration: none;



`
export const ListItem = styled.li`
display:flex;
flex-direction: column;
justify-content: flex-start;
align-items: flex-start;
width:100%;
text-decoration: none;
padding: 1rem 0;


`

export const LinkS = styled(Link)`
font-size: 2rem;
/* font-weight: 700; */
color: var(--white);

text-decoration: none;
cursor: pointer;
transition: 0.3s all ease-in-out;


&:hover{
    color: var(--green);
    transform: scale(1.1);

}
@media (min-width: 480px){
    font-size: 2.5rem;
}
@media (min-width: 768px){
    font-size: 3rem;
}
@media (min-width: 1024px){
    font-size: 3.5rem;
}




`

export const Social = styled.div`
display:flex;
justify-content: space-between;
align-items: center;
margin: 1rem 0;
color: var(--white);
/* font-size: 1.5rem; */
width: 100%;
border-bottom: 2px solid var(--white);
padding-bottom: 1rem;
padding-top: 2rem;



`

export const Text = styled.p`
font-size: 1rem;
font-weight: 700;
color: var(--white);
text-decoration: none;
font-family: var(--fontlight);
cursor: pointer;
/* border: 2px solid red; */
@media (min-width: 480px){
    font-size: 1.2rem;
}
@media (min-width: 768px){
    font-size: 1.3rem;
}
@media (min-width: 1024px){
    font-size: 1.4rem;
}

`

export const StyledIcon = styled.div`
font-size: 1rem;
color: var(--white);
cursor: pointer;
transition: 0.3s all ease-in-out;
&:hover{
    color: var(--green);
    transform: scale(1.1);
}
@media (min-width: 480px){
    font-size: 1.2rem;
}
@media (min-width: 768px){
    font-size: 1.4rem;
}
@media (min-width: 1024px){
    font-size: 1.6rem;
}

`
