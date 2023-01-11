import {createGlobalStyle } from 'styled-components';
// import RGSlimBlack from '../fonts/Random/RG-SlimBlack.ttf';
import RGSlimBook from '../fonts/Random/RG-SlimBook.ttf';
import RGSpaciousBook from '../fonts/Random/RG-SpaciousBook.ttf';
// import RGSpaciousBold from '../fonts/Random/RG-SpaciousBold.ttf';
import RGStandardBook from '../fonts/Random/RG-StandardBook.ttf';
import RGStandardBold from '../fonts/Random/RG-StandardBold.ttf';
import RGStandardMedium from '../fonts/Random/RG-StandardMedium.ttf';
import RGStandardSemibold from '../fonts/Random/RG-StandardSemibold.ttf';
import MintSansBold from '../fonts/Mint/MintSansBold.otf';
import MintSansExtraLight from '../fonts/Mint/MintSansExtraLight.otf';
import MintSansRegular from '../fonts/Mint/MintSansRegular.otf';



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
    font-family: 'RGSlimBook';
    src: url(${RGSlimBook}) format('truetype');
    font-weight: normal;
    font-style: normal;
}

@font-face {
    font-family: 'RGSpaciousBook';
    src: url(${RGSpaciousBook}) format('truetype');
    font-weight: normal;
    font-style: normal;
}

@font-face {
    font-family: 'RGStandardBook';
    src: url(${RGStandardBook}) format('truetype');
    font-weight: normal;
    font-style: normal;
}

@font-face {
    font-family: 'RGStandardBold';
    src: url(${RGStandardBold}) format('truetype');
    font-weight: normal;
    font-style: normal;
}

@font-face {
    font-family: 'RGStandardMedium';
    src: url(${RGStandardMedium}) format('truetype');
    font-weight: normal;
    font-style: normal;
}

@font-face {
    font-family: 'RGStandardSemibold';
    src: url(${RGStandardSemibold}) format('truetype');
    font-weight: normal;
    font-style: normal;
}

@font-face {
    font-family: 'MintSansBold';
    src: url(${MintSansBold}) format('opentype');
    font-weight: normal;
    font-style: normal;
}

@font-face {
    font-family: 'MintSansExtraLight';
    src: url(${MintSansExtraLight}) format('opentype');
    font-weight: normal;
    font-style: normal;
}

@font-face {
    font-family: 'MintSansRegular';
    src: url(${MintSansRegular}) format('opentype');
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