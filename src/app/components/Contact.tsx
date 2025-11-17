import React, { useEffect } from 'react'
import { useTranslations } from "next-intl";
import { useContactForm } from "../hooks/useContactForm";
import { ContactForm } from "./ContactForm";
import { motion } from 'motion/react'

const Contact = () => {
  const t = useTranslations("Contact");
  const { register, handleSubmit, submit, result,isSuccess, setIsSuccess, reset } = useContactForm();

useEffect(() => {
  if (isSuccess) {
    reset()
    const timer = setTimeout(() => setIsSuccess(false), 3000);
    return () => clearTimeout(timer);
  }
}, [isSuccess, setIsSuccess]);


  
  return (
    <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
    id="contact" className={`w-full px-[12%] py-10 scroll-mt-20 bg-[url("/footer-bg-color.png")] bg-no-repeat bg-center bg-[length:90%_auto] dark:bg-none`}>
      <motion.h4 
      initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1  }}
          transition={{ delay: 0.3, duration: 0.5 }}
          viewport={{ once: true }}
      className="text-center mb-2 text-lg font-EB_Garamond">{t("title")}</motion.h4>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}

      className="text-center text-5xl font-EB_Garamond">{t("subtitle")}</motion.h2>
      <motion.p 
           
      className="text-center max-w-2xl mx-auto mt-5 mb-12 font-IBM_Plex_Sans">
        {t("description")}
      </motion.p>

      <ContactForm
        register={register}
        handleSubmit={handleSubmit}
        onSubmit={submit}
        result={result}
        isSuccess={isSuccess}
      />
    </motion.section>
  );
};

export default Contact