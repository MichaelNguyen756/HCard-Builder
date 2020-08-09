import React, { useContext } from 'react';
import { ThemeContext } from 'theme';

import StyledTitle from './styled/Title';

function Title({ children }) {
    const { titleColour } = useContext(ThemeContext);
    return <StyledTitle fontColour={titleColour}>{children}</StyledTitle>;
}

export default Title;
