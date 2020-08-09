import styled, { css } from 'styled-components';

const Input = styled.input`
    ${({ fontColour }) => css`
        color: ${fontColour};
    `}

    font-size: 1.2rem;
`;

export default Input;
