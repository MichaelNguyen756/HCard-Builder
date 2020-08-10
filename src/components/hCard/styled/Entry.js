import styled, { css } from 'styled-components';

const Entry = styled.div`
    text-align: left;

    ${({ fontColour }) => css`
        color: ${fontColour};
    `}

    flex: ${({ isBottomRow }) => (isBottomRow ? '3 3 30%' : '4 4 80%')}
`;

export default Entry;
