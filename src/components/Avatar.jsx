import React from 'react';
import StyledAvatar from './styled/Avatar';

import { useTheme } from 'context/theme';
import Head from './avatarImage/Head';
import Body from './avatarImage/Body';

function Avatar() {
    const { lineColour } = useTheme();
    return (
        <StyledAvatar borderColour={lineColour}>
            <Head />
            <Body />
        </StyledAvatar>
    );
}

export default Avatar;
