# Nextjs-blog-RajDev-multi-language

A multilingual blog built with **Next.js**, **Tailwind CSS**, and **Contentlayer**, supporting **English and Arabic**.  
This project is created and maintained by [Firas](https://github.com/ferasraj) as part of his learning journey in web development.

---

## 🌍 Features

- 🌐 **Internationalization (i18n)** with support for Arabic and English using localized routing.
- 📝 **Markdown blog posts** powered by Contentlayer.
- ⚡ **Fast static generation** for SEO-friendly pages.
- 🎨 **Tailwind CSS** for responsive and modern UI.
- 🧠 Simple JSON-based route generation for categories and blog posts.
- 🗺️ Automatically generated sitemap and robots.txt using `next-sitemap`.

---

## 🚀 Getting Started

```bash
# 1. Clone the repository
git clone https://github.com/ferasraj/Nextjs-blog-RajDev-multi-language.git

# 2. Navigate into the project
cd Nextjs-blog-RajDev-multi-language

# 3. Install dependencies
npm install

# 4. Generate blog and category routes
npm run generate

# 5. Run the development server
npm run dev
```

Now open [http://localhost:3000](http://localhost:3000) in your browser.

---

## ⚙️ Scripts

| Command             | Description                                        |
| ------------------- | -------------------------------------------------- |
| `npm run dev`       | Start development server                           |
| `npm run build`     | Build for production                               |
| `npm run generate`  | Generate `blogRoutes.json` & `categoryRoutes.json` |
| `npm run postbuild` | Generate sitemap after build                       |

---

## 🛠️ Technologies Used

- [Next.js](https://nextjs.org/)
- [React](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Contentlayer](https://contentlayer.dev/)
- [next-sitemap](https://www.npmjs.com/package/next-sitemap)
- [i18n routing](https://nextjs.org/docs/advanced-features/i18n-routing)

---

## 📁 Folder Structure (Simplified)

```
.
├── content/              # Markdown files for blog posts
├── pages/                # Next.js pages with i18n
├── scripts/              # Custom script to generate routes
├── public/               # Static assets
├── components/           # Reusable UI components
├── styles/               # Global styles and Tailwind setup
├── blogRoutes.json       # Generated blog route map
├── categoryRoutes.json   # Generated category route map
└── next-sitemap.config.js# Sitemap configuration
```

---

## 📌 Roadmap

- [ ] Add blog post search
- [ ] Support more languages (e.g. French, Turkish)
- [ ] Add dark mode
- [ ] Deploy to Vercel

---

## 🤝 Contributing

This is a learning project, but PRs and suggestions are welcome!

---

## 🧑‍💻 Author

**[Feras Raj]** – [ferasraj on GitHub](https://github.com/ferasraj)

---

## 📄 License

This project is open-source and free to use under the [MIT License](LICENSE).
