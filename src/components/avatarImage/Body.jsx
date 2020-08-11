import React from 'react';
import StyledBody from './styled/Body';
import { useTheme } from 'context/theme';

function Body() {
    const { previewBackgroundColour } = useTheme();
    return <StyledBody fillColour={previewBackgroundColour} />;
}

export default Body;
