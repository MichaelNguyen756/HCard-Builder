import React from 'react';

import { useTheme } from 'context/theme';

import StyledName from './styled/Name';

function Name() {
    const { titleColour } = useTheme();

    return (
        <StyledName className="n" backgroundColour={titleColour}>
            <span className="given-name">Michael</span>
            &nbsp;
            <span className="family-name">Nguyen</span>
        </StyledName>
    );
}

export default Name;
