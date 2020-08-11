import React from 'react';
import { useStateValue } from 'context/state';
import Space from 'components/Space';
import StyledName from './styled/Name';

function Name() {
    const [state] = useStateValue();
    const { GivenName, Surname } = state;

    return (
        <StyledName className="n">
            <span className="given-name">{GivenName}</span>
            <Space />
            <span className="family-name">{Surname}</span>
        </StyledName>
    );
}

export default Name;
