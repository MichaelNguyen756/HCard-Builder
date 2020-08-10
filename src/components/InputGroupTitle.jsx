import React from 'react';
import { useTheme } from 'context/theme';

import StyledInputGroupTitle from './styled/InputGroupTitle';

function InputGroupTitle({ children }) {
    const { subTitleColour } = useTheme();
    return (
        <StyledInputGroupTitle colour={subTitleColour}>
            {children}
        </StyledInputGroupTitle>
    );
}

export default InputGroupTitle;
