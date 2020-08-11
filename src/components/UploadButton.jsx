import React from 'react';
import { useTheme } from 'context/theme';
import StyledButton from './styled/Button';

function UploadButton() {
    const { uploadColour } = useTheme();
    return (
        <StyledButton
            variant="contained"
            buttoncolour={uploadColour}
            onClick={() =>
                alert(
                    'You tried to upload an avatar picture, but nothing happened...',
                )
            }
        >
            Upload Avatar
        </StyledButton>
    );
}

export default UploadButton;
