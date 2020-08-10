import React from 'react';
import { useTheme } from 'context/theme';

import StyledTitle from './styled/Title';

function Title({ children }) {
    const { titleColour } = useTheme();
    return <StyledTitle fontColour={titleColour}>{children}</StyledTitle>;
}

export default Title;
