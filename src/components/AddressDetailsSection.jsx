import React from 'react';

import InputField from './InputField';
import StyledInputFieldRow from './styled/InputFieldRow';
import InputGroupTitle from './InputGroupTitle';

import StyledSection from './styled/DetailsSection';

import {
    UPDATE_HOUSE_NAME,
    UPDATE_STREET,
    UPDATE_SUBURB,
    UPDATE_STATE,
    UPDATE_POSTCODE,
    UPDATE_COUNTRY,
} from 'reducers/actions';

function AddressDetailsSection() {
    return (
        <StyledSection>
            <InputGroupTitle>ADDRESS</InputGroupTitle>
            <StyledInputFieldRow>
                <InputField id="houseName" dispatchType={UPDATE_HOUSE_NAME}>
                    HOUSE NAME OR #
                </InputField>
                <InputField id="street" dispatchType={UPDATE_STREET}>
                    STREET
                </InputField>
            </StyledInputFieldRow>
            <StyledInputFieldRow>
                <InputField id="suburb" dispatchType={UPDATE_SUBURB}>
                    SUBURB
                </InputField>
                <InputField id="state" dispatchType={UPDATE_STATE}>
                    STATE
                </InputField>
            </StyledInputFieldRow>
            <StyledInputFieldRow>
                <InputField id="postcode" dispatchType={UPDATE_POSTCODE}>
                    POSTCODE
                </InputField>
                <InputField id="country" dispatchType={UPDATE_COUNTRY}>
                    COUNTRY
                </InputField>
            </StyledInputFieldRow>
        </StyledSection>
    );
}

export default AddressDetailsSection;
