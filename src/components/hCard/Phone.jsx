import React from 'react';
import { useTheme } from 'context/theme';
import { useStateValue } from 'context/state';
import StyledEntryRow from './styled/EntryRow';
import Entry from './Entry';

function Phone() {
    const { lineColour } = useTheme();
    const [state] = useStateValue();
    const { Phone } = state;
    return (
        <StyledEntryRow className="tel" lineColour={lineColour}>
            <Entry label="PHONE" value={Phone} />
        </StyledEntryRow>
    );
}

export default Phone;
