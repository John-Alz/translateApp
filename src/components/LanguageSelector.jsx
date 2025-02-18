import React from 'react'
import { useState } from 'react';
import { languages } from '../utils/languages';
import { useContext } from 'react';
import { TranslateContext } from '../context/TranslateContext';

export const LanguageSelector = ({ flag }) => {

    const [state, dispatch] = useContext(TranslateContext)

    const { languageOrigin, languageTarget } = state;
    const selectedLang = flag ? languageOrigin : languageTarget;


    const handelSelect = (e) => {
        const selectedLang = e.target.value;
        dispatch({
            type: flag ? 'set-languaje-origin' : 'set-languaje-target',
            payload: selectedLang
        })
    }

    return (
        <div className='flex justify-between '>
            <div className={` flex justify-between gap-2 md:gap-7 ${flag && 'flex-wrap'} `}>
                {
                    flag === true && <button onClick={handelSelect} value='autodetect' className={`px-1 rounded-xl cursor-pointer ${languageOrigin === 'autodetect' ? 'bg-btns' : null}`}>Detect Language</button>
                }
                {
                    ['en', 'fr'].map((lang) => (
                        <button onClick={handelSelect} value={lang} className={`py-1 px-2 rounded-xl cursor-pointer ${selectedLang === lang ? 'bg-btns' : ''}`}>{lang === "en" ? 'English' : 'French'}</button>
                    ))
                }

                <select onClick={handelSelect} className={`py-1 px-2 rounded-xl cursor-pointer w-[105px] ${languages.some(({ code }) => code === selectedLang) ? "bg-btns" : ""
                    }`}>
                    {
                        languages.map(language => (
                            <option key={language.name} className='bg-btns' value={language.code}>{language.name}</option>
                        ))
                    }
                </select>
            </div>
            {/* {
                flag === false && <img className='border-2 border-btns p-2 rounded-lg cursor-pointer' src={'/Horizontal_top_left_main.svg'} alt='copyLogo' />
            } */}
        </div>
    )
}
