"use client";

import { Facebook, Twitter, MessageCircle, Link, Check } from "lucide-react";
import { useEffect, useState } from "react";
import { XIcon } from "./Icons";

const SocialShare = ({ title, url, locale }) => {
  const encodedURL = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("فشل نسخ الرابط", err);
    }
  };

  const [platformName, setPlatformName] = useState("Twitter");

  useEffect(() => {
    setPlatformName("X.com");
  }, []);

  const buttons = [
    {
      name: "Facebook",
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodedURL}`,
      icon: <Facebook className="w-5 h-5" />,
      bg: "bg-blue-600",
    },
    {
      name: platformName,
      href: `https://x.com/intent/tweet?text=${encodedTitle}&url=${encodedURL}`,
      icon: <XIcon className="w-5 h-5" />,
      bg: "dark:bg-white dark:text-black bg-black text-white fill-white dark:fill-black",
    },
    {
      name: "WhatsApp",
      href: `https://wa.me/?text=${encodedTitle}%20${encodedURL}`,
      icon: <MessageCircle className="w-5 h-5" />,
      bg: "bg-green-500",
    },
  ];

  return (
    <div className="flex items-center gap-3 flex-wrap mt-6">
      {buttons.map((btn) => (
        <a
          key={btn.name}
          href={btn.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`شارك على ${btn.name}`}
          className={`flex items-center gap-2 px-3 py-2 text-white rounded-md ${btn.bg} hover:opacity-90 transition text-sm`}
        >
          {btn.icon}
          {btn.name}
        </a>
      ))}

      <button
        onClick={handleCopy}
        aria-label="نسخ الرابط"
        className="font-semibold flex items-center 
        gap-2 px-3 py-2 bg-gray-700 text-black rounded-md 
        hover:bg-gray-800 transition text-sm
        dark:text-white"
      >
        {copied ? (
          <Check className="w-5 h-5 " />
        ) : (
          <Link className=" w-5 h-5" />
        )}
        {copied
          ? locale === "ar"
            ? "تم النسخ"
            : "Copied"
          : locale === "ar"
          ? "نسخ الرابط"
          : "Copy Link"}
      </button>
    </div>
  );
};

export default SocialShare;
