import {createGlobalStyle } from 'styled-components';

import MintSansExtraLight from '../fonts/Mint/MintSansExtraLight.woff';
import MintSansRegular from '../fonts/Mint/MintSansRegular.woff';
import MintSansBold from '../fonts/Mint/MintSansBold.woff';


export const GlobalStyle = createGlobalStyle`
*{
    box-sizing: border-box;
    scroll-behavior: smooth;
}

*, *::before, *::after{
    margin: 0;
    padding: 0;

}



@font-face {
    font-family: 'MintSansBold';
    src: url(${MintSansBold}) format('woff');
    font-weight: normal;
    font-style: normal;
}

@font-face {
    font-family: 'MintSansExtraLight';
    src: url(${MintSansExtraLight}) format('woff');
    font-weight: normal;
    font-style: normal;
}

@font-face {
    font-family: 'MintSansRegular';
    src: url(${MintSansRegular}) format('woff');
    font-weight: normal;
    font-style: normal;
}


body{
    font-family: 'MintSansRegular';
    /* overflow: hidden; */
}

:root{
    
    --black: #000000;
    --grey: #666666;
    --greyLight: #979797;
    --greydark: #1e1e1e;
    --offWhite: #eeeeee;
    --white: #ffffff;
    --green: #28C4A4;

    --fontregular: 'MintSansRegular';
    --fontlight: 'MintSansExtraLight';
    --fontbold: 'MintSansBold';







}
`