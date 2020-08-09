import React, { useContext } from 'react';
import { ThemeContext } from 'theme';
import StyledButton from './styled/Button';

function CreateButton() {
    const { createColour } = useContext(ThemeContext);
    return (
        <StyledButton variant="contained" buttonColour={createColour}>
            Create hCard
        </StyledButton>
    );
}

export default CreateButton;