import styled, { css } from 'styled-components';

const Label = styled.div`
    flex: 1 1 20%;
    font-size: 0.8rem;
    text-align: left;

    ${({ fontColour, isBottomRow }) => css`
        color: ${fontColour};

        /* ${isBottomRow} &&
        width: */
    `}
`;

export default Label;
