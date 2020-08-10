import React from 'react';

import StyledHCard from './styled/HCard';

import Name from './Name';
import EntryGroup from './EntryGroup';

function HCard() {
    return (
        <StyledHCard className="vcard">
            <Name />
            <EntryGroup />
        </StyledHCard>
    );
}

export default HCard;
