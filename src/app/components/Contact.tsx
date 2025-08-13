import React, { useState, useEffect } from 'react'
import { useTranslations } from 'next-intl'
import { assets } from '../assets/assets'
import Image from 'next/image'
// npm install react-hook-form @web3forms/react
import { useForm } from "react-hook-form";
import useWeb3Forms from "@web3forms/react";

const Contact = () => {
    const t = useTranslations('Contact');
    const {register, reset, handleSubmit} = useForm();

  const [isSuccess, setIsSuccess] = useState(false);
  const [result, setResult] = useState(null);

  return (
    <div id='contact' className='w-full px-[12%] py-10 scroll-mt-20'>
            <h4 className='text-center mb-2 text-lg font-EB_Garamond'>{t('title')}</h4>
            <h2 className='text-center text-5xl font-EB_Garamond'>{t('subtitle')}</h2>
            <p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-IBM_Plex_Sans'>
                {t('description')}
            </p>

            <form className='max-w-2xl mx-auto'>
              <div className='grid grid-cols-(--grid-cols-auto) gap-6 mt-10 mb-8'>
              <input type="text" placeholder={t('form.name')} required  className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white'/>
                <input type="text" placeholder={t('form.email')} required  className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white'/>
              </div>
              <textarea rows={6}  placeholder={t('form.message')} required  className='w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white'></textarea>

              <button type='submit' className='py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500'>
{t('form.submit')} <Image src={assets.right_arrow_white} alt=''  />
              </button>
            </form>
    </div>
  )
}

export default Contact
