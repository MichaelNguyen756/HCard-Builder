import React from 'react';
import './App.css';
import { ThemeContext, themes } from './theme';
// import InputField from 'components/InputField';
// import InputGroupTitle from 'components/InputGroupTitle';
// import Title from 'components/Title';
// import UploadButton from 'components/UploadButton';
// import CreateButton from 'components/CreateButton';

// const hCardBuilderWidth = 45;

function App() {
    return (
        <ThemeContext.Provider value={themes.default}>
            <div className="App">
                {/* <InputField id="givenName" placeHolder="Given Name">
                    GIVEN NAME
                </InputField> */}

                {/* <InputGroupTitle>PERSONAL DETAILS</InputGroupTitle> */}
                {/* <Title>hCard Builder</Title> */}
            </div>
        </ThemeContext.Provider>
    );
}

export default App;
