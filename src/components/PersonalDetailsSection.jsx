import React from 'react';

import InputField from './InputField';
import StyledInputFieldRow from './styled/InputFieldRow';
import InputGroupTitle from './InputGroupTitle';
import StyledSection from './styled/DetailsSection';

import {
    UPDATE_GIVEN_NAME,
    UPDATE_SURNAME,
    UPDATE_EMAIL,
    UPDATE_PHONE,
} from 'reducers/actions';

function PersonalDetailsSection() {
    return (
        <StyledSection>
            <InputGroupTitle>PERSONAL DETAILS</InputGroupTitle>
            <StyledInputFieldRow>
                <InputField id="givenName" dispatchType={UPDATE_GIVEN_NAME}>
                    GIVEN NAME
                </InputField>
                <InputField id="surname" dispatchType={UPDATE_SURNAME}>
                    SURNAME
                </InputField>
            </StyledInputFieldRow>
            <StyledInputFieldRow>
                <InputField id="Email" dispatchType={UPDATE_EMAIL} type="email">
                    EMAIL
                </InputField>
                <InputField id="Phone" dispatchType={UPDATE_PHONE} type="tel">
                    PHONE
                </InputField>
            </StyledInputFieldRow>
        </StyledSection>
    );
}

export default PersonalDetailsSection;
