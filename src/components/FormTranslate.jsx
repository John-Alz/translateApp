
import { useContext } from 'react';
import { useFetchTranslate } from '../hooks/useFetchTranslate';
import { TranslateContext } from '../context/TranslateContext';
import { useState } from 'react';
import { languages } from '../utils/languages';
import { LanguageSelector } from './LanguageSelector';
import { TranslationBox } from './TranslationBox';
import { OutputBox } from './OutputBox ';

export const FormTranslate = () => {

    const [state, dispatch] = useContext(TranslateContext);


    useFetchTranslate(`https://api.mymemory.translated.net/get?q=${state.translate}&langpair=${state.languageOrigin}|${state.languageTarget}`, dispatch);


    const handelSelectV2 = (e) => {
        console.log(e.target.value)
        dispatch({
            type: 'set-languaje-target',
            payload: e.target.value
        })
    }

    console.log(state);

    return (
        <div className='bg-[url("/hero_img.jpg")] bg-no-repeat bg-contain w-full'>
            <div className='flex gap-6 justify-center items-center text-white h-screen'>
                <div id='box-left' className='w-[560px] flex flex-col gap-5 bg-primary rounded-2xl p-[30px] border-2 border-btns'>
                    <LanguageSelector />

                    <hr className='border-1 border-btns' />

                    <TranslationBox />

                </div>

                <div id='box-right' className='w-[560px] flex flex-col gap-5 bg-primary rounded-2xl p-[30px] border-2 border-btns'>
                    <LanguageSelector />

                    <hr className='border-1 border-btns' />

                    <OutputBox />

                </div>
            </div>
        </div>
    )
}
