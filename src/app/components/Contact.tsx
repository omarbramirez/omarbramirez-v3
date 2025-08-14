import React, { useEffect } from 'react'
import { useTranslations } from "next-intl";
import { useContactForm } from "../hooks/useContactForm";
import { ContactForm } from "./ContactForm";

const Contact = () => {
  const t = useTranslations("Contact");
  const { register, handleSubmit, submit, result,isSuccess, setIsSuccess } = useContactForm();

useEffect(() => {
  if (isSuccess) {
    const timer = setTimeout(() => setIsSuccess(false), 3000);
    return () => clearTimeout(timer);
  }
}, [isSuccess, setIsSuccess]);


  
  return (
    <section id="contact" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg font-EB_Garamond">{t("title")}</h4>
      <h2 className="text-center text-5xl font-EB_Garamond">{t("subtitle")}</h2>
      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-IBM_Plex_Sans">
        {t("description")}
      </p>

      <ContactForm
        register={register}
        handleSubmit={handleSubmit}
        onSubmit={submit}
        result={result}
        isSuccess={isSuccess}
      />
    </section>
  );
};

export default Contact