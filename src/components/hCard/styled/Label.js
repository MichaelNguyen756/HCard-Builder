import styled, { css } from 'styled-components';

const Label = styled.div`
    font-size: 0.6rem;
    font-weight: 600;
    display: flex;
    justify-content:flex-start;
    align-items:flex-end;

    ${({ fontColour }) => css`
        color: ${fontColour};
    `}

    flex: ${({ isBottomRow }) => (isBottomRow ? '2 2 20%' : '1 1 20%')}
`;

export default Label;
