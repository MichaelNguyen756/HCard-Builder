import React from 'react';
import { useTheme } from 'context/theme';
import StyledButton from './styled/Button';

function CreateButton() {
    const { createColour } = useTheme();
    return (
        <StyledButton
            variant="contained"
            color="primary"
            buttoncolour={createColour}
        >
            Create hCard
        </StyledButton>
    );
}

export default CreateButton;
