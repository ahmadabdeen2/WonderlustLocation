import styled from "styled-components";
import { motion } from "framer-motion";
import { LazyLoadImage } from "react-lazy-load-image-component";
export const ClientContainer = styled(motion.div)`
  padding: 2rem 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  overflow: hidden;
  @media (min-width: 480px) {
    padding: 3rem 2rem;
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
  margin-top: 0.5rem;
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
  margin-bottom: 3rem;
`;

export const CarouselInner = styled(motion.div)`
  width: 60vw;
  aspect-ratio: 1/1;
  padding-right: 1rem;

  @media (min-width: 480px) {
    width: 40vw;
    padding-right: 2rem;
  }
  @media (min-width: 768px) {
    width: 25vw;
  }
`;

export const CarouselImage = styled(LazyLoadImage)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  pointer-events: none;
`;
