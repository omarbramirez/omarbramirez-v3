
import { assets } from "../assets/assets";
import Image from "next/image";
import { useTranslations } from 'next-intl'

const Footer = () => {
    const t = useTranslations('Footer')
    return (
        <div className="mt-20">
            <div className="text-center">
                <Image src={assets.logo} alt='' className='w-36 mx-auto' />

                <div className="w-max flex items-center gap-2 mx-auto">
                    <Image src={assets.mail_icon} alt='' className="w-6" />
                    omar.ramirez94@hotmail.es
                </div>
            </div>

            <div className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6">
                <p>© 2025 Omar B Ramírez. {t('copyright')}</p>
                <ul className="flex items-center gap-10 justify-center mt-4 sm:mt-0">
                    <li>
                        <a target="_blank" href="https://github.com/settings/profile">GitHub</a>
                    </li>
                    <li>
                        <a target="_blank" href="https://dev.to/omarbramirez">Dev.to</a>
                    </li>
                    <li>
                        <a target="_blank" href="https://www.linkedin.com/in/omar-b-ramirez/">LinkedIn</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Footer;