# Raj Dev Blog

A modern, multilingual personal blog built with **Next.js 13 App Router**, **TailwindCSS**, and **Contentlayer**. It is optimized for performance, accessibility, and SEO, and supports both **Arabic** and **English**.

🔗 Live site: [https://blog-rajmod-dev.vercel.app](https://blog-rajmod-dev.vercel.app)

---

![Raj Dev Blog Banner](./public/social-banner.png)

---

## 📌 Features

- 🗂️ Content-driven with `Contentlayer`
- 🌍 Multilingual (Arabic & English) with `next-intl`
- 📄 SEO metadata via `generateMetadata()`
- 🗺️ Dynamic Sitemap & Robots.txt via `next-sitemap`
- 💬 Contact page with form integration (`formspree`)
- 🎨 Fully styled with TailwindCSS & RTL support
- 📖 MDX support with syntax highlighting

---

## 🧠 Metadata & SEO Strategy

All pages generate structured metadata dynamically via the `generateMetadata()` function in each route:

- Dynamic titles with `template` and localized `default`
- Language-specific descriptions
- Canonical URLs and `alternate` languages
- Full OpenGraph + Twitter metadata
- Localized `og:locale` for each language

Example:

```js
export async function generateMetadata({ params }) {
  const locale = params.locale;
  return {
    title: {
      template: `%s | ${siteMetadata.title[locale]}`,
      default: siteMetadata.title[locale],
    },
    description: siteMetadata.description[locale],
    alternates: {
      canonical: `${siteMetadata.siteUrl}/${locale}`,
      languages: {
        en: `${siteMetadata.siteUrl}/en`,
        ar: `${siteMetadata.siteUrl}/ar`,
      },
    },
    openGraph: {
      title: siteMetadata.title[locale],
      description: siteMetadata.description[locale],
      url: siteMetadata.siteUrl,
      locale,
      siteName: siteMetadata.title[locale],
      type: "website",
      images: [
        {
          url: `${siteMetadata.siteUrl}${siteMetadata.socialBanner}`,
          width: 1200,
          height: 630,
          alt: siteMetadata.title[locale],
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: siteMetadata.title[locale],
      description: siteMetadata.description[locale],
      creator: siteMetadata.authorTwitter,
      images: [`${siteMetadata.siteUrl}${siteMetadata.socialBanner}`],
    },
  };
}
```

---

## 🗺️ Sitemap & Robots.txt

The sitemap is **dynamically generated** with `next-sitemap`. URLs are derived from the blog content:

- `scripts/generate-routes.js` generates:
  - `blogRoutes.json`
  - `categoryRoutes.json`
- These are used by `next-sitemap.config.js` to build the final `sitemap.xml` and `robots.txt`.

```json
"scripts": {
  "generate": "npx contentlayer build || true && node scripts/generate-routes.js",
  "postbuild": "next-sitemap"
}
```

---

## 📦 Notable Libraries Used

- `next`, `react`, `tailwindcss`
- `contentlayer` — markdown/MDX source integration
- `next-intl` — translation system with middleware
- `next-sitemap` — SEO & sitemap automation
- `formspree` — contact form submission handler
- `@heroicons/react` — icon system
- `reading-time`, `github-slugger` — for blog processing

---

## 📁 Directory Structure (Simplified)

```
/app
  └── [locale]/
      ├── layout.jsx
      ├── page.jsx              → Home
      ├── (about)/about/page.jsx       → About page
      ├── (about)/contact/page.jsx     → Contact form
      ├── blogs/[slug]/page.jsx
      ├── categories/[slug]/page.jsx
/scripts
  ├── generate-routes.js       → Builds JSON for sitemap
/content
  ├── blog/                    → MDX blog posts
/public
  ├── fonts/
  └── social-banner.png        → OG image
```

---

## 📬 Contact

Use the contact form on the site, or email: `ferasraj@gmail.com`

---

## 🇸🇦 النسخة العربية

مدونة شخصية حديثة تدعم اللغتين **العربية والإنجليزية** مبنية باستخدام **Next.js App Router** و **TailwindCSS**، ومهيأة لمحركات البحث ومرنة جدًا.

🔗 رابط مباشر: [https://blog-rajmod-dev.vercel.app](https://blog-rajmod-dev.vercel.app)

---

### ✨ المميزات:

- المحتوى يُدار بـ `Contentlayer`
- دعم كامل للعربية مع `next-intl`
- بيانات SEO ديناميكية
- توليد sitemap و robots.txt تلقائي
- نموذج تواصل يعمل عبر `formspree`
- تصميم بـ Tailwind مع دعم RTL

---

### 🧠 طريقة توليد البيانات الوصفية (Metadata)

يتم توليد العناوين والوصف والروابط الخاصة بكل لغة وصفحة تلقائيًا باستخدام `generateMetadata()` داخل كل صفحة، مما يضمن توافق كامل مع محركات البحث ودعم متعدد اللغات.

---

### 🗺️ خريطة الموقع و Robots.txt

يتم توليدها تلقائيًا بعد البناء باستخدام:

- سكربت `generate-routes.js` → لتوليد `blogRoutes.json` و `categoryRoutes.json`
- مكتبة `next-sitemap` لقراءة تلك البيانات وتوليد الملفات النهائية

---

### 📦 المكتبات المهمة:

- `next`, `react`, `tailwindcss`
- `contentlayer`, `next-intl`, `next-sitemap`
- `formspree`, `heroicons`, `reading-time`, `clsx`, وغيرها

---

### ✍️ تواصل

عبر النموذج في الصفحة أو البريد الإلكتروني: `ferasraj@gmail.com`

---

> هذا المشروع تم تطويره بشغف لتقديم محتوى تقني عربي وإنجليزي عالي الجودة، مع تجربة مستخدم محترفة ومتجاوبة.
