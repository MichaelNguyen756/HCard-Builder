import React from 'react';
import './App.css';
import { ThemeContext, themes } from './context/theme';
import { StateProvider } from './context/state';
import { initialState, Reducer } from './reducers';

import Name from 'components/hCard/Name';
import Address from 'components/hCard/Address';
import Email from 'components/hCard/Email';
import Phone from 'components/hCard/Phone';

// import BuilderSection from 'components/BuilderSection';

// const hCardBuilderWidth = 45;

function App() {
    return (
        <StateProvider initialState={initialState} reducer={Reducer}>
            <ThemeContext.Provider value={themes.default}>
                <div className="App">
                    {/* <BuilderSection sectionWidth={hCardBuilderWidth} /> */}
                    <Name />
                    <Email />
                    <Phone />
                    <Address />
                </div>
            </ThemeContext.Provider>
        </StateProvider>
    );
}

export default App;
