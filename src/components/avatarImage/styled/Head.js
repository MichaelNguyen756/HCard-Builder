import styled from 'styled-components';

const width = 62;
const height = 60;
const topHorizontalRadius = 70;
const topVerticalRadius = 61;
const bottomHorizontalRadius = 63;
const bottomVerticalRadius = 63;

const Head = styled.div`
    height: ${height}%;
    width: ${width}%;
    position: absolute;
    left: 50%;
    margin-left: -${width / 2}%;
    top: 19%;
    border-top-left-radius: ${topHorizontalRadius}% ${topVerticalRadius}%;
    border-top-right-radius: ${topHorizontalRadius}% ${topVerticalRadius}%;
    border-bottom-left-radius: ${bottomHorizontalRadius}% ${bottomVerticalRadius}%;
    border-bottom-right-radius: ${bottomHorizontalRadius}% ${bottomVerticalRadius}%;
    z-index: 15;
    background-color: rgb(154, 154, 154);
`;

export default Head;
