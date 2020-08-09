import styled, { css } from 'styled-components';

const Title = styled.h1`
    ${({ fontColour }) => css`
        color: ${fontColour};
    `}
`;

export default Title;
