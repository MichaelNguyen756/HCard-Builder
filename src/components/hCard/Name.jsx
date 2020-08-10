import React from 'react';

import { useTheme } from 'context/theme';
import { useStateValue } from 'context/state';

import StyledName from './styled/Name';

function Name() {
    const { titleColour } = useTheme();
    const [state] = useStateValue();
    const { GivenName, Surname } = state;

    return (
        <StyledName className="n" backgroundColour={titleColour}>
            <span className="given-name">{GivenName}</span>
            &nbsp;
            <span className="family-name">{Surname}</span>
        </StyledName>
    );
}

export default Name;
