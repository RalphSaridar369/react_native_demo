import React, { createContext } from 'react';
export const initialState = {
    LoggedIn: false,
    Usertoken: null,
    UserData: {},
    cart:[]
};

export const MainContext = createContext(initialState);
