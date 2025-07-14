"use client";
import { useTranslations } from "next-intl";
import { useForm } from "react-hook-form";
import { twMerge } from "tailwind-merge";

const ContactForm = ({ locale }) => {
  const t = useTranslations("Contact");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);

  return (
    <form
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
        {...register("name", { required: true, maxLength: 80 })}
        className="outline-none border-0 p-0 mx-2 focus:ring-0 placeholder:text-center 
        placeholder:text-lg border-b border-gray 
        focus:border-gray bg-transparent "
      />
      {t("emailIntro")}
      <input
        type="email"
        placeholder={t("emailPlaceholder")}
        {...register("email", {})}
        className="outline-none border-0 p-0 mx-2 focus:ring-0 
        placeholder:text-center placeholder:text-lg border-b border-gray 
        focus:border-gray bg-transparent"
      />
      {t("phoneIntro")}
      <input
        type="tel"
        placeholder={t("phonePlaceholder")}
        {...register("phone number", {})}
        className="outline-none border-0 p-0 mx-2 
        focus:ring-0 placeholder:text-center placeholder:text-lg border-b border-gray 
        focus:border-gray bg-transparent"
      />
      {t("detailsIntro")} <br />
      <textarea
        {...register("project details", {})}
        placeholder={t("detailsPlaceholder")}
        rows={3}
        className="w-full outline-none border-0 p-0 mx-0 focus:ring-0  
        placeholder:text-lg placeholder:p-10 overflow-hidden border-b border-gray 
        focus:border-gray bg-transparent"
      />
      <input
        type="submit"
        value={t("submit")}
        className="mt-8 font-medium inline-block capitalize 
        text-lg sm:text-xl py-2 sm:py-3 px-6 sm:px-8 border-2 
        border-solid border-dark dark:border-light rounded cursor-pointer "
      />
    </form>
  );
};

export default ContactForm;
