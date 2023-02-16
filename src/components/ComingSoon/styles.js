import styled from 'styled-components';

export const ComingSoonContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 1rem;
    height: 100vh;
    @media (min-width: 480px){
        padding: 0 2rem;
    }
    @media (min-width: 768px){
        padding: 0 3rem;
    }
`

export const Text = styled.p`
    font-family: var(--fontbook);
    font-size: 3vw;
    color: var(--white);
    position: relative;
    width: 75%;
    text-align: center;

    `

