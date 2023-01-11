import styled from 'styled-components';

export const MenuButtonContainer = styled.div`
width:50%;
display:flex;
align-items: center;
justify-content: flex-end;

position:fixed;
right:1.5rem;
z-index: 130;
@media (min-width: 768px){
    right: 2rem;
}
@media (min-width: 1024px){
    right: 3rem;
}


`


export const MenuButtonIcon = styled.span`
position: fixed;
display: block;
width: 2rem;
height: 15px;
/* background-color: var(--white); */


&::before{
    content: '';
    display: block;
    width: 2rem;
    height: 2px;
    background-color: ${(props) => props.color};
    margin-bottom: 0.2rem;
    
    transition: all 0.3s ease-in-out;

}

&::after{
    content: '';
    display: block;
    width: 2rem;
    height: 2px;
    background-color:  ${(props) => props.color};
    transition: all 0.3s ease-in-out;
}
&.true{
    &::before{
        background-color: var(--white);
        margin: 0;
        /* transform: rotate(-45deg) translateY(0rem) ; */
     
    }
    &::after{
        background-color: var(--white);
        /* transform: rotate(45deg) translateY(0rem) ; */
    
    }


}

`


