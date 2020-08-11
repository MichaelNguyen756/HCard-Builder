import styled, { css } from 'styled-components';

const Input = styled.input`
    ${({ fontColour }) => css`
        color: ${fontColour};
    `}

    font-size: 0.8rem;
`;

export default Input;
