import styled, { css } from 'styled-components';

const InputLabel = styled.label`
    align-self: flex-start;
    font-size: 0.8rem;

    ${({ fontColour }) => css`
        color: ${fontColour};
    `}
`;

export default InputLabel;
