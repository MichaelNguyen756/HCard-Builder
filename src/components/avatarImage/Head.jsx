import React from 'react';
import StyledHead from './styled/Head';
import { useTheme } from 'context/theme';

function Head() {
    const { lineColour } = useTheme();
    return <StyledHead fillColour={lineColour} />;
}

export default Head;
