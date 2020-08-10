import React from 'react';

import InputField from './InputField';
import StyledInputFieldRow from './styled/InputFieldRow';
import InputGroupTitle from './InputGroupTitle';

import StyledSection from './styled/DetailsSection';

function AddressDetailsSection() {
    return (
        <StyledSection>
            <InputGroupTitle>ADDRESS</InputGroupTitle>
            <StyledInputFieldRow>
                <InputField id="houseName">HOUSE NAME OR #</InputField>
                <InputField id="street">STREET</InputField>
            </StyledInputFieldRow>
            <StyledInputFieldRow>
                <InputField id="suburb">SUBURB</InputField>
                <InputField id="state">STATE</InputField>
            </StyledInputFieldRow>
            <StyledInputFieldRow>
                <InputField id="postcode">POSTCODE</InputField>
                <InputField id="country">COUNTRY</InputField>
            </StyledInputFieldRow>
        </StyledSection>
    );
}

export default AddressDetailsSection;
