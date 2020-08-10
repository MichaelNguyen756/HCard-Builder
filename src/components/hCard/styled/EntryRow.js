import styled, { css } from 'styled-components';

const EntryRow = styled.div`
    display: flex;
    flex-flow: row nowrap;

    ${({ lineColour }) => css`
        border-bottom: ${lineColour} 1px solid;
    `}
`;

export default EntryRow;
