import React from 'react';

import StyledBuilderSection from './styled/BuilderSection';
import PersonalDetialsSection from './PersonalDetailsSection';
import AddressDetailsSection from './AddressDetailsSection';

import Title from './Title';
import ButtonSection from './ButtonSection';

function BuilderSection({ sectionWidth }) {
    return (
        <StyledBuilderSection sectionwidth={sectionWidth}>
            <Title>hCard Builder</Title>
            <PersonalDetialsSection />
            <AddressDetailsSection />
            <ButtonSection />
        </StyledBuilderSection>
    );
}

export default BuilderSection;
