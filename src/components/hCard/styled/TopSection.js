import styled, { css } from 'styled-components';

const TopSection = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
    padding: 1rem 1rem 0.5rem 1rem;
    /* font-size: 1.5rem; */
    flex: 1 1 30%;

    ${({ backgroundColour }) => css`
        background-color: ${backgroundColour};
    `};
`;

export default TopSection;
