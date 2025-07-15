"use client";

// npm install next-themes

import { useEffect, useState } from "react";

const useThemeSwitch = () => {
  const preferDarkQuery = "(prefers-color-scheme: dark)";
  const storageKey = "theme";

  const toggleTheme = (theme) => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    window.localStorage.setItem(storageKey, theme);
  };

  const getUserPreference = () => {
    if (typeof window === "undefined") return null; // في حال SSR
    const userPref = window.localStorage.getItem(storageKey);
    if (userPref) return userPref;
    return window.matchMedia(preferDarkQuery).matches ? "dark" : "light";
  };

  const [mode, setMode] = useState(null); // نبدأ null

  useEffect(() => {
    const userPref = getUserPreference();
    if (userPref) {
      setMode(userPref);
      toggleTheme(userPref);
    }
  }, []);

  useEffect(() => {
    if (!mode) return;
    toggleTheme(mode);
  }, [mode]);

  return [mode, setMode];
};

export default useThemeSwitch;

// "use client"; // هذا الكود يعمل فقط على الـ Client Side (المتصفح)

// import { useEffect, useState } from "react";

// // Custom Hook لتبديل الثيم بين "dark" و "light"
// const useThemeSwitch = () => {
//   // Media Query للتحقق إذا المستخدم يستخدم الوضع الداكن في إعدادات نظامه
//   const preferDarkQuery = "(prefers-color-scheme:dark)";

//   // المفتاح المستخدم لتخزين الثيم في localStorage
//   const storageKey = "theme";

//   // ✅ وظيفة: تغيير الثيم (يضيف أو يشيل كلاس "dark" من <html>) + يحفظه
//   const toggleTheme = (theme) => {
//     if (theme === "dark") {
//       document.documentElement.classList.add("dark"); // إضافة كلاس "dark"
//     } else {
//       document.documentElement.classList.remove("dark"); // إزالة كلاس "dark"
//     }
//     window.localStorage.setItem(storageKey, theme); // حفظ الثيم في localStorage
//   };

//   // ✅ وظيفة: تحديد تفضيل المستخدم
//   // إما من localStorage أو من إعدادات النظام
//   const getUserPreference = () => {
//     const userPref = window.localStorage.getItem(storageKey); // فحص localStorage
//     if (userPref) {
//       return userPref; // إذا فيه قيمة مخزنة، نرجعها
//     }
//     // إذا ما فيه تفضيل محفوظ، نستخدم إعدادات النظام (dark/light)
//     return window.matchMedia(preferDarkQuery).matches ? "dark" : "light";
//   };

//   // ❗ نحتاج حالة لتخزين الوضع الحالي (mode)
//   const [mode, setMode] = useState(nu);

//   // ✅ useEffect: يتنفذ عند تحميل الصفحة لأول مرة
//   useEffect(() => {
//     const mediaQuery = window.matchMedia(preferDarkQuery); // راقب إعدادات النظام

//     // دالة تتنفذ لتطبيق الثيم الصحيح حسب تفضيل المستخدم أو إعدادات النظام
//     const handleChange = () => {
//       const newMode = getUserPreference(); // نحصل على الثيم المناسب
//       setMode(newMode); // نحدث الحالة
//       toggleTheme(newMode); // نطبّق الكلاس ونحفظ القيمة
//     };

//     handleChange(); // نطبّق الثيم مباشرة عند أول تحميل للصفحة

//     mediaQuery.addEventListener("change", handleChange); // راقب تغييرات إعدادات النظام

//     return () => {
//       mediaQuery.removeEventListener("change", handleChange); // تنظيف عند إزالة الكومبوننت
//     };
//   }, []);

//   // ✅ useEffect ثاني: يتنفذ كل مرة تتغير فيها حالة mode
//   useEffect(() => {
//     toggleTheme(mode);
//     localStorage.setItem("theme", mode); // ✅ يشتغل كل مرة يتغير فيها الثيم
//   }, [mode]);

//   // نرجع mode الحالي والدالة لتغييره (عشان تستخدمه من زر مثلاً)
//   return [mode, setMode];
// };

// export default useThemeSwitch;
