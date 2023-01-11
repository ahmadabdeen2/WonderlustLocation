import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export const OurTeamContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-top:5rem;
  margin-bottom:5rem;
  padding: 0 1rem;
  position: relative;
  @media (min-width: 480px) {
    padding: 0 2rem;
    margin-top:3rem;
  }
  @media (min-width: 768px) {
    padding: 0 3rem;
    margin-top:5rem;
  }
`;

export const HeaderText = styled.h2`
  /* font-family: var(--fontregular);
  font-size: clamp(1rem, 3vw, 5rem); */
  font-size: clamp(1.5rem, 4vw, 5vw);
color: var(--white);
  font-weight: 700;
  color: var(--white);
  text-align: center;
  position: relative;

`

  



export const OurTeamWrapper = styled(motion.div)`
  margin-top: 1.5rem;
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
export const OurTeam = styled.a`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  cursor: pointer;
  margin-bottom:2rem;
  text-decoration: none;
  @media (min-width:768px){
    margin-bottom:3rem;
  }

`;
export const OurTeamImage = styled.img`
  width: 100%;
  height: clamp(400px, 500px, 700px);
  object-fit: cover;
  margin-bottom: 1rem;

  transition: 0.3s all ease-in-out;
  &:hover {
    filter: brightness(0.5);
    transform: zoom(200%);
  }

  @media (min-width: 768px) {
    margin-bottom: 2rem;
  }
`;
export const OurTeamName = styled.h1`
  font-family: var(--fontregular);
  font-size: clamp(1.2rem, 1.5rem, 1.8rem);
  font-weight: 700;
  padding-left: 0.1rem;
  color: var(--white);
  text-align: left;

`;





export const OurTeamsHeader = styled(motion.div)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    /* height: 100%; */

`



