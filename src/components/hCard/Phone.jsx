import React from 'react';
import { useTheme } from 'context/theme';
import StyledEntryRow from './styled/EntryRow';
import Entry from './Entry';

function Phone() {
    const { lineColour } = useTheme();
    return (
        <StyledEntryRow className="tel" lineColour={lineColour}>
            <Entry label="PHONE" value="23432323" />
        </StyledEntryRow>
    );
}

export default Phone;
