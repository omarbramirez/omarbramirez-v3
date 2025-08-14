
import Image from "next/image";
import { assets } from "../assets/assets";

import { UseFormRegister, UseFormHandleSubmit } from "react-hook-form";
import { ContactFormValues } from "../../types/forms";


interface ContactFormProps {
  register: UseFormRegister<ContactFormValues>;
  handleSubmit: UseFormHandleSubmit<ContactFormValues>;
  onSubmit: (data: ContactFormValues) => void;
  result: string;
  isSuccess: boolean;
}


export const ContactForm: React.FC<ContactFormProps> = ({ register, handleSubmit, onSubmit, result, isSuccess }) => (

  <form className="max-w-2xl mx-auto" onSubmit={handleSubmit(onSubmit)}>
    <input type="hidden" {...register("access_key")} value={process.env.NEXT_PUBLIC_ACCESS_KEY!} />

    <div className="grid grid-cols-(--grid-cols-auto) gap-6 mt-10 mb-8">
      <input type="text" placeholder="Nombre" {...register("name", { required: true })} className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white" />
      <input type="email" placeholder="Correo" {...register("email", { required: true })} className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white" />
    </div>

    <textarea rows={6} placeholder="Escribe tu mensaje" {...register("message", { required: true })} className="w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white"></textarea>

    <button type="submit" className="py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500">
      Enviar <Image src={assets.right_arrow_white} alt="" />
    </button>
<p
  className={`mt-4 px-4 py-2 rounded-md text-center transition-opacity duration-500
  ${isSuccess ? "opacity-100 bg-emerald-100 text-emerald-800" : "opacity-0 pointer-events-none"}`}
>
  {result}
</p>

  </form>
);
