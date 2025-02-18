import React from 'react'
import { useState } from 'react';
import { languages } from '../utils/languages';
import { useContext } from 'react';
import { TranslateContext } from '../context/TranslateContext';

export const LanguageSelector = ({ showDetected }) => {

    const [state, dispatch] = useContext(TranslateContext)

    const [active, setActive] = useState('en');

    const handelSelect = (e) => {
        console.log(e.target.value);
        console.log(e.target.value)
        setActive(e.target.value)
        dispatch({
            type: 'set-languaje-origin',
            payload: e.target.value
        })
    }

    return (
        <div className='w-[95%] flex gap-7 px-2'>
            {
                showDetected === true && <button onClick={handelSelect} value='dt' className={` rounded-xl ${active === 'dt' ? 'bg-btns' : null}`}>Detect Language</button>
            }
            <button onClick={handelSelect} value='en' className={`py-1 px-2 rounded-xl ${active === 'en' ? 'bg-btns' : null}`}>English</button>
            <button onClick={handelSelect} value='fr' className={`py-1 px-2 rounded-xl ${active === 'fr' ? 'bg-btns' : null}`}>French</button>
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
