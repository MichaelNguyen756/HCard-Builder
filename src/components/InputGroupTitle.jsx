import React, { useContext } from 'react';
import { ThemeContext } from 'theme';

import StyledInputGroupTitle from './styled/InputGroupTitle';

function InputGroupTitle({ children }) {
    const { subTitleColour } = useContext(ThemeContext);
    return (
        <StyledInputGroupTitle colour={subTitleColour}>
            {children}
        </StyledInputGroupTitle>
    );
}

export default InputGroupTitle;
