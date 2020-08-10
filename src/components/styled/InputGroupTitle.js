import styled, { css } from 'styled-components';

const InputGroupTitle = styled.div`
    ${({ colour }) => css`
        border-bottom: ${colour} 1px solid;
        color: ${colour};
    `}

    font-size: 0.7rem;
    font-weight: bold;
    text-align: left;
    display: block;
    margin: 1rem 0;
`;

export default InputGroupTitle;
