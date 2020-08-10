import styled, { css } from 'styled-components';

const PreviewTitle = styled.div`
    ${({ backgroundColour, fontColour }) => css`
        color: ${fontColour};
        background-color: ${backgroundColour};
        padding-bottom: 0.1rem;
        display: flex;
        justify-content: flex-end;
        align-items: flex-end;
    `}
`;

export default PreviewTitle;
