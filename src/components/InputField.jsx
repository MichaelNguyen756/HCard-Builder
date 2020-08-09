import React, { useContext } from 'react';

import { ThemeContext } from 'theme';

import StyledInputField from './styled/InputField';
import StyledInputLabel from './styled/InputLabel';
import StyledInput from './styled/Input';

function InputField({ id, children, placeHolder }) {
    const { fontColour, titleColour } = useContext(ThemeContext);
    return (
        <StyledInputField>
            <StyledInputLabel htmlFor={id} fontColour={titleColour}>
                {children}
            </StyledInputLabel>
            <StyledInput
                id={id}
                placeholder={placeHolder}
                fontColour={fontColour}
            />
        </StyledInputField>
    );
}

export default InputField;
