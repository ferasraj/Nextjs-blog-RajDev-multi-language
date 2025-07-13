import Link from "next/link";
import AboutCoverSection from "../../components/About/AboutCoverSection";
import Skills from "../../components/About/Skills";
import { routing } from "@/src/i18n/routing";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";

export const metadata = {
  title: "About Me",
  description: `Here are some details about my self.`,
};
export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function AboutPage({ params }) {
  const t = await getTranslations({
    locale: params.locale,
    namespace: "About",
  });

  return (
    <>
      <AboutCoverSection />
      <Skills />
      <h2
        className="mt-8 font-semibold text-lg md:text-2xl self-start mx-5 xs:mx-10 sm:mx-12 md:mx-16 
      lg:mx-20 text-dark dark:text-light dark:font-normal"
      >
        {t("haveProject")}{" "}
        {/* Have a project in mind? Reach out to me 📞 from{" "} */}
        <Link
          href={`/${params.locale}/contact`}
          className="!underline underline-offset-2"
        >
          {t("contactLink")}
        </Link>{" "}
        {t("letsMakeItHappen")}
      </h2>
    </>
  );
}
