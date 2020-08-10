import styled, { css } from 'styled-components';

const Entry = styled.div`
    flex: 4 4 80%;

    ${({ fontColour }) => css`
        color: ${fontColour};
    `}
`;

export default Entry;
