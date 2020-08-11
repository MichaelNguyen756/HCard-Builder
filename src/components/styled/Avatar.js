import styled, { css } from 'styled-components';

const Avatar = styled.div`
    height: calc(100% + 1.2rem);
    flex: 2 2 0;
    background-color: rgb(255, 255, 255);
    align-self: flex-start;
    z-index: 5;
    position: relative;
    padding: 0.6rem;

    ${({ borderColour }) => css`
        border: ${borderColour} 1.8px solid;
    `}
`;

export default Avatar;
