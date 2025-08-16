import React from 'react'
import { useTranslations } from 'next-intl'
import { assets, workData } from '../assets/assets'
import Image from 'next/image'
import { SectionProps } from "../../types/forms";
import { motion } from 'motion/react'

const Work: React.FC<SectionProps> = ({ isDarkMode }) => {
    const t = useTranslations('Work')
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            id='work' className='w-full px-[12%] py-10 scroll-mt-20'>
            <motion.h4
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className='text-center mb-2 text-lg font-EB_Garamond'>{t('title')}</motion.h4>
            <motion.h2
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className='text-center text-5xl font-EB_Garamond'>{t('subtitle')}</motion.h2>
            <motion.p 
            initial={{  opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.5 }}
            className='text-center max-w-2xl mx-auto mt-5 mb-12 font-IBM_Plex_Sans'>
                {t('description')}
            </motion.p>
            <motion.div 
            initial={{  opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.9, duration: 0.6 }}
            className='grid grid-cols-(--grid-cols-auto) gap-6 my-10'>
        {workData.map((work) => (
          <div key={work.key} className="border border-gray-400 rounded-lg overflow-hidden shadow dark:hover:bg-darkHover dark:hover:shadow-whiteborder border-gray-400 rounded-lg hover:shadow-black cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 dark:hover:bg-darkHover dark:hover:shadow-white">
            <img src={work.bgImage} alt={t(`projects.${work.key}.title`)} />
            <div className="p-4">
              <h3 className='my-4 font-semibold text-gray-700 font-EB_Garamond dark:text-white'>{t(`projects.${work.key}.title`)}</h3>
              <p className='text-gray-600 text-sm font-IBM_Plex_Sans dark:text-white'>{t(`projects.${work.key}.description`)}</p>
              <a href={work.link} target="_blank" className='text-darkHover text-sm font-IBM_Plex_Sans dark:text-lightHover'>
                {t('show_project')}
              </a>
            </div>
          </div>
        ))}
            </motion.div>
            <motion.a 
            target="_blank"
            initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 1.1, duration: 0.5 }}
            href="https://github.com/omarbramirez?tab=repositories" className='w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full py-3 px-10 mx-auto my-20 hover:bg-lightHover duration-500 dark:text-white dark:border-white dark:hover:bg-darkHover'>
                {t('show_more')} <Image src={isDarkMode ? assets.right_arrow_bold_dark : assets.right_arrow_bold} alt='Right arrow' />
            </motion.a>
        </motion.div>
    )
}

export default Work
