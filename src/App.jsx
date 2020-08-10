import React from 'react';
import './App.css';
import { ThemeContext, themes } from './theme';
import { StateProvider } from './context';
import { initialState, Reducer } from './reducers/App';
import BuilderSection from 'components/BuilderSection';

const hCardBuilderWidth = 45;

function App() {
    return (
        <StateProvider initialState={initialState} reducer={Reducer}>
            <ThemeContext.Provider value={themes.default}>
                <div className="App">
                    <BuilderSection sectionWidth={hCardBuilderWidth} />
                </div>
            </ThemeContext.Provider>
        </StateProvider>
    );
}

export default App;
