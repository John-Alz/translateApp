import React from 'react'
import { useState } from 'react';
import { languages } from '../utils/languages';
import { useContext } from 'react';
import { TranslateContext } from '../context/TranslateContext';

export const LanguageSelector = ({ flag }) => {

    const [state, dispatch] = useContext(TranslateContext)

    const [active, setActive] = useState('en');

    const handelSelect = (e) => {
        setActive(e.target.value)
        if (flag == true) {
            dispatch({
                type: 'set-languaje-origin',
                payload: e.target.value
            })
        } else {
            dispatch({
                type: 'set-languaje-target',
                payload: e.target.value
            })
        }
    }


    return (
        <div className='w-[95%] flex justify-between'>
            <div className=' flex gap-7 px-2'>
                {
                    flag === true && <button onClick={handelSelect} value='dt' className={` rounded-xl cursor-pointer ${active === 'dt' ? 'bg-btns' : null}`}>Detect Language</button>
                }
                <button onClick={handelSelect} value='en' className={`py-1 px-2 rounded-xl cursor-pointer ${active === 'en' ? 'bg-btns' : null}`}>English</button>
                <button onClick={handelSelect} value='fr' className={`py-1 px-2 rounded-xl cursor-pointer ${active === 'fr' ? 'bg-btns' : null}`}>French</button>
                <select onClick={handelSelect} className='py-1 px-2 rounded-xl cursor-pointer w-[105px]'>
                    {
                        languages.map(language => (
                            <option key={language.name} className='bg-btns' value={language.code}>{language.name}</option>
                        ))
                    }
                </select>
            </div>
            {
                flag === false && <img className='border-2 border-btns p-2 rounded-lg cursor-pointer' src={'/public/Horizontal_top_left_main.svg'} alt='copyLogo' />
            }
        </div>
    )
}
