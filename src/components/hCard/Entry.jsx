import React, { Fragment } from 'react';
import { useTheme } from 'context/theme';

import StyledLabel from './styled/Label';
import StyledEntry from './styled/Entry';

function Entry({ label, value }) {
    const { fontColour, titleColour } = useTheme();
    return (
        <Fragment>
            <StyledLabel
                className="type"
                fontColour={titleColour}
                isBottomRow={true}
            >
                {label}
            </StyledLabel>
            <StyledEntry
                className="value"
                fontColour={fontColour}
                isBottomRow={true}
            >
                {value}
            </StyledEntry>
        </Fragment>
    );
}

export default Entry;
