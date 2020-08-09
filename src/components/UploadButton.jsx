import React, { useContext } from 'react';
import { ThemeContext } from 'theme';
import StyledButton from './styled/Button';

function UploadButton() {
    const { uploadColour } = useContext(ThemeContext);
    return (
        <StyledButton variant="contained" buttonColour={uploadColour}>
            Upload Avatar
        </StyledButton>
    );
}

export default UploadButton;
