import styled, { css } from 'styled-components';

const HCardPreviewSection = styled.section`
    padding: 1rem 1.1rem;
    flex: 11 11 55%;
    display: flex;
    justify-content: center;
    align-items: center;

    ${({ backgroundColour }) => css`
        background-color: ${backgroundColour};
    `}
`;

export default HCardPreviewSection;