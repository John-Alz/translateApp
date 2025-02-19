import { useContext } from 'react'
import { TranslateContext } from '../context/TranslateContext'
import { useState } from 'react';
import { Buttons } from './Buttons';
import { ToastContainer } from 'react-toastify';
import { toast } from 'react-toastify';


export const TranslationBox = () => {


    const [state, dispatch] = useContext(TranslateContext);
    const { translate } = state;

    const [words, setWords] = useState(translate);

    const handleChange = (e) => {
        dispatch({
            type: 'set-translate',
            payload: e.target.value
        })
    }

    const handleClick = (e) => {
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
                <textarea value={translate} onKeyDown={handleChange} onChange={handleChange} className='w-full' maxLength={500} rows="5" cols="50">
                </textarea>
                <div className='flex justify-end'>
                    <p>{translate.length}/500</p>
                </div>
            </form>

            <div className='flex justify-between'>
                <Buttons isOrigin={true} />
                <button onClick={handleClick} className='bg-blueV1 flex border border-blueV2 py-2 px-4 rounded-2xl cursor-pointer items-center'><img className='w-[15px] md:w-[20px]' src={'/Sort_alfa.svg'} alt='Alpha' />Translate</button>
            </div>
        </>
    )
}
