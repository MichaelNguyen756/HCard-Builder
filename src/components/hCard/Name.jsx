import React from 'react';

import { useTheme } from 'context/theme';

import StyledName from './styled/Name';

function Name() {
    const { titleColour } = useTheme();

    return (
        <StyledName backgroundColour={titleColour}>Michael Nguyen</StyledName>
    );
}

export default Name;
