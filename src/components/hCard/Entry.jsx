import React, { Fragment, useContext } from 'react';
import { ThemeContext } from 'theme';

import StyledLabel from './styled/Label';
import StyledEntry from './styled/Entry';

function Entry({ label, value }) {
    const { fontColour, titleColour } = useContext(ThemeContext);
    return (
        <Fragment>
            <StyledLabel className="type" fontColour={titleColour}>
                {label}
            </StyledLabel>
            <StyledEntry className="value" fontColour={fontColour}>
                {value}
            </StyledEntry>
        </Fragment>
    );
}

export default Entry;
