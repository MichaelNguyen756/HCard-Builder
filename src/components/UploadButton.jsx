import React from 'react';
import { useTheme } from 'context/theme';
import StyledButton from './styled/Button';

function UploadButton() {
    const { uploadColour } = useTheme();
    return (
        <StyledButton variant="contained" buttoncolour={uploadColour}>
            Upload Avatar
        </StyledButton>
    );
}

export default UploadButton;
