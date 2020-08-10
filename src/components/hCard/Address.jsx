import React from 'react';

import { useTheme } from 'context/theme';
import { useStateValue } from 'context/state';
import StyledEntryRow from './styled/EntryRow';
import StyledLabel from './styled/Label';
import StyledEntry from './styled/Entry';

function Address() {
    const { fontColour, titleColour, lineColour } = useTheme();
    const [state] = useStateValue();
    const {} = state;
    return (
        <div className="adr">
            <StyledEntryRow lineColour={lineColour}>
                <StyledLabel fontColour={titleColour}>ADDRESS</StyledLabel>
                <StyledEntry className="street-address" fontColour={fontColour}>
                    1 MOSELE
                </StyledEntry>
            </StyledEntryRow>
            <StyledEntryRow lineColour={lineColour}>
                <StyledLabel />
                <StyledEntry fontColour={fontColour}>
                    <span className="locality">Carlingford</span>, &nbsp;
                    <span className="region">NSW</span>
                </StyledEntry>
            </StyledEntryRow>
            <StyledEntryRow lineColour={lineColour}>
                <StyledLabel fontColour={titleColour} isBottomRow={true}>
                    POSTCODE
                </StyledLabel>
                <StyledEntry
                    className="postal-code"
                    fontColour={fontColour}
                    isBottomRow={true}
                >
                    2099
                </StyledEntry>
                <StyledLabel fontColour={titleColour} isBottomRow={true}>
                    COUNTRY
                </StyledLabel>
                <StyledEntry
                    className="country-name"
                    fontColour={fontColour}
                    isBottomRow={true}
                >
                    Aus
                </StyledEntry>
            </StyledEntryRow>
        </div>
    );
}

export default Address;
