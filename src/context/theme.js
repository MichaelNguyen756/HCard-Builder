import { createContext, useContext } from 'react';

export const themes = {
    default: {
        fontColour: 'rgb(32, 32, 32)',
        titleColour: 'rgb(44, 62, 80)',
        subTitleColour: 'rgb(176, 184, 188)',
        uploadColour: 'rgb(98, 123, 139)',
        createColour: 'rgb(52, 152, 219)',
        lineColour: 'rgb(219, 224, 226)',
        previewBackgroundColour: 'rgb(225, 228, 231)',
    },
};

export const ThemeContext = createContext(themes.default);

export const useTheme = () => useContext(ThemeContext);
