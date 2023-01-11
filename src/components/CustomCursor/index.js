import {useRef, useState, useEffect} from 'react'
import React from 'react'
import {CursorContainer, CursorText} from './styles'
import {motion} from 'framer-motion'
import useMouse from '@react-hook/mouse-position'
import { CursorContext } from './CursorManager';
import {project} from '../../assets'
const Cursor = () => {
    const{cursorVariant, cursorText, setCursorVariant} = React.useContext(CursorContext);
    const [mouseY, setMouseY] = useState(0);
    const [mouseX, setMouseX] = useState(0);
    const isDesktop = window.innerWidth > 768;
    const onMouseMove = (e) => {
        setMouseX(e.clientX);
        setMouseY(e.clientY);
        // setCursorVariant('default')

    };

    useEffect(() => {
        // get media size 
       
        document.addEventListener("mousemove", onMouseMove);

        return () => {
            document.removeEventListener("mousemove", onMouseMove);

        };
    }, []);

  
  
 
    const spring = {
      type: "spring",
      stiffness: 100,
      
    };


  const variants = isDesktop && {
    zero:{
        opacity: 0,
    },
    default: {
      opacity: 1,
      height: 10,
      width: 10,
      fontSize: "16px",
      backgroundColor: "#28c4a4",
        borderRadius: "50%",
      x: mouseX,
      y: mouseY,
      position: "fixed",
        pointerEvents: "none",
        zIndex: 1000000,
      transition: {
        type: "spring",
        mass: 0.6
      }
    },
    project: {
      opacity: 1,
      backgroundColor: "#fff",
      color: "#000",  
      height: 80,
      width: 80,
      fontSize: "16px",
      x: mouseX - 32,
      y: mouseY - 32,
      borderRadius: "50%",
      position: "fixed",
    

     pointerEvents: "none",
     zIndex: 1000000,
    },
    drag: {
      opacity: 1,
      backgroundColor: "#28c4a4",
      color: "#fff",  
      height: 80,
      width: 80,
      fontSize: "16px",
      x: mouseX - 32,
      y: mouseY - 32,
      borderRadius: "50%",
      position: "fixed",
      // cursor:"pointer",
    

     pointerEvents: "none",
     zIndex: 1000000,
    },
    Navbar:{
      opacity: 1,
      height: 30,
      width: 30,
      fontSize: "16px",
      backgroundColor: "#fff",
        borderRadius: "50%",
      x: mouseX,
      y: mouseY,
      position: "fixed",
        pointerEvents: "none",
        zIndex: 1000000,
      transition: {
        type: "spring",
        mass: 0.6
      }
    }

  };


    return(
        <>

        <CursorContainer 
        variants = {variants}
        animate = {cursorVariant}
        transition = {spring}
        

        >
                <CursorText >{cursorText}</CursorText>
            </CursorContainer>
            

       
        {/* <div ref ={dot} className='cursor-dot'></div> */}
    </>
    )
}

export default Cursor