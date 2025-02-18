import React from 'react'
import { useContext } from 'react'
import { TranslateContext } from '../context/TranslateContext'
import { ToastContainer, toast } from 'react-toastify';
import { Buttons } from './Buttons';

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
                <Buttons />
            </div>
        </>
    )
}
