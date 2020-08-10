import {
    UPDATE_GIVEN_NAME,
    UPDATE_SURNAME,
    UPDATE_EMAIL,
    UPDATE_PHONE,
    UPDATE_HOUSE_NAME,
    UPDATE_STREET,
    UPDATE_SUBURB,
    UPDATE_STATE,
    UPDATE_POSTCODE,
    UPDATE_COUNTRY,
} from './actions';

export const initialState = {
    GivenName: '',
    Surname: '',
    Email: '',
    Phone: '',
    HouseName: '',
    Street: '',
    Suburb: '',
    State: '',
    Postcode: '',
    Country: '',
};

export function Reducer(state = initialState, action) {
    //  Doing destructuring here to be explicit in the parameters about state and action
    const { type, payload } = action;
    switch (type) {
        case UPDATE_GIVEN_NAME:
            return Object.assign({}, state, { GivenName: payload });
        case UPDATE_SURNAME:
            return Object.assign({}, state, { Surname: payload });
        case UPDATE_EMAIL:
            return Object.assign({}, state, { Email: payload });
        case UPDATE_PHONE:
            return Object.assign({}, state, { Phone: payload });
        case UPDATE_HOUSE_NAME:
            return Object.assign({}, state, { HouseName: payload });
        case UPDATE_STREET:
            return Object.assign({}, state, { Street: payload });
        case UPDATE_SUBURB:
            return Object.assign({}, state, { Suburb: payload });
        case UPDATE_STATE:
            return Object.assign({}, state, { State: payload });
        case UPDATE_POSTCODE:
            return Object.assign({}, state, { Postcode: payload });
        case UPDATE_COUNTRY:
            return Object.assign({}, state, { Country: payload });
        default:
            return state;
    }
}
