import React from 'react'
import { useContext } from 'react'
import { TranslateContext } from '../context/TranslateContext'

export const OutputBox = () => {

    const [state] = useContext(TranslateContext)

    return (
        <>
            <form>
                <textarea value={state.translated} className='w-full' rows="4" cols="50">

                </textarea>
                <div className='flex justify-end'>
                    <p>&nbsp;</p>
                </div>
            </form>

            <div className='flex justify-between'>
                <div className='flex gap-2'>
                    <button className='border-2 border-btns p-2 rounded-lg'><img src={'/public/sound_max_fill.svg'} alt='sound' /></button>
                    <button className='border-2 border-btns p-2 rounded-lg'><img src={'/public/Copy.svg'} alt='sound' /></button>
                </div>
            </div>
        </>
    )
}
