import styled, { css } from 'styled-components';

const spacingToUse = '0.6rem';
const Body = styled.div`
    height: 25%;
    position: absolute;
    bottom: ${spacingToUse};
    left: ${spacingToUse};
    right: ${spacingToUse};
    border-top-left-radius: 38% 87%;
    border-top-right-radius: 38% 87%;

    ${({ fillColour }) => css`
        background-color: ${fillColour};
    `}
`;

export default Body;
