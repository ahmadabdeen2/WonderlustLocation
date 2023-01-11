import styled from "styled-components";

import { motion } from "framer-motion";
export const FooterContainer = styled(motion.div)`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  align-items: center;
  /* background: var(--greenZX/); */
  background: #1e1e1e;
 padding: 0 1rem;
  width: 100%;
  height: 100vh;

  @media (min-width: 768px) {
    width: 100%;
    padding: 3rem;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 100vh;
    overflow: hidden;
  }
`;

export const Logo = styled.img`
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;    
    width:5rem;
    padding-bottom: 1rem;
    margin-top: 1rem;
    

    `;




export const Links = styled.ul`
  font-size: clamp(1.5rem, 2vw, 2.5rem);
  display:flex;
  margin-top: 10rem;
  flex-direction:column;
  justify-content: space-between;
  align-items: center;  
    list-style: none;
  @media (min-width: 768px) {
    margin-top: 0;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    list-style: none;
    width:60%;
  }
`;

export const LinkItem = styled.li`
font-family: var(--fontbook);
  a {
    color: var(--white);
    text-decoration: none;
    transition: all 0.3s ease-in-out;
    &:hover {
      color: var(--green);
    }
  }
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  color: var(--white);
  margin-bottom: 1.5rem;

  color: var(--white);
  @media (min-width: 768px) {
  margin-top: 1rem;
  margin-bottom:1rem;
    margin-right: 0;
  }
  &:hover {
    color: var(--green);
  }
`;

export const HeadingContainer = styled.div`
  display: flex;
  flex-direction: column-reverse;
  justify-content: flex-end;
  width: 100%;
  align-items: center;
  padding-top: 1rem;

  @media (min-width: 768px) {
    display: flex;
    flex-direction:row;
    justify-content: space-between;
    align-items: flex-start; 
  }
`;

export const BottomContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  /* border: 1px solid red; */
  padding-bottom: 2rem;

`;
export const Copyright = styled.p`
  width: 100%;
  text-align: center;
  /* padding-top: 1rem; */
  font-family: var(--fontlight);
  -webkit-text-stroke: 0.5px var(--white);
  letter-spacing: 0.03rem;
  font-size: clamp(0.8rem, 1vw, 1rem);
  color: var(--white);
  margin-bottom: 1rem;
  @media (min-width: 768px) {
    width: auto;
    padding-top: 0;
  }
`;




export const Title = styled(motion.h1)`

  color: white;
  font-size:10vw;
  z-index: 1;
  white-space: nowrap;
  border-bottom: 1px solid var(--green);
  padding-bottom: 1rem;
  @media (min-width: 768px) {
    transition: all 1s ease-in-out;
    font-size: 11vw;
  }
  &:hover{
    color: var(--green);
    border-bottom: 1px solid var(--white);
  }
`;
