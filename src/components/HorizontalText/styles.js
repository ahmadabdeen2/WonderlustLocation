import styled from "styled-components";
import { motion } from "framer-motion";
export const Title = styled(motion.h1)`
  font-family: var(--font-primary);
  color: var(--green);
  font-size: 17vw;
  z-index: 1;
  margin: 0;
  white-space: nowrap;
  margin-top: auto;
  /* overflow: hidden; */
  /* transition: all 2s ease-in-out; */
  @media (min-width: 768px) {
    transition:none;
  }
`;

export const Section = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  padding: 10em 0;
  color: white;
`;