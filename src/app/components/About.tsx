import React from 'react'
import { useTranslations } from 'next-intl'
import { assets, infoList, toolsData } from '@/src/app/assets/assets'
import Image from 'next/image'
import { SectionProps,AboutMeListProps } from "../../types/forms";
import { motion } from 'motion/react'


const About: React.FC<SectionProps> = ({ isDarkMode }) => {
  const t = useTranslations('About')
  
  return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
      id='aboutMe' className='w-full px-[12%] py-10 scroll-mt-20'>
      <motion.h4
        className='text-center mb-2 text-lg font-EB_Garamond'>{t('title')}</motion.h4>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className='text-center text-5xl font-EB_Garamond'>{t('subtitle')}</motion.h2>
      <motion.div
        className='flex w-full flex-col lg:flex-row items-center gap-20 my-20'>
        <motion.div
          className='flex-1'>
          <p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-IBM_Plex_Sans'>
            {t('description')}
          </p>
          <motion.ul
            className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto'>
            
            
            
            
{infoList.map(({ icon, iconDark, titleKey, listKey }, index) => (
  <li 
    key={index} 
    className='border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover/50'
  >
    <Image src={isDarkMode ? iconDark : icon} alt={t(titleKey)} className='w-7 mt-3' />
    <h3 className='my-4 font-semibold text-gray-700 font-EB_Garamond dark:text-white'>
      {t(titleKey)}
    </h3>

    <ul className='list-disc list-inside text-gray-600 text-sm font-IBM_Plex_Sans dark:text-white space-y-1'>
      {t.raw(listKey).map((item: string, i: number) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  </li>
))}        
          </motion.ul>
          <motion.h4
            className='my-6 text-gray-700 font-EB_Garamond dark:text-white text-center'>{t('technologies')}</motion.h4>
          <motion.ul
            className="flex flex-wrap items-center justify-center gap-3 sm:gap-5 max-w-3xl mx-auto"
          >
            {toolsData.map(({ icon, name }, index) => (
              <motion.li
                key={`tool-${index}`}
                whileHover={{ scale: 1.1 }}
                className="relative group flex items-center justify-center w-14 sm:w-16 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500 hover:bg-lightHover hover:shadow-black dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover/50"
              >
                <Image src={icon} alt={name} className="w-7 sm:w-9" />
                <span className="absolute bottom-full mb-2 px-2 py-1 text-xs text-white bg-black dark:bg-white dark:text-black rounded opacity-0 group-hover:opacity-100 transition duration-300 text-center font-IBM_Plex_Sans">
                  {name}
                </span>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default About
