import React from 'react';

import { useTheme } from 'context/theme';
import StyledEntryRow from './styled/EntryRow';
import StyledLabel from './styled/Label';
import StyledEntry from './styled/Entry';

function Address() {
    const { fontColour, titleColour } = useTheme();
    return (
        <div className="adr">
            <StyledEntryRow>
                <StyledLabel fontColour={titleColour}>ADDRESS</StyledLabel>
                <StyledEntry className="street-address" fontColour={fontColour}>
                    1 MOSELE
                </StyledEntry>
            </StyledEntryRow>
            <StyledEntryRow>
                <StyledLabel />
                <StyledEntry className="locality" fontColour={fontColour}>
                    Carlingford
                </StyledEntry>
                <StyledEntry className="region" fontColour={fontColour}>
                    NSW
                </StyledEntry>
            </StyledEntryRow>
            <StyledEntryRow>
                <StyledLabel fontColour={titleColour}>POSTCODE</StyledLabel>
                <StyledEntry className="postal-code" fontColour={fontColour}>
                    2099
                </StyledEntry>
                <StyledLabel fontColour={titleColour}>COUNTRY</StyledLabel>
                <StyledEntry className="country-name" fontColour={fontColour}>
                    Aus
                </StyledEntry>
            </StyledEntryRow>
        </div>
    );
}

export default Address;
