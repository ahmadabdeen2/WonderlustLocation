import styled  from 'styled-components';

import { motion } from 'framer-motion';
export const WhatWeOfferContainer = styled.div`
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
  font-size: clamp(1.5rem, 4vw, 5vw);
color: var(--white);
  font-weight: 700;
  color: var(--white);
  text-align: center;
  position: relative;

`

export const JobsList = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    margin-top: 2.5rem;
    width: 100%;
    

`


export const Job = styled.div`
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    margin-bottom: 1rem;
    border-bottom: 1px solid var(--green);

`

export const TitleContainer = styled.div`
    display: flex;
    justify-content:space-between;
    align-items: center;
    width: 100%;
    
    `


export const JobTitle = styled.h3`
    font-size: clamp(1rem, 1.3vw, 5rem);
    font-weight: 700;
    color: var(--white);
    margin-bottom: 0.5rem;
`

export const JobDescription = styled(motion.div)`
    font-size: clamp(0.8rem, 1.3vw, 2vw);
    font-weight: 100;
    font-family: var(--fontlight);
    line-height: clamp(1.5rem, 2.5vw, 3vw);
    color: var(--white);
    margin-bottom: 2rem;
`


export const ReadMore = styled.a`
font-family: var(--fontbook);
font-size: 2.5rem;
color: var(--green);
position: relative;
cursor: pointer;
text-decoration: none;

transition: all 0.3s ease-in-out;


@media (min-width: 480px){

    font-size: 3rem;
}

span{
    transition: all 0.3s ease-in-out;


}
`