import styled from "styled-components";
import { motion } from "framer-motion";
import { LazyLoadImage } from "react-lazy-load-image-component";
import ReactPlayer from "react-player";
export const ClientContainer = styled(motion.div)`
  padding: 4rem 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  overflow: hidden;
  @media (min-width: 480px) {
    padding: 4rem 2rem;
  }
  @media (min-width: 768px) {
    padding: 4rem 3rem;
  }
`;

export const HeaderText = styled.h2`
  font-size: clamp(1.5rem, 4vw, 5vw);
  color: var(--white);
  font-weight: 700;
  color: var(--white);
  text-align: left;
  position: relative;
`;

export const TextLarge = styled.h3`
  font-family: var(--fontregular);
  font-size: clamp(1rem, 1.3vw, 5rem);
  font-weight: 700;
  color: var(--white);
  text-align: start;
  position: relative;
  line-height: 1.5;
  margin-top: 1rem;
`;

export const CarouselContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-top: 2rem;
  overflow: hidden;
`;

export const Carousel = styled(motion.div)`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  padding-bottom:7rem;
  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    overflow: hidden;
  }
  
`;

export const CarouselInner = styled(motion.div)`
  padding-right: 4rem;
  padding-bottom: 3rem;
  /* width:30vw; */
  overflow-x: hidden;
    /* height: auto; */


`;

export const CarouselImage = styled(LazyLoadImage)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  pointer-events: none;
`;

export const CarouselVideo = styled(ReactPlayer)`
  width: '90vw';
  height: 200px;
  @media (min-width: 768px) {
    width: 640px;
    height: 360px;
  }
    object-fit: cover;
    /* pointer-events: none; */

`;



