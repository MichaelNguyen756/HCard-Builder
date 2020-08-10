import styled, { css } from 'styled-components';

const Name = styled.div`
    color: rgb(255, 255, 255);
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
    padding: 1rem;
    font-size: 1.5rem;
    flex: 1 1 30%;

    ${({ backgroundColour }) => css`
        background-color: ${backgroundColour};
    `};
`;

export default Name;
