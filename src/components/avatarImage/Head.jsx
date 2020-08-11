import React from 'react';
import StyledHead from './styled/Head';
import { useTheme } from 'context/theme';

function Head() {
    const { avatarHead } = useTheme();
    return <StyledHead fillColour={avatarHead} />;
}

export default Head;
