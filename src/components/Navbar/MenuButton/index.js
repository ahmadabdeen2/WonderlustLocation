import React, {useContext, useState} from 'react'
import {MenuButtonContainer,MenuButtonIcon} from './styles'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {useEffect} from 'react'
import {CSSRulePlugin} from 'gsap/CSSRulePlugin'
import {CursorContext} from '../../CustomCursor/CursorManager';


import { MenuContext } from '../MenuManager/index';
const MenuButton = () => {
    const {setCursorVariant, setCursorText, NavbarEnter, NavbarLeave} = React.useContext(CursorContext)

    const {open,setOpen} = useContext(MenuContext)
    const [color, setColor] = useState('#28c4a4');
    const handleClick = () => {
        setOpen(!open)
    }
    const changeButtonColorInFooter = () => {
        let footer = document.querySelector('.footer');
        if (window.scrollY > footer.offsetTop - 50) {
            setColor("#fff");
        } else {
            setColor("#28c4a4");
            
        }
    // get full page height 
     let fullPageHeight = document.querySelector('.App').offsetHeight;

    }
    useEffect(() => {
        window.addEventListener('scroll', changeButtonColorInFooter, { passive: true });

        return () => {
            window.removeEventListener('scroll', changeButtonColorInFooter);
        };
        // changeButtonColorInFooter()
    }, [])



  return (
    

    <MenuButtonContainer  className= "button" >
        <MenuButtonIcon className={`${open} buttonInner`} color ={color} onClick={handleClick}  onMouseEnter={NavbarEnter} onMouseLeave={NavbarLeave}  />
    
    </MenuButtonContainer>
    
  )
}

export default MenuButton