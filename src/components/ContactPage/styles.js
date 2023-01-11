import styled from 'styled-components';
import {motion } from 'framer-motion'
export const Heading = styled(motion.h2)`
font-family: var(--fontlight);
font-size: clamp(1.6rem, 3vw, 5rem);
color: var(--white);
z-index: 10;
margin-bottom: 0;


`
export const Heading2 = styled(motion.h2)`
font-family: var(--fontbook);
font-size: clamp(4vw, 7.5vw, 9vw);
color: var(--green);
z-index: 10;
margin-bottom: 0;
margin-top:2rem;
position:relative;
display:flex;
white-space:nowrap;
align-items:center;



`

export const ContactMainContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-top:3rem;
    padding: 0 1rem;
    

    /* position: relative; */
    @media (min-width: 480px){
        padding: 0 2rem;
    }
    @media (min-width: 768px){
        padding: 0 3rem;

    }
    `

    export const SocialsContainer = styled.div`
   display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    width:100%;
    margin-bottom:7rem;
    height: 100%;
    padding-bottom:5rem;
    border-bottom: 1px solid var(--white);
    margin-top:3rem;
    @media (min-width: 768px) {
        display: flex;
        margin-top:5rem;
        flex-direction: row;
    justify-content:space-evenly;
    align-items:flex-start;
    
    }
    

    `

export const Text = styled(motion.p)`
font-size: clamp(1.5rem, 2vw, 2.5vw);
color: var(--white);
text-align: center;
margin-top:1rem;
text-align:left;
/* border: 1px solid var(--white); */

`

export const LocationContainer = styled.div`
display:flex;
flex-direction:column;
height:100%;



`
export const TextSmall = styled(motion.p)`
font-size: clamp(0.8rem, 1.2vw, 2vw);
color: var(--white);


text-align:left;


margin-bottom:0.5rem;
&.true{
    margin-top:3rem;
}
/* border: 1px solid var(--white); */
`

export const SocialsInner = styled.div`
display:flex;
flex-direction:column;
/* justify-content:space-between; */
align-items:flex-start;





height:100%;
`

export const CustomForm = styled.div`
  position: relative;
  width: 90%;
  margin-bottom:5rem;
  @media (min-width: 768px) {
    width:40%;
  }


`

export const CustomInput = styled.input`
 /* font-family: var(--fontlight); */
  width: 100%;
  border: 0;
  border-bottom: 1px solid #c2c2c2;
  outline: 0;
  font-size: 1rem;
  color: var(--white);
  padding:2rem 0 0.5rem 0;
  background: #1e1e1e;
  transition: border-color 0.2s;

  ::placeholder {
    color: #C2C2C2;
  
    }
    /* firstchild */
    &:first-child{
        padding-top:0;
    }
    &:focus {
    padding-bottom: 6px;
    /* font-weight: 700; */
    
            ::placeholder{
                color:transparent;
            }
        }
        -webkit-autofill,
-webkit-autofill:hover, 
-webkit-autofill:focus, 
-webkit-autofill:active{
    -webkit-box-shadow: 0 0 0 30px #1e1e1e inset !important;
    -webkit-background-clip: text;
}


  


`

export const Submit = styled.p`
font-size: clamp(1.2rem, 2.5vw, 4vw);
color: var(--white);
margin-top:2rem;
align-self:flex-end;
justify-self:flex-end;
text-align:right;


`
