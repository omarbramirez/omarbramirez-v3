import React from 'react'
import { useTranslations } from 'next-intl'
import {assets, infoList} from '@/src/app/assets/assets'
import Image from 'next/image'

const About = () => {
    const t = useTranslations('About')
  return (
    <div id='about' className='w-full px-[12%] py-10 scroll-mt-20'>
      <h4 className='text-center mb-2 text-lg font-EB_Garamond'>{t('introduction')}</h4>
      <h2 className='text-center text-5x1 font-EB_Garamond'>{t('aboutMe')}</h2>
      <div className='flex w-full flex-col lg:flex-row items-center gap-20 my-20'>
        <div className='w-64 sm:w-80 rounded-3xl max-w-none'>
            <Image src={assets.user_image} alt='user' className='w-full rounded-3xl'/>
        </div>
        <div className='flex-1'>
            <p className='mb-10 max-w-2x1 font-IBM_Plex_Sans'>
                {t('description')}
            </p>

            <ul>
                {infoList.map(({icon, iconDark, title, description}, index) => (
                    <li>

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
