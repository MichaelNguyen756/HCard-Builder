import React from 'react';
import { useTheme } from 'context/theme';

import StyledEntryRow from './styled/EntryRow';
import Entry from './Entry';

function Email() {
    const { lineColour } = useTheme();
    return (
        <StyledEntryRow className="email" lineColour={lineColour}>
            <Entry label="EMAIL" value="michael.nguyen@gmail.com" />
        </StyledEntryRow>
    );
}

export default Email;
