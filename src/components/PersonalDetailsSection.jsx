import React from 'react';

import InputField from './InputField';
import StyledInputFieldRow from './styled/InputFieldRow';
import InputGroupTitle from './InputGroupTitle';
import StyledSection from './styled/DetailsSection';

function PersonalDetailsSection() {
    return (
        <StyledSection>
            <InputGroupTitle>PERSONAL DETAILS</InputGroupTitle>
            <StyledInputFieldRow>
                <InputField id="givenName">GIVEN NAME</InputField>
                <InputField id="surname">SURNAME</InputField>
            </StyledInputFieldRow>
            <StyledInputFieldRow>
                <InputField id="Email">EMAIL</InputField>
                <InputField id="Phone">PHONE</InputField>
            </StyledInputFieldRow>
        </StyledSection>
    );
}

export default PersonalDetailsSection;
