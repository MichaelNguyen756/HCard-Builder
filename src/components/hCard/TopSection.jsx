import React from 'react';
import StyledTopSection from './styled/TopSection';

import { useTheme } from 'context/theme';

import Avatar from 'components/Avatar';
import Name from './Name';

function TopSection() {
    const { titleColour } = useTheme();
    return (
        <StyledTopSection backgroundColour={titleColour}>
            <Name />
            <Avatar />
        </StyledTopSection>
    );
}

export default TopSection;
