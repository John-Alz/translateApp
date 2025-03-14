import React from 'react'
import { useContext } from 'react';
import { TranslateContext } from '../context/TranslateContext';
import { ToastContainer, toast } from 'react-toastify';


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
            <ToastContainer theme="dark" />
            <button onClick={readText} className='border-2 border-btns p-2 rounded-lg cursor-pointer'><img src={'/sound_max_fill.svg'} alt='sound' /></button>
            <button onClick={copyText} className='border-2 border-btns p-2 rounded-lg cursor-pointer'><img src={'/Copy.svg'} alt='sound' /></button>
        </div>
    )
}
