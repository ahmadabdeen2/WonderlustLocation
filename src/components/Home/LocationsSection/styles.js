import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export const LocationContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 0 1rem;
  position: relative;
  @media (min-width: 480px) {
    padding: 0 2rem;
  }
  @media (min-width: 768px) {
    padding: 0 3rem;
  }
`;

export const HeaderText = styled.h2`
 font-size: clamp(1.5rem, 4vw, 5vw);
color: var(--white);
  font-weight: 700;
  color: var(--white);
  text-align: center;
  position: relative;

`

  



export const LocationWrapper = styled(motion.div)`
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
export const Location = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  /* margin-bottom: 1rem; */
  /* border-bottom: 4px solid var(--green); */
  cursor: pointer;
  text-decoration: none;

`;
export const LocationImage = styled.img`
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
export const LocationName = styled.h1`
  font-family: var(--fontregular);
  font-size: 1.2rem;
  font-weight: 700;
  padding-left: 0.1rem;
  color: var(--white);
  text-align: left;
  @media (min-width: 320px) {
    font-size: 1.3rem;
  }
  @media (min-width: 480px) {
    font-size: 1.4rem;
  }
  @media (min-width: 768px) {
    font-size: 1.6rem;
  }
  @media (min-width: 1024px) {
    font-size: 1.8rem;
  }
`;

export const Description = styled(motion.p)`
  font-family: var(--fontbook);
  margin-top: 1rem;
  font-size: clamp(0.8rem, 2vw, 3.5rem);
  font-weight: 700;
  text-transform: capitalize;

  color: var(--white);
  text-align: left;
 
`;

export const LocationDescription = styled(motion.p)`
  font-family: var(--fontlight);
  font-size: 0.7rem;
  /* -webkit-text-stroke: 1px var(--black); */
  letter-spacing: 1.5px;
  color: var(--white);
  text-align: left;
  padding-left: 0.1rem;
  margin-top: 0.3rem;
  @media (min-width: 320px) {
    font-size: 0.8rem;
  }

  @media (min-width: 480px) {
    font-size: 0.9rem;
  }
  @media (min-width: 768px) {
    font-size: 1rem;
  }
`;



export const LocationsHeader = styled(motion.div)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
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

export const CTA = styled(motion.div)`

    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 20rem;
    background: var(--green);
    /* border-radius: 5%; */
    border-radius: 5px;
    cursor: pointer;

    transition: 0.3s all ease-in-out;
    &:hover {



        background: var(--white);
        color: var(--green);
        border: 2px solid var(--green);
    }

`

export const CTAheading = styled(motion.h1)`

    font-family: var(--fontregular);
    font-size: clamp(0.6rem, 3vw, 1.2rem);
    font-weight: 700;
    text-transform: capitalize;
    color: var(--white);
    text-align: center;
    text-decoration: none;
    transition: 0.3s all ease-in-out;
`

export const CTAbutton = styled(motion.button)`

    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background: var(--green);
    border-radius: 50%;
    cursor: pointer;
    `


