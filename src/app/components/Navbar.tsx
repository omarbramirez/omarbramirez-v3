import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import {assets} from '@/src/app/assets/assets'
import { useTranslations } from 'next-intl'
import { NavbarProps } from "../../types/forms";

const Navbar: React.FC<NavbarProps>  =({setIsDarkMode, isDarkMode}) => {
  const t = useTranslations('Navbar');
  const sideMenuRef = useRef<HTMLUListElement>(null); 
  const [isScroll, setIsScroll] = useState(false);

const openMenu = () => {
  if (sideMenuRef.current) {
    sideMenuRef.current.style.transform = 'translateX(-16rem)';
  }
};

  const closeMenu =() =>{
     if (sideMenuRef.current) {
    sideMenuRef.current.style.transform = 'translateX(16rem)';
  }
  }

  useEffect(()=>{
    const handleScroll = () =>{
      if(window.scrollY > 50){
        setIsScroll(true);
      } else {
      setIsScroll(false);
      }
    }

    window.addEventListener('scroll', handleScroll);

    handleScroll();

    return () =>{
      window.removeEventListener('scroll', handleScroll);
    }
    console.log(window.scrollY)
  },[])

  return (
<>
<nav className= {`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 ${isScroll ? "bg-white/50 backdrop-blur-lg shadow-sm dark:bg-darkTheme dark:shadow-white/20" : ""}`}>
    <a href="#top">
        <Image src={isDarkMode ? assets.logo_dark : assets.logo} className='w-28 cursor-pointer mr-14' alt='logo'/>
    </a>
<ul className= {`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${isScroll ? "" : "shadow-sm bg-white/50 dark:border dark:border-white/50 dark:bg-transparent"}`}>
    <li><a className='font-EB_Garamond' href="#top">{t('home')}</a></li>
    <li><a className='font-EB_Garamond' href="#aboutMe">{t('aboutMe')}</a></li>
    <li><a className='font-EB_Garamond' href="#services">{t('services')}</a></li>
    <li><a className='font-EB_Garamond' href="#work">{t('work')}</a></li>
    <li><a className='font-EB_Garamond' href="#contact">{t('contact')}</a></li>
</ul>
<div className='flex items-center gap-4'>
  <button onClick={()=> setIsDarkMode(prev => !prev)}>
    <Image src={isDarkMode ? assets.sun_icon : assets.moon_icon } alt='night_mode' className='w-6'/>
  </button>

  <a href="#contact" className='hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 font-EB_Garamond dark:border-white/50'>{t('contact')}  <Image src={isDarkMode ? assets.arrow_icon_dark : assets.arrow_icon} className='w-3' alt='arrow_icon'/></a>
   <button className='block md:hidden ml-3' onClick={openMenu}>
    <Image src={isDarkMode ? assets.menu_white : assets.menu_black} alt='menu' className='w-6'/>
  </button>
</div>
{/*---------------- mobile menu ----------------*/}

<ul ref={sideMenuRef} className='flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-lightHover transition duration-500 dark:bg-darkHover dark:text-white'>
  <div className='absolute right-6 top-6' onClick={closeMenu} >
    <Image src={isDarkMode ? assets.close_white : assets.close_black} alt='close_black' className='w-5' />
  </div>
    <li><a className='font-EB_Garamond' href="#top" onClick={closeMenu}>{t('home')}</a></li>
    <li><a className='font-EB_Garamond' href="#aboutMe" onClick={closeMenu}>{t('aboutMe')}</a></li>
    <li><a className='font-EB_Garamond' href="#services" onClick={closeMenu}>{t('services')}</a></li>
    <li><a className='font-EB_Garamond' href="#work" onClick={closeMenu}>{t('work')}</a></li>
    <li><a className='font-EB_Garamond' href="#contact" onClick={closeMenu}>{t('contact')}</a></li>
</ul>
</nav>
</>
  )
}

export default Navbar
