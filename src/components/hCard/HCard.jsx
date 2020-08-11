import React from 'react';
import StyledHCard from './styled/HCard';

// import Avatar from 'components/Avatar';
// import Name from './Name';
import TopSection from './TopSection';
import EntryGroup from './EntryGroup';

function HCard() {
    return (
        <StyledHCard className="vcard">
            <TopSection />
            <EntryGroup />
        </StyledHCard>
    );
}

export default HCard;
