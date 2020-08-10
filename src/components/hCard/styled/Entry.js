import styled, { css } from 'styled-components';

const Entry = styled.div`
    text-align: left;

    ${({ fontColour }) => css`
        color: ${fontColour};
    `}

    flex: ${({ isBottomRow }) => (isBottomRow ? '3 3 30%' : '4 4 80%')};
    height: 1.5rem;
    display:flex;
    align-items:flex-end;
    justify-content: flex-start;
`;

export default Entry;
