import React from 'react';

import { useTheme } from 'context/theme';
import { useStateValue } from 'context/state';
import Space from 'components/Space';
import StyledEntryRow from './styled/EntryRow';
import StyledLabel from './styled/Label';
import StyledEntry from './styled/Entry';

function Address() {
    const { fontColour, titleColour, lineColour } = useTheme();
    const [state] = useStateValue();
    const { HouseName, Street, Suburb, State, Postcode, Country } = state;
    return (
        <div className="adr">
            <StyledEntryRow lineColour={lineColour}>
                <StyledLabel fontColour={titleColour}>ADDRESS</StyledLabel>
                <StyledEntry className="street-address" fontColour={fontColour}>
                    {HouseName} {Street}
                </StyledEntry>
            </StyledEntryRow>
            <StyledEntryRow lineColour={lineColour}>
                <StyledLabel />
                <StyledEntry fontColour={fontColour}>
                    <span className="locality">{Suburb}</span>
                    {Suburb && State && ', '}
                    {Suburb && State && <Space />}
                    <span className="region">{State}</span>
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
                    {Postcode}
                </StyledEntry>
                <StyledLabel fontColour={titleColour} isBottomRow={true}>
                    COUNTRY
                </StyledLabel>
                <StyledEntry
                    className="country-name"
                    fontColour={fontColour}
                    isBottomRow={true}
                >
                    {Country}
                </StyledEntry>
            </StyledEntryRow>
        </div>
    );
}

export default Address;
