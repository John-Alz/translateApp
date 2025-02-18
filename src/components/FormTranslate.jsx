
import { useContext } from 'react';
import { useFetchTranslate } from '../hooks/useFetchTranslate';
import { TranslateContext } from '../context/TranslateContext';
import { LanguageSelector } from './LanguageSelector';
import { TranslationBox } from './TranslationBox';
import { OutputBox } from './OutputBox ';

export const FormTranslate = () => {

    const [state, dispatch] = useContext(TranslateContext);


    useFetchTranslate(`https://api.mymemory.translated.net/get?q=${state.translate}&langpair=${state.languageOrigin}|${state.languageTarget}`, dispatch);


    console.log(state);

    return (
        <div className='bg-[url("/hero_img.jpg")] text-xs md:text-base bg-no-repeat lg:bg-center bg-contain lg:bg-[length:100%_100%] w-full lg:h-[50vh]'>
            <div className='flex flex-col lg:flex-row gap-6 justify-center items-center text-white h-screen'>
                <div id='box-left' className=' w-[95%] md:w-[560px] flex flex-col gap-5 bg-primary rounded-2xl p-[30px] border-2 border-btns'>
                    <LanguageSelector flag={true} />

                    <hr className='border-1 border-btns' />

                    <TranslationBox />

                </div>

                <div id='box-right' className='w-[95%] md:w-[560px] flex flex-col gap-5 bg-primary rounded-2xl p-[30px] border-2 border-btns'>
                    <LanguageSelector flag={false} />

                    <hr className='border-1 border-btns' />

                    <OutputBox />

                </div>
            </div>
        </div>
    )
}
