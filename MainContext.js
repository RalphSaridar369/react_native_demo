import React, { createContext } from 'react';
export const initialState = {
    LoggedIn: false,
    Usertoken: null,
    UserData: {}
};

export const MainContext = createContext(initialState);
