"use client";
import React from "react";
import Lottie from "lottie-react";
import animationData from "./Animation-1751927266059.json"; // تأكد إن الملف جنب الكومبوننت

const LottieAnimation = () => {
  return (
    <Lottie
      animationData={animationData}
      loop
      autoplay
      style={{ width: "100%", maxWidth: "500px", height: "auto" }}
    />
  );
};

export default LottieAnimation;
