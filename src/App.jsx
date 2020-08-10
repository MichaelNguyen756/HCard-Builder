import React from 'react';
import { ThemeContext, themes } from './context/theme';
import { StateProvider } from './context/state';
import { initialState, Reducer } from './reducers';

import BuilderSection from 'components/BuilderSection';
import HCardPreviewSection from 'components/HCardPreviewSection';
import StyledApp from 'components/styled/App';

function App() {
    return (
        <StateProvider initialState={initialState} reducer={Reducer}>
            <ThemeContext.Provider value={themes.default}>
                <StyledApp>
                    <BuilderSection />
                    <HCardPreviewSection />
                </StyledApp>
            </ThemeContext.Provider>
        </StateProvider>
    );
}

export default App;
