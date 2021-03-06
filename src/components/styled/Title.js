import styled, { css } from 'styled-components';

const Title = styled.h1`
    ${({ fontColour }) => css`
        color: ${fontColour};
    `}

    text-align: left;
`;

export default Title;
