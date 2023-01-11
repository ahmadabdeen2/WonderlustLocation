import styled from 'styled-components';
import {motion } from 'framer-motion'
export const CursorContainer = styled(motion.div)`
    display: none;
    @media (min-width: 768px){
        display: block;
        position: fixed;
  z-index: 100;
  display: flex;
  flex-flow: row;
  align-content: center;
  justify-content: center;
  top: 0;
  left: 0;
  height: 10px;
  width: 10px;
  border-radius: 200px;
  pointer-events: none;
  color: #fff;
  text-align: center;
  /* font-size: 20px; */
    }
    `

export const CursorText = styled(motion.div)`
  flex: auto;
  font-size: inherit;
  pointer-events: none;
  margin: auto;

`