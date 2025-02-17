import React from 'react'

export const FormTranslate = () => {
    return (
        <div className='bg-[url("/hero_img.jpg")] bg-no-repeat bg-contain w-full'>
            <div className='flex gap-6 justify-center items-center text-white h-screen'>
                <div id='box-left' className='w-[560px] flex flex-col gap-5 bg-primary rounded-2xl p-[30px] border-2 border-btns'>
                    <div className='w-[95%] flex gap-7 px-2'>
                        <button>Detect Language</button>
                        <button className='py-1 px-3 bg-btns rounded-xl'>English</button>
                        <button>French</button>
                        <select>
                            <option>Spanish</option>
                            <option>Spanish</option>
                            <option>Spanish</option>
                            <option>Spanish</option>
                        </select>
                    </div>

                    <hr className='border-1 border-btns' />

                    <form>
                        <textarea className='w-full' id="w3review" name="w3review" rows="4" cols="50">
                            Hello
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
                        <button className='bg-blueV1 flex border border-blueV2 py-2 px-4 rounded-2xl'><img src={'/public/Sort_alfa.svg'} alt='Alpha' />Translate</button>
                    </div>

                </div>

                <div id='box-riight' className='w-[560px] flex flex-col gap-5 bg-primary rounded-2xl p-[30px] border-2 border-btns'>
                    <div className='w-[95%] flex gap-7 px-2'>
                        <button>English</button>
                        <button className='py-1 px-3 bg-btns rounded-xl'>French</button>
                        <select>
                            <option>Spanish</option>
                            <option>Spanish</option>
                            <option>Spanish</option>
                            <option>Spanish</option>
                        </select>
                    </div>

                    <hr className='border-1 border-btns' />

                    <form>
                        <textarea className='w-full' id="w3review" name="w3review" rows="4" cols="50">
                            Bonjour
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

                </div>
            </div>
        </div>
    )
}
