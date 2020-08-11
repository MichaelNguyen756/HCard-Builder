import styled, { css } from 'styled-components';

const HCardPreviewSection = styled.section`
    padding: 1rem 1.1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    box-sizing: border-box;
    width: 60vw;

    ${({ backgroundColour }) => css`
        background-color: ${backgroundColour};
    `}

    @media screen and (min-width: 1024px) {
        width: 55vw;
    }
`;

export default HCardPreviewSection;
