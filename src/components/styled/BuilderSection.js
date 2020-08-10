import styled, { css } from 'styled-components';

const BuilderSection = styled.section`
    ${({ sectionwidth }) => css`
        width: ${sectionwidth}vw;
    `}

    padding: 1rem 0.8rem;
`;

export default BuilderSection;
