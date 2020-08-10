import React from 'react';
import StyledEntryGroup from './styled/EntryGroup';

import Address from './Address';
import Email from './Email';
import Phone from './Phone';

function EntryGroup() {
    return (
        <StyledEntryGroup>
            <Email />
            <Phone />
            <Address />
        </StyledEntryGroup>
    );
}

export default EntryGroup;
