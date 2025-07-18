"use client";
import { useTranslations } from "next-intl";
import { useForm } from "react-hook-form";
import { twMerge } from "tailwind-merge";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

const ContactForm = ({ locale }) => {
  const t = useTranslations("Contact");
  const schema = z.object({
    name: z.string().min(1, t("formErrors.nameRequired")),
    email: z
      .string({ required_error: t("formErrors.emailRequired") })
      .min(1, t("formErrors.emailRequired"))
      .email(t("formErrors.invalidEmail")),
    phone: z
      .string()
      .regex(/^[0-9+\-\s()]*$/, t("formErrors.invalidPhone"))
      .min(7, t("formErrors.phoneTooShort"))
      .max(15, t("formErrors.phoneTooLong")),
    message: z.string().min(1, t("formErrors.messageRequired")),
  });
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({ resolver: zodResolver(schema) });
  const onSubmit = async (data) => {
    try {
      const result = await emailjs.send(serviceID, templateID, data, publicKey);
      toast.success(t("success")), reset();
    } catch (error) {
      toast.error(t("error"));
      console.error("Failed to send:", error);
    }
  };

  return (
    <form
      dir={locale === "ar" ? "rtl" : "ltr"}
      onSubmit={handleSubmit(onSubmit)}
      className={twMerge(
        "mt-12 text-base xs:text-lg sm:text-xl font-medium leading-relaxed font-in ",
        locale === "ar" ? "font-tajawal font-semibold" : ""
      )}
    >
      {t("name")}
      <input
        type="text"
        placeholder={t("namePlaceholder")}
        {...register("name")}
        className="outline-none border-0 p-0 mx-2 focus:ring-0 placeholder:text-center 
        placeholder:text-lg border-b border-gray 
        focus:border-gray bg-transparent "
      />
      {t("emailIntro")}
      <input
        type="email"
        placeholder={t("emailPlaceholder")}
        {...register("email")}
        className="outline-none border-0 p-0 mx-2 focus:ring-0 
        placeholder:text-center placeholder:text-lg border-b border-gray 
        focus:border-gray bg-transparent"
      />
      {t("phoneIntro")}
      <input
        type="tel"
        placeholder={t("phonePlaceholder")}
        {...register("phone")}
        className="outline-none border-0 p-0 mx-2 
        focus:ring-0 placeholder:text-center placeholder:text-lg border-b border-gray 
        focus:border-gray bg-transparent"
      />
      {t("detailsIntro")} <br />
      <textarea
        {...register("message")}
        placeholder={t("detailsPlaceholder")}
        rows={2}
        className="w-full outline-none border-0 p-0 mx-0 focus:ring-0  
        placeholder:text-lg placeholder:p-10 overflow-hidden border-b border-gray 
        focus:border-gray bg-transparent"
      />
      <div className=" flex flex-row min-h-[2rem]">
        {errors.name && (
          <p className="text-red-500 text-xs mx-2">{errors.name.message}</p>
        )}
        {errors.email && (
          <p className="text-red-500 text-xs mx-2">{errors.email.message}</p>
        )}{" "}
        {errors.phone && (
          <p className="text-red-500 text-xs mx-2">{errors.phone.message}</p>
        )}
        {errors.message && (
          <p className="text-red-500 text-xs mx-2">{errors.message.message}</p>
        )}
      </div>
      <button
        type="submit"
        disabled={isSubmitting}
        className={twMerge(
          "mt-8 font-medium inline-flex items-center justify-center capitalize text-lg sm:text-xl",
          "py-2 sm:py-3 px-6 sm:px-8 border-2 border-solid border-dark dark:border-light rounded cursor-pointer mb-4 transition-opacity duration-200",
          isSubmitting && "opacity-60 cursor-not-allowed"
        )}
      >
        {isSubmitting ? t("submiting") : t("submit")}
        {isSubmitting && (
          <svg
            className="animate-spin h-5 w-5 mx-2 text-gray-600 dark:text-gray-300"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8v8H4z"
            />
          </svg>
        )}
      </button>
    </form>
  );
};

export default ContactForm;
