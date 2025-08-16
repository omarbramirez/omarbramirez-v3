import Image from 'next/image'
import React from 'react'
import { useTranslations } from 'next-intl'
import { assets } from '@/src/app/assets/assets'
import { motion } from 'motion/react'

const Header = () => {
    const t = useTranslations('Header')
    return (
        <div id="top" className='w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4 '>
            <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
                className='mt-[8vw]'
            >
                <Image src={assets.profile_img} alt='profile_img' className='rounded-full w-32' />
            </motion.div>
            <motion.h3
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex items-end gap-2 text-xl md:text-2xl mb-3 font-EB_Garamond" >
                {t('greeting')}
            </motion.h3>
            <motion.h1
                initial={{ y: -30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="text-3xl sm:text-6xl lg:text-[66px] font-EB_Garamond">
                {t('punchline')}
            </motion.h1>
            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.7 }}

                className='max-w-2xl mx-auto font-IBM_Plex_Sans'>
                {t('resume')}
            </motion.p>
            <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
                <motion.a
                    initial={{  y: 30, opacity: 0 }}
                    whileInView={{  y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 1 }}
                    href="#contact" className='px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2 dark:bg-transparent'>{t('contact')}<Image src={assets.right_arrow_white} alt='right_arrow_white' className='w-4' /></motion.a>
                <motion.a
                    initial={{  y: 30, opacity: 0  }}
                    whileInView={{  y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 1.1  }} href={t('cv')} download className='px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 bg-white dark:text-black'>{t('my_resume')}<Image src={assets.download_icon} alt='download_icon' className='w-4' /></motion.a>
            </div>
        </div>
    )
}

export default Header
