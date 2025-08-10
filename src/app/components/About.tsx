import React from 'react'
import { useTranslations } from 'next-intl'
import {assets, infoList} from '@/src/app/assets/assets'
import Image from 'next/image'

const About = () => {
    const t = useTranslations('About')
  return (
    <div id='about' className='w-full px-[12%] py-10 scroll-mt-20'>
      <h4 className='text-center mb-2 text-lg font-EB_Garamond'>{t('introduction')}</h4>
      <h2 className='text-center text-5xl font-EB_Garamond'>{t('aboutMe')}</h2>
      <div className='flex w-full flex-col lg:flex-row items-center gap-20 my-20'>
        <div className='w-64 sm:w-80 rounded-3xl max-w-none'>
            <Image src={assets.user_image} alt='user' className='w-full rounded-3xl'/>
        </div>
        <div className='flex-1'>
            <p className='mb-10 max-w-2xl font-IBM_Plex_Sans'>
                {t('description')}
            </p>

            <ul className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl'>
                {infoList.map(({icon, iconDark, titleKey, descriptionKey}, index) => (
                    <li key={index} className='border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-lg hover:shadow-black'>
                      <Image src={icon} alt={t(titleKey)} className='w-7 mt-3'/>
                      <h3 className='my-4 font-semibold text-gray-700 font-EB_Garamond'>{t(titleKey)}</h3>
                      <p className='text-gray-600 text-sm font-IBM_Plex_Sans'>{t(descriptionKey)}</p>
                    </li>
                ))
                }
            </ul>
        </div>
      </div>
    </div>
  )
}

export default About
