import React from 'react'
import { useTranslations } from 'next-intl'
import { assets, serviceData } from '../assets/assets'
import Image from 'next/image'
import { SectionProps } from "../../types/forms";
import { motion } from 'motion/react'

const Services: React.FC<SectionProps> = ({isDarkMode}) => {
    const t = useTranslations('Services')
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            id='services' className='w-full px-[12%] py-10 scroll-mt-20'>
            <motion.h4
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className='text-center mb-2 text-lg font-EB_Garamond'>{t('title')}</motion.h4>
            <motion.h2
                initial={{ y: -20, opacity: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                whileInView={{ y: 0, opacity: 1 }}
                className='text-center text-5xl font-EB_Garamond'>{t('subtitle')}</motion.h2>
            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.5 }}
                className='text-center max-w-2xl mx-auto mt-5 mb-12 font-IBM_Plex_Sans'>
                {t('description')}
            </motion.p>
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.9, duration: 0.6 }}
                className='grid grid-cols-(--grid-cols-auto) gap-6 my-10'>
                {serviceData.map(({ icon, iconDark, titleKey, descriptionKey, link }, index) => (
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.9, duration: 0.6 }}
                        key={index}
                        className='border border-gray-400 rounded-lg px-8 py-12 hover:shadow-black cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 dark:hover:bg-darkHover dark:hover:shadow-white'>
                        <Image src={isDarkMode ? iconDark : icon} alt='' className='w-40 mx-auto' />
                        <h3 className='my-4 font-semibold text-gray-700 font-EB_Garamond dark:text-white'>
                            {t(titleKey)}
                        </h3>
                        <p className='text-gray-600 text-sm font-IBM_Plex_Sans dark:text-white'>
                            {t(descriptionKey)}
                        </p>
                    </motion.div>
                ))
                }
            </motion.div>
        </motion.div>
    )
}

export default Services



