import React from 'react'
import { useState } from 'react';
import { languages } from '../utils/languages';
import { useContext } from 'react';
import { TranslateContext } from '../context/TranslateContext';

export const LanguageSelector = ({ flag }) => {

    const [state, dispatch] = useContext(TranslateContext)

    const [sourceLang, setSourceLang] = useState("en");
    const [targetLang, setTargetLang] = useState("fr");


    const handelSelect = (e) => {
        if (flag == true) {
            setSourceLang(e.target.value)
            dispatch({
                type: 'set-languaje-origin',
                payload: e.target.value
            })
        } else {
            setTargetLang(e.target.value)
            dispatch({
                type: 'set-languaje-target',
                payload: e.target.value
            })
        }
    }


    return (
        <div className='flex justify-between '>
            <div className={` flex justify-between gap-2 md:gap-7 ${flag && 'flex-wrap'} `}>
                {
                    flag === true && <button onClick={handelSelect} value='autodetect' className={`px-1 rounded-xl cursor-pointer ${sourceLang === 'autodetect' ? 'bg-btns' : null}`}>Detect Language</button>
                }
                <button onClick={handelSelect} value='en' className={`py-1 px-2 rounded-xl cursor-pointer ${flag && sourceLang === 'en' || targetLang === 'en' ? 'bg-btns' : null}`}>English</button>
                <button onClick={handelSelect} value='fr' className={`py-1 px-2 rounded-xl cursor-pointer ${!flag && targetLang === 'fr' || sourceLang === 'fr' ? 'bg-btns' : null}`}>French</button>
                <select onClick={handelSelect} className='py-1 px-2 rounded-xl cursor-pointer w-[105px]'>
                    {
                        languages.map(language => (
                            <option key={language.name} className='bg-btns' value={language.code}>{language.name}</option>
                        ))
                    }
                </select>
            </div>
            {
                flag === false && <img className='border-2 border-btns p-2 rounded-lg cursor-pointer' src={'/Horizontal_top_left_main.svg'} alt='copyLogo' />
            }
        </div>
    )
}
