import React from 'react';

import { useTheme } from 'context/theme';

import StyledInputField from './styled/InputField';
import StyledInputLabel from './styled/InputLabel';
import StyledInput from './styled/Input';

import { useStateValue } from 'context/state';

function InputField({ id, dispatchType, children, type }) {
    const { fontColour, titleColour } = useTheme();
    const [, dispatch] = useStateValue();

    function handleChange(event) {
        dispatch({ type: dispatchType, payload: event.target.value });
    }

    return (
        <StyledInputField>
            <StyledInputLabel htmlFor={id} fontColour={titleColour}>
                {children}
            </StyledInputLabel>
            <StyledInput
                id={id}
                fontColour={fontColour}
                onChange={handleChange}
                type={type}
            />
        </StyledInputField>
    );
}

export default InputField;
