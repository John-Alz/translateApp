import { useContext } from 'react'
import { TranslateContext } from '../context/TranslateContext'
import { useState } from 'react';
import { Buttons } from './Buttons';
import { ToastContainer } from 'react-toastify';
import { toast } from 'react-toastify';


export const TranslationBox = () => {


    const [state, dispatch] = useContext(TranslateContext);

    const [words, setWords] = useState(state.translate);

    const handleChange = (e) => {
        setWords(e.target.value)
    }

    const handleClick = () => {

        if (words.length < 1) {
            toast.error('You have to write something')
        } else {
            dispatch({
                type: 'set-translate',
                payload: words
            })
        }

    }



    return (
        <>
            <form>
                <ToastContainer theme="dark" />
                <textarea value={words} onKeyDown={handleChange} onChange={handleChange} className='w-full' maxLength={500} rows="5" cols="50">
                </textarea>
                <div className='flex justify-end'>
                    <p>{words.length}/500</p>
                </div>
            </form>

            <div className='flex justify-between'>
                <Buttons isOrigin={true} />
                <button onClick={handleClick} className='bg-blueV1 flex border border-blueV2 py-2 px-4 rounded-2xl cursor-pointer items-center'><img className='w-[15px] md:w-[20px]' src={'/Sort_alfa.svg'} alt='Alpha' />Translate</button>
            </div>
        </>
    )
}
