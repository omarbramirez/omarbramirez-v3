import React from 'react'
import { useTranslations } from 'next-intl'
import { assets } from '../assets/assets'
import Image from 'next/image'

const Contact = () => {
    const t = useTranslations('Contact');
    
  return (
    <div id='contact' className='w-full px-[12%] py-10 scroll-mt-20'>
            <h4 className='text-center mb-2 text-lg font-EB_Garamond'>{t('title')}</h4>
            <h2 className='text-center text-5xl font-EB_Garamond'>{t('subtitle')}</h2>
            <p className='text-center max-w-2x1 mx-auto mt-5 mb-12 font-IBM_Plex_Sans'>
                {t('description')}
            </p>
    </div>
  )
}

export default Contact
