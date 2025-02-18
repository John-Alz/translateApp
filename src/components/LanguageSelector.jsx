import React from 'react'
import { useState } from 'react';
import { languages } from '../utils/languages';
import { useContext } from 'react';
import { TranslateContext } from '../context/TranslateContext';

export const LanguageSelector = () => {

    const [state, dispatch] = useContext(TranslateContext)

    const [active, setActive] = useState('en');

    const handelSelect = (e) => {
        console.log(e.target.value)
        dispatch({
            type: 'set-languaje-origin',
            payload: e.target.value
        })
    }


    const onActive = (e) => {
        setActive(e.target.value)
    }

    return (
        <div className='w-[95%] flex gap-7 px-2'>
            <button onClick={onActive} value='dt' className={` rounded-xl ${active === 'dt' ? 'bg-btns' : null}`}>Detect Language</button>
            <button onClick={onActive} value='en' className={`py-1 px-2 rounded-xl ${active === 'en' ? 'bg-btns' : null}`}>English</button>
            <button onClick={onActive} value='fr' className={`py-1 px-2 rounded-xl ${active === 'fr' ? 'bg-btns' : null}`}>French</button>
            <select onClick={handelSelect} className='py-1 px-2 rounded-xl w-[105px]'>
                {
                    languages.map(language => (
                        <option className='bg-btns' value={language.code}>{language.name}</option>
                    ))
                }
            </select>
        </div>
    )
}
