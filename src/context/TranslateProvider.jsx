import React from 'react'
import { TranslateContext } from './TranslateContext'
import { useReducer } from 'react'
import { translateReducer } from '../reducers/translateReducer'

const initialState = {
    translate: 'Hello, how are you?',
    translated: ''
}

export const TranslateProvider = ({ children }) => {

    const [state, dispatch] = useReducer(translateReducer, initialState)

    return (
        <TranslateContext.Provider value={[state, dispatch]}>
            {children}
        </TranslateContext.Provider>
    )
}
