import styled, { css } from 'styled-components';

const Name = styled.div`
    height: 200px;
    color: rgb(255, 255, 255);
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
    padding: 1rem;
    font-size: 1.5rem;

    ${({ backgroundColour }) => css`
        background-color: ${backgroundColour};
    `};
`;

export default Name;
