import React from 'react';

import StyledInputFieldRow from './styled/InputFieldRow';
import CreateButton from './CreateButton';
import UploadButton from './UploadButton';
import StyledSection from './styled/DetailsSection';

function ButtonSection() {
    return (
        <StyledSection>
            <StyledInputFieldRow>
                <UploadButton />
                <CreateButton />
            </StyledInputFieldRow>
        </StyledSection>
    );
}

export default ButtonSection;
