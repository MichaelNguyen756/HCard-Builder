import React from 'react';

import { useTheme } from 'context/theme';

import StyledPreviewTitle from './styled/PreviewTitle';

function PreviewTitle() {
    const { previewBackgroundColour, subTitleColour } = useTheme();
    return (
        <StyledPreviewTitle
            backgroundColour={previewBackgroundColour}
            fontColour={subTitleColour}
        >
            HCARD PREVIEW
        </StyledPreviewTitle>
    );
}

export default PreviewTitle;
