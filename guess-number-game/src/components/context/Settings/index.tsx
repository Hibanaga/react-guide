import { createContext, useState } from 'react';

export interface ISettingsState {
    minValue: number,
    maxValue: number,
}

const initialState: ISettingsState = {
    minValue: 0,
    maxValue: 100,
};

export const AppContext = createContext({
    settingsState: initialState,
    setSettingsState: (newValue: ISettingsState) => {}
});

export const AppContextProvider = ({ children }) => {
    const [settingsState, setSettingsState] = useState(initialState);

    return (
        <AppContext.Provider value={{ settingsState, setSettingsState }}>
            {children}
        </AppContext.Provider>
    );
};
