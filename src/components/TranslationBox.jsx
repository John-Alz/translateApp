import { useContext } from 'react'
import { TranslateContext } from '../context/TranslateContext'
import { useState } from 'react';
import { Buttons } from './Buttons';


export const TranslationBox = () => {


    const [state, dispatch] = useContext(TranslateContext);

    const [words, setWords] = useState(state.translate);
    const [wordsLength, setWordsLength] = useState(state.translate.length);

    const handleChange = (e) => {
        console.log(e.key);
        setWords(e.target.value)
        setWordsLength(wordsLength + 1)
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
                <textarea value={words} onChange={handleChange} className='w-full' maxLength={500} rows="5" cols="50">
                </textarea>
                <div className='flex justify-end'>
                    <p>{wordsLength}/500</p>
                </div>
            </form>

            <div className='flex justify-between'>
                <Buttons isOrigin={true} />
                <button onClick={handleClick} className='bg-blueV1 flex border border-blueV2 py-2 px-4 rounded-2xl cursor-pointer items-center'><img className='w-[15px] md:w-[20px]' src={'/Sort_alfa.svg'} alt='Alpha' />Translate</button>
            </div>
        </>
    )
}
