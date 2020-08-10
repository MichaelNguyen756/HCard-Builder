import styled, { css } from 'styled-components';

const Label = styled.div`
    flex: 1 1 20%;
    font-size: 0.8rem;

    ${({ fontColour }) => css`
        color: ${fontColour};
    `}
`;

export default Label;
