// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const CustomToast = () => {
//   return (
//     <ToastContainer
//       position="top-right"
//       autoClose={3000}
//       rtl={true}
//       theme="colored"
//       toastStyle={{
//         fontFamily: "Tajawal, sans-serif",
//         fontSize: "16px",
//         textAlign: "right",
//         direction: "rtl",
//         backgroundColor: "#ffba00", // لون خلفية أصفر مطابق للهوية
//         opacity: 0.8, // شفافية خفيفة
//         color: "#1a1a1a", // نص بلون داكن للقراءة
//         padding: "12px 20px", // زيادة التباعد داخل التوست
//         borderRadius: "8px", // زوايا دائرية أنيقة
//         boxShadow: "0 4px 10px rgba(0,0,0,0.1)", //
//       }}
//     />
//   );
// };

// export default CustomToast;
"use client";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CustomToast = ({ locale, isDarkMode }) => {
  return (
    <ToastContainer
      position={locale === "ar" ? "top-right" : "top-left"}
      autoClose={3000}
      rtl={locale === "ar"}
      theme={isDarkMode ? "dark" : "light"}
      toastStyle={{
        fontFamily:
          locale === "ar" ? "Tajawal, sans-serif" : "Manrope, sans-serif",
        fontSize: "16px",
        textAlign: locale === "ar" ? "right" : "left",
        direction: locale === "ar" ? "rtl" : "ltr",
        backgroundColor: isDarkMode ? "white" : "black", // dark or light
        opacity: 0.95,
        color: isDarkMode ? "black" : "white",
        padding: "12px 20px",
        borderRadius: "8px",
        boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
      }}
    />
  );
};

export default CustomToast;
