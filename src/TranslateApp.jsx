import React from 'react'
import { FormTranslate } from './components/FormTranslate'
import { TranslateProvider } from './context/TranslateProvider'

export const TranslateApp = () => {
    return (
        <div className='bg-back h-screen font-mdsans'>
            <TranslateProvider>
                <FormTranslate />
            </TranslateProvider>
        </div>
    )
}
