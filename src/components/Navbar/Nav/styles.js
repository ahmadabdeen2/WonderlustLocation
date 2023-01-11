import styled from 'styled-components';
import {Outlet } from 'react-router-dom';
import {motion } from 'framer-motion'
import {Link} from 'react-router-dom';
export const NavContainer = styled(motion.nav)`
overflow-x: hidden;
/* background: var(); */
background: #1e1e1e;

`;
export const NavLogoContainer = styled(Link)`
    width: 50%;
    display:flex;
    align-items: center;
    justify-content: flex-start;
    cursor: pointer;
    @media (max-width: 768px){
        width: 100%;
        justify-content: flex-start;
    }

`;

export const NavLogo = styled.img`
    cursor: pointer;
    height: 1rem;
    display: flex;
    align-items: center;
    justify-content: flex-start;    
    @media (min-width: 768px){
        height: 1.2rem;
    }

    `;

export const NavWrapper = styled.div`
position:relative;
top:0%;
padding:0 1rem;
display:flex;
justify-content: space-between;
align-items: center;

height:10vh;
max-height: 14vh;
width: 100vw;
@media (min-width: 480px){
    height: 10vh;
    max-height: 10vh;
    padding: 0 2rem;
}
@media (min-width: 768px){
    height: 10vh;
    max-height: 10vh;
    padding: 0 3rem;
}



`
  

    
    
export const AnimationRevealPage = styled(motion.div)`
    position: relative;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    background: var(--black);
    overflow-x: hidden;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: 100%;
    -moz-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%;
    text-size-adjust: 100%;
    -webkit-tap-highlight-color: transparent;
    -webkit-tap-highlight-color: transparent;
    -webkit-tap-highlight-color: transparent;
    -webkit-tap-highlight-color: transparent;
    position:fixed; 
    top:0;
    left:0;

    @media (prefers-reduced-motion: reduce) {
        scroll-behavior: auto;
    }
`;
