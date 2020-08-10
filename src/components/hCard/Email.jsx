import React, { useContext } from 'react';
import { ThemeContext } from 'theme';

import StyledEntryRow from './styled/EntryRow';
import Entry from './Entry';

function Email() {
    const { lineColour } = useContext(ThemeContext);
    return (
        <StyledEntryRow className="email" lineColour={lineColour}>
            <Entry label="EMAIL" value="michael.nguyen@gmail.com" />
        </StyledEntryRow>
    );
}

export default Email;
