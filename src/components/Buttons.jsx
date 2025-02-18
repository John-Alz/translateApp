import React from 'react'
import { useContext } from 'react';
import { TranslateContext } from '../context/TranslateContext';

export const Buttons = ({ isOrigin }) => {

    const [state] = useContext(TranslateContext)

    const readText = () => {
        if (isOrigin === true) {
            const utterance = new SpeechSynthesisUtterance(state.translate);
            speechSynthesis.speak(utterance)
        } else {
            const utterance = new SpeechSynthesisUtterance(state.translated);
            speechSynthesis.speak(utterance)
        }
    }

    const copyText = () => {
        if (isOrigin === true) {
            navigator.clipboard.writeText(state.translate)
            toast.success('copied text')
        } else {
            navigator.clipboard.writeText(state.translated)
            toast.success('copied text')
        }

    }

    return (
        <div className='flex gap-2'>
            <button onClick={readText} className='border-2 border-btns p-2 rounded-lg cursor-pointer'><img src={'/public/sound_max_fill.svg'} alt='sound' /></button>
            <button onClick={copyText} className='border-2 border-btns p-2 rounded-lg cursor-pointer'><img src={'/public/Copy.svg'} alt='sound' /></button>
        </div>
    )
}
