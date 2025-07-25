"use client";
import React, { useEffect, useRef } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { twMerge } from "tailwind-merge";
import { useTranslations } from "next-intl";
import { toast } from "react-toastify";

const ContactForm = () => {
  const t = useTranslations("Footer");
  const [state, handleSubmit] = useForm("mrblzwpk");

  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return; // تجاهل أول تنفيذ للـ useEffect
    }

    if (state.succeeded) {
      toast.success(t("newsletter.success"));
    } else if (state.errors) {
      toast.error(t("newsletter.error"));
    }
  }, [state.succeeded, state.errors, t]);
  return (
    <>
      <form
        onSubmit={handleSubmit}
        aria-labelledby="newsletter-heading"
        className={twMerge(
          "mt-6 w-fit sm:min-w-[384px] flex items-stretch",
          "bg-light dark:bg-dark p-1 sm:p-2 rounded mx-4 mb-2"
        )}
      >
        <input
          id="email"
          type="email"
          name="email"
          placeholder={t("newsletter.placeholder")}
          className={twMerge(
            "w-full bg-transparent pl-2 sm:pl-0 text-dark focus:border-dark",
            "focus:ring-0 border-0 border-b mr-2 pb-1 "
          )}
        />
        <button
          type="submit"
          disabled={state.submitting}
          className={twMerge(
            "bg-dark text-light dark:text-dark dark:bg-light cursor-pointer",
            "font-medium rounded px-3 sm:px-5 py-1"
          )}
        >
          {state.submitting
            ? `${t("newsletter.subscribing")}`
            : `${t("newsletter.subscribeBtn")}`}
        </button>
      </form>
      <ValidationError
        prefix="Email"
        field="email"
        errors={state.errors}
        className="text-red-500 text-xs"
      />
    </>
  );
};

export default ContactForm;
