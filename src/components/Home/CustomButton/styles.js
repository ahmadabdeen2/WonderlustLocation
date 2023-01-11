import styled from 'styled-components';
import {Link} from 'react-router-dom'; 
import {motion} from 'framer-motion';
export const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    `

export const Button = styled(Link)`
    font-family: var(--fontbook);
    font-size: 1.5rem;
    padding: 1rem 4rem;
    font-weight: 700;
    color: var(--green);
    text-decoration: none;
    background-color: var(--white);
    border: 1px solid var(--black);
    border-radius: 3rem;
    transition: 0.3s all ease-in-out;
    &:hover{
        color: var(--white);
        background-color: var(--green);
        border: 1px solid var(--green);
        cursor: pointer;
    }

    `

