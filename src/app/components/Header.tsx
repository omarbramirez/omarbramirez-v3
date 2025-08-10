import Image from 'next/image'
import React from 'react'
import { useTranslations } from 'next-intl'
import {assets} from '@/src/app/assets/assets'

const Header = () => {
    const t = useTranslations('Header')
    return (
        <div className='w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4'>
            <div>
                <Image src={assets.profile_img} alt='profile_img' className='rounded-full w-32' />
            </div>
                <h1 className="text-3xl sm:text-4xl lg:text-[66px] font-EB_Garamond" >
                    {t('greeting')}
                </h1>
                <h3 className="flex items-end gap-2 text-xl md:text-2xl mb-3 font-EB_Garamond">
                    {t('punchline')}
                </h3>
                <p className='max-w-2xl mx-auto font-IBM_Plex_Sans'>
                    {t('resume')}
                </p>
                <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
                    <a href="#contact" className='px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2'>{t('contact')}<Image src={assets.right_arrow_white} alt='right_arrow_white' className='w-4'/></a>
                     <a href={t('cv')} download className='px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2'>{t('my_resume') }<Image src={assets.download_icon} alt='download_icon' className='w-4'/></a>
                </div>
        </div>
    )
}

export default Header
