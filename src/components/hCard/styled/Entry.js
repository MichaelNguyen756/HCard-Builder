import styled, { css } from 'styled-components';

const Entry = styled.div`
    flex: 4 4 80%;
    text-align: left;

    ${({ fontColour }) => css`
        color: ${fontColour};
    `}
`;

export default Entry;
