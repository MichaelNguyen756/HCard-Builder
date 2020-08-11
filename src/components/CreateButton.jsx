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
            onClick={() =>
                alert('You tried to create an HCard, but nothing happened...')
            }
        >
            Create hCard
        </StyledButton>
    );
}

export default CreateButton;
