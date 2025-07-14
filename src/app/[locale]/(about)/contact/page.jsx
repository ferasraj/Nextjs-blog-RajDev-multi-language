import React from "react";
import ContactForm from "../../components/Contact/ContactForm";
import LottieAnimation from "../../components/Contact/LottieAnimation";
import siteMetadata from "@/src/utils/siteMetaData";
import { routing } from "@/src/i18n/routing";
import { getTranslations } from "next-intl/server";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}
export const metadata = {
  title: "Contact Me",
  description: `Contact me through the form available on this page or email me at ${siteMetadata.email}`,
};

const Contact = async ({ params }) => {
  const t = await getTranslations({
    locale: params.locale,
    namespace: "Contact",
  });
  return (
    <section
      className="w-full h-auto md:h-[75vh] border-b-2 border-solid border-dark 
    dark:border-light flex  flex-col md:flex-row items-center justify-center text-dark 
    dark:text-light"
    >
      <div
        className="inline-block w-full sm:w-4/5 md:w-2/5 h-full md:border-r-2 
      border-solid border-dark dark:border-light"
      >
        <LottieAnimation />
      </div>
      <div
        className="w-full  md:w-3/5 flex flex-col items-start justify-center 
      px-5 xs:px-10 md:px-16 pb-8"
      >
        <h2 className="font-bold capitalize  text-2xl xs:text-3xl sm:text-4xl">
          {t("title")}
        </h2>
        <ContactForm locale={params.locale} />
      </div>
    </section>
  );
};

export default Contact;
