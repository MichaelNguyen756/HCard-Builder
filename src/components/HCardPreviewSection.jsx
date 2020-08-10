import React from 'react';

import { useTheme } from 'context/theme';

import StyledSection from './styled/HCardPreviewSection';
import StyledPreview from './styled/Preview';

import HCard from './hCard/HCard';
import PreviewTitle from './PreviewTitle';

function HCardPreviewSection({ sectionWidth }) {
    const { previewBackgroundColour } = useTheme();
    return (
        <StyledSection
            backgroundColour={previewBackgroundColour}
            sectionWidth={sectionWidth}
        >
            <StyledPreview>
                <PreviewTitle />
                <HCard />
            </StyledPreview>
        </StyledSection>
    );
}

export default HCardPreviewSection;
