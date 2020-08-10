import React from 'react';

import StyledEntryRow from './styled/EntryRow';
import Entry from './Entry';

function Phone() {
    return (
        <StyledEntryRow className="tel">
            <Entry label="PHONE" value="23432323" />
        </StyledEntryRow>
    );
}

export default Phone;
