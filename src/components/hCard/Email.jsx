import React from 'react';
import { useTheme } from 'context/theme';
import { useStateValue } from 'context/state';

import StyledEntryRow from './styled/EntryRow';
import Entry from './Entry';

function Email() {
    const { lineColour } = useTheme();
    const [state] = useStateValue();
    const { Email } = state;
    return (
        <StyledEntryRow className="email" lineColour={lineColour}>
            <Entry label="EMAIL" value={Email} />
        </StyledEntryRow>
    );
}

export default Email;
