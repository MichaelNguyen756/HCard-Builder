import React from 'react';
import './App.css';
import { ThemeContext, themes } from './theme';
// import InputField from 'components/InputField';
// import InputGroupTitle from 'components/InputGroupTitle';

// const hCardBuilderWidth = 45;

function App() {
    return (
        <ThemeContext.Provider value={themes.default}>
            <div className="App">
                {/* <InputField id="givenName" placeHolder="Given Name">
                    GIVEN NAME
                </InputField> */}

                {/* <InputGroupTitle>PERSONAL DETAILS</InputGroupTitle> */}
            </div>
        </ThemeContext.Provider>
    );
}

export default App;
