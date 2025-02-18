import React from 'react'
import { useContext } from 'react'
import { TranslateContext } from '../context/TranslateContext'
import { useState } from 'react';

export const TranslationBox = () => {


    const [state, dispatch] = useContext(TranslateContext);

    const [words, setWords] = useState(state.translate);

    const handleChange = (e) => {
        setWords(e.target.value)
    }

    const handleClick = () => {
        dispatch({
            type: 'set-translate',
            payload: words
        })
    }

    return (
        <>
            <form>
                <textarea value={words} onChange={handleChange} className='w-full' id="w3review" name="w3review" rows="4" cols="50">
                </textarea>
                <div className='flex justify-end'>
                    <p>19/500</p>
                </div>
            </form>

            <div className='flex justify-between'>
                <div className='flex gap-2'>
                    <button className='border-2 border-btns px-2 rounded-lg'><img src={'/public/sound_max_fill.svg'} alt='sound' /></button>
                    <button className='border-2 border-btns px-2 rounded-lg'><img src={'/public/Copy.svg'} alt='sound' /></button>
                </div>
                <button onClick={handleClick} className='bg-blueV1 flex border border-blueV2 py-2 px-4 rounded-2xl'><img src={'/public/Sort_alfa.svg'} alt='Alpha' />Translate</button>
            </div>
        </>
    )
}
