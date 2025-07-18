import React from "react";
import { twMerge } from "tailwind-merge";

export const SunIcon = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    {...rest}
    className={twMerge("w-full h-auto", className)}
  >
    <rect x="0" y="0" width="24" height="24" fill="rgba(255, 255, 255, 0)" />
    <g
      fill="none"
      stroke="currentColor"
      strokeDasharray="2"
      strokeDashoffset="2"
      strokeLinecap="round"
      strokeWidth="2"
    >
      <path d="M0 0">
        <animate
          fill="freeze"
          attributeName="d"
          begin="1.2s"
          dur="0.2s"
          values="M12 19v1M19 12h1M12 5v-1M5 12h-1;M12 21v1M21 12h1M12 3v-1M3 12h-1"
        />
        <animate
          fill="freeze"
          attributeName="stroke-dashoffset"
          begin="1.2s"
          dur="0.2s"
          values="2;0"
        />
      </path>
      <path d="M0 0">
        <animate
          fill="freeze"
          attributeName="d"
          begin="1.5s"
          dur="0.2s"
          values="M17 17l0.5 0.5M17 7l0.5 -0.5M7 7l-0.5 -0.5M7 17l-0.5 0.5;M18.5 18.5l0.5 0.5M18.5 5.5l0.5 -0.5M5.5 5.5l-0.5 -0.5M5.5 18.5l-0.5 0.5"
        />
        <animate
          fill="freeze"
          attributeName="stroke-dashoffset"
          begin="1.5s"
          dur="1.2s"
          values="2;0"
        />
      </path>
      <animateTransform
        attributeName="transform"
        dur="30s"
        repeatCount="indefinite"
        type="rotate"
        values="0 12 12;360 12 12"
      />
    </g>
    <g fill="currentColor">
      <path d="M15.22 6.03L17.75 4.09L14.56 4L13.5 1L12.44 4L9.25 4.09L11.78 6.03L10.87 9.09L13.5 7.28L16.13 9.09L15.22 6.03Z">
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          dur="0.4s"
          values="1;0"
        />
      </path>
      <path d="M19.61 12.25L21.25 11L19.19 10.95L18.5 9L17.81 10.95L15.75 11L17.39 12.25L16.8 14.23L18.5 13.06L20.2 14.23L19.61 12.25Z">
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="0.2s"
          dur="0.4s"
          values="1;0"
        />
      </path>
    </g>
    <g
      fill="currentColor"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    >
      <path d="M7 6 C7 12.08 11.92 17 18 17 C18.53 17 19.05 16.96 19.56 16.89 C17.95 19.36 15.17 21 12 21 C7.03 21 3 16.97 3 12 C3 8.83 4.64 6.05 7.11 4.44 C7.04 4.95 7 5.47 7 6 Z" />
      <set attributeName="opacity" begin="0.6s" to="0" />
    </g>
    <mask id="lineMdMoonFilledToSunnyFilledLoopTransition0">
      <circle cx="12" cy="12" r="12" fill="#fff" />
      <circle cx="18" cy="6" r="12" fill="#fff">
        <animate
          fill="freeze"
          attributeName="cx"
          begin="0.6s"
          dur="0.4s"
          values="18;22"
        />
        <animate
          fill="freeze"
          attributeName="cy"
          begin="0.6s"
          dur="0.4s"
          values="6;2"
        />
        <animate
          fill="freeze"
          attributeName="r"
          begin="0.6s"
          dur="0.4s"
          values="12;3"
        />
      </circle>
      <circle cx="18" cy="6" r="10">
        <animate
          fill="freeze"
          attributeName="cx"
          begin="0.6s"
          dur="0.4s"
          values="18;22"
        />
        <animate
          fill="freeze"
          attributeName="cy"
          begin="0.6s"
          dur="0.4s"
          values="6;2"
        />
        <animate
          fill="freeze"
          attributeName="r"
          begin="0.6s"
          dur="0.4s"
          values="10;1"
        />
      </circle>
    </mask>
    <circle
      cx="12"
      cy="12"
      r="10"
      fill="currentColor"
      mask="url(#lineMdMoonFilledToSunnyFilledLoopTransition0)"
      opacity="0"
    >
      <set attributeName="opacity" begin="0.6s" to="1" />
      <animate
        fill="freeze"
        attributeName="r"
        begin="0.6s"
        dur="0.4s"
        values="10;6"
      />
    </circle>
  </svg>
);

export const MoonIcon = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    {...rest}
    className={twMerge("w-full h-auto", className)}
  >
    <g
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    >
      <g strokeDasharray="2">
        <path d="M12 21v1M21 12h1M12 3v-1M3 12h-1">
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            dur="0.2s"
            values="4;2"
          />
        </path>
        <path d="M18.5 18.5l0.5 0.5M18.5 5.5l0.5 -0.5M5.5 5.5l-0.5 -0.5M5.5 18.5l-0.5 0.5">
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            begin="0.2s"
            dur="0.2s"
            values="4;2"
          />
        </path>
      </g>
      <path
        fill="currentColor"
        d="M7 6 C7 12.08 11.92 17 18 17 C18.53 17 19.05 16.96 19.56 16.89 C17.95 19.36 15.17 21 12 21 C7.03 21 3 16.97 3 12 C3 8.83 4.64 6.05 7.11 4.44 C7.04 4.95 7 5.47 7 6 Z"
        opacity="0"
      >
        <set attributeName="opacity" begin="0.5s" to="1" />
      </path>
    </g>
    <g fill="currentColor" fillOpacity="0">
      <path d="m15.22 6.03l2.53-1.94L14.56 4L13.5 1l-1.06 3l-3.19.09l2.53 1.94l-.91 3.06l2.63-1.81l2.63 1.81z">
        <animate
          id="lineMdSunnyFilledLoopToMoonFilledLoopTransition0"
          fill="freeze"
          attributeName="fill-opacity"
          begin="0.6s;lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+6s"
          dur="0.4s"
          values="0;1"
        />
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+2.2s"
          dur="0.4s"
          values="1;0"
        />
      </path>
      <path d="M13.61 5.25L15.25 4l-2.06-.05L12.5 2l-.69 1.95L9.75 4l1.64 1.25l-.59 1.98l1.7-1.17l1.7 1.17z">
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+3s"
          dur="0.4s"
          values="0;1"
        />
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+5.2s"
          dur="0.4s"
          values="1;0"
        />
      </path>
      <path d="M19.61 12.25L21.25 11l-2.06-.05L18.5 9l-.69 1.95l-2.06.05l1.64 1.25l-.59 1.98l1.7-1.17l1.7 1.17z">
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+0.4s"
          dur="0.4s"
          values="0;1"
        />
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+2.8s"
          dur="0.4s"
          values="1;0"
        />
      </path>
      <path d="m20.828 9.731l1.876-1.439l-2.366-.067L19.552 6l-.786 2.225l-2.366.067l1.876 1.439L17.601 12l1.951-1.342L21.503 12z">
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+3.4s"
          dur="0.4s"
          values="0;1"
        />
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+5.6s"
          dur="0.4s"
          values="1;0"
        />
      </path>
    </g>
    <mask id="lineMdSunnyFilledLoopToMoonFilledLoopTransition1">
      <circle cx="12" cy="12" r="12" fill="#fff" />
      <circle cx="22" cy="2" r="3" fill="#fff">
        <animate
          fill="freeze"
          attributeName="cx"
          begin="0.1s"
          dur="0.4s"
          values="22;18"
        />
        <animate
          fill="freeze"
          attributeName="cy"
          begin="0.1s"
          dur="0.4s"
          values="2;6"
        />
        <animate
          fill="freeze"
          attributeName="r"
          begin="0.1s"
          dur="0.4s"
          values="3;12"
        />
      </circle>
      <circle cx="22" cy="2" r="1">
        <animate
          fill="freeze"
          attributeName="cx"
          begin="0.1s"
          dur="0.4s"
          values="22;18"
        />
        <animate
          fill="freeze"
          attributeName="cy"
          begin="0.1s"
          dur="0.4s"
          values="2;6"
        />
        <animate
          fill="freeze"
          attributeName="r"
          begin="0.1s"
          dur="0.4s"
          values="1;10"
        />
      </circle>
    </mask>
    <circle
      cx="12"
      cy="12"
      r="6"
      fill="currentColor"
      mask="url(#lineMdSunnyFilledLoopToMoonFilledLoopTransition1)"
    >
      <set attributeName="opacity" begin="0.5s" to="0" />
      <animate
        fill="freeze"
        attributeName="r"
        begin="0.1s"
        dur="0.4s"
        values="6;10"
      />
    </circle>
  </svg>
);

export const LinkedinIcon = ({ className, ...rest }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={42}
      height={43}
      viewBox="0 0 42 43"
      className={twMerge("w-full h-auto", className)}
      {...rest}
    >
      <g clipPath="url(#a)">
        <path
          fill="#0076B2"
          d="M38.063 1.792H3.937A2.924 2.924 0 0 0 .985 4.679v34.263a2.924 2.924 0 0 0 2.954 2.881h34.124a2.93 2.93 0 0 0 2.954-2.89V4.67a2.93 2.93 0 0 0-2.953-2.878Z"
        />
        <path
          fill="#fff"
          d="M6.91 16.797h5.943v19.12H6.91v-19.12Zm2.973-9.516a3.445 3.445 0 1 1 0 6.891 3.445 3.445 0 0 1 0-6.89Zm6.697 9.516h5.696v2.625h.08c.793-1.503 2.73-3.088 5.62-3.088 6.018-.013 7.133 3.948 7.133 9.083v10.5h-5.942v-9.302c0-2.215-.04-5.067-3.088-5.067s-3.566 2.415-3.566 4.922v9.447H16.58v-19.12Z"
        />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M0 .808h42v42H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};

export const XIcon = ({ className, ...rest }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlSpace="preserve"
      width={42}
      height={44}
      // viewBox="0 0 42 44"
      style={{
        enableBackground: "new 0 0 49.8 45",
      }}
      viewBox="0 0 49.8 43"
      className={twMerge("w-full h-auto ", className)}
      {...rest}
    >
      <path d="M39.2 0h7.6L30.2 19.1 49.8 45H34.4l-12-15.7L8.6 45H1l17.8-20.4L0 0h15.8l10.9 14.4L39.2 0zm-2.7 40.4h4.2L13.5 4.3H8.9l27.6 36.1z" />
    </svg>
  );
};

export const GithubIcon = ({ className, ...rest }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={42}
      height={44}
      viewBox="0 0 42 44"
      className={twMerge("w-full h-auto", className)}
      {...rest}
    >
      <path
        fillRule="evenodd"
        d="M21 1.739c-10.942 0-19.815 9.212-19.815 20.577 0 9.091 5.678 16.804 13.55 19.525.99.191 1.354-.446 1.354-.99 0-.49-.018-2.111-.027-3.83-5.512 1.244-6.675-2.428-6.675-2.428-.902-2.379-2.2-3.011-2.2-3.011-1.799-1.277.135-1.25.135-1.25 1.99.144 3.038 2.12 3.038 2.12 1.767 3.145 4.635 2.236 5.766 1.71.177-1.33.691-2.238 1.258-2.752-4.401-.52-9.028-2.284-9.028-10.168 0-2.247.774-4.082 2.042-5.524-.206-.518-.885-2.61.191-5.445 0 0 1.664-.553 5.45 2.11A18.325 18.325 0 0 1 21 11.688c1.683.008 3.38.236 4.963.693 3.782-2.663 5.444-2.11 5.444-2.11 1.079 2.834.4 4.928.195 5.445 1.27 1.442 2.039 3.277 2.039 5.524 0 7.903-4.635 9.643-9.048 10.153.711.638 1.345 1.891 1.345 3.81 0 2.754-.023 4.97-.023 5.647 0 .548.357 1.19 1.36.987 7.87-2.724 13.54-10.434 13.54-19.522 0-11.364-8.872-20.577-19.815-20.577Z"
        clipRule="evenodd"
      />
      <path d="M8.69 31.282c-.044.103-.198.133-.34.063-.144-.066-.224-.206-.178-.308.043-.106.198-.135.342-.064.144.067.226.207.176.31Zm.803.93c-.095.091-.28.049-.405-.095-.13-.143-.154-.335-.058-.427.098-.091.277-.048.407.095.13.145.155.335.056.428Zm.781 1.185c-.121.088-.32.006-.443-.177-.121-.183-.121-.403.004-.49.122-.089.318-.01.442.172.121.186.121.406-.003.495Zm1.07 1.145c-.108.125-.34.091-.509-.078-.173-.166-.221-.402-.113-.526.11-.125.343-.09.514.078.173.166.225.402.109.526Zm1.477.665c-.048.161-.27.234-.496.166-.224-.07-.37-.26-.324-.422.045-.163.27-.239.496-.165.224.07.37.257.324.421Zm1.622.123c.005.17-.185.31-.42.314-.237.005-.43-.132-.432-.3 0-.17.187-.31.424-.314.235-.005.428.132.428.3Zm1.508-.266c.029.165-.135.335-.369.38-.23.045-.443-.058-.473-.222-.028-.17.139-.34.369-.384.234-.042.444.058.473.226Z" />
    </svg>
  );
};

export const DribbbleIcon = ({ className, ...rest }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={42}
      height={43}
      viewBox="0 0 42 43"
      className={twMerge("w-full h-auto", className)}
      {...rest}
    >
      <g clipPath="url(#a)">
        <path
          fill="#E74D89"
          d="M21 2.202c10.828 0 19.59 8.761 19.59 19.573 0 10.812-8.762 19.589-19.59 19.589S1.41 32.603 1.41 21.79C1.412 10.98 10.173 2.202 21 2.202Z"
        />
        <path
          fill="#B2215A"
          d="M21 42.758c-11.583 0-21-9.4-21-20.967C0 10.208 9.417.808 21 .808s21 9.4 21 20.967c0 11.566-9.417 20.983-21 20.983Zm17.702-18.112c-.607-.197-5.545-1.657-11.172-.771 2.346 6.431 3.297 11.681 3.478 12.764 4.036-2.707 6.907-7.006 7.694-11.993Zm-10.696 13.65c-.263-1.575-1.313-7.055-3.823-13.584a.304.304 0 0 1-.115.032c-10.123 3.528-13.749 10.533-14.077 11.19A17.866 17.866 0 0 0 21 39.706a17.525 17.525 0 0 0 7.006-1.411ZM7.678 33.784c.41-.689 5.332-8.826 14.585-11.829.23-.082.476-.147.706-.213a46.698 46.698 0 0 0-1.46-3.035C12.55 21.38 3.855 21.267 3.068 21.25c0 .18-.016.36-.016.541a17.927 17.927 0 0 0 4.626 11.993ZM3.445 18.133c.804.016 8.187.049 16.587-2.182-2.97-5.283-6.185-9.713-6.645-10.353-5.036 2.363-8.777 6.99-9.942 12.535ZM16.8 4.384c.492.656 3.757 5.086 6.694 10.484 6.382-2.396 9.072-6.005 9.4-6.464A17.882 17.882 0 0 0 21 3.892c-1.444 0-2.855.18-4.2.492Zm18.08 6.087c-.378.508-3.38 4.364-10.008 7.071.41.853.82 1.723 1.198 2.592.13.312.262.624.393.919 5.972-.755 11.895.46 12.485.574a17.843 17.843 0 0 0-4.068-11.156Z"
        />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M0 .808h42v42H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
export const InstagramIcon = ({ className, ...rest }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="32"
      viewBox="0 0 42 43"
      {...rest}
    >
      <radialGradient
        id="yOrnnhliCrdS2gy~4tD8ma_Xy10Jcu1L2Su_gr1"
        cx="19.38"
        cy="42.035"
        r="44.899"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#fd5"></stop>
        <stop offset=".328" stopColor="#ff543f"></stop>
        <stop offset=".348" stopColor="#fc5245"></stop>
        <stop offset=".504" stopColor="#e64771"></stop>
        <stop offset=".643" stopColor="#d53e91"></stop>
        <stop offset=".761" stopColor="#cc39a4"></stop>
        <stop offset=".841" stopColor="#c837ab"></stop>
      </radialGradient>
      <path
        fill="url(#yOrnnhliCrdS2gy~4tD8ma_Xy10Jcu1L2Su_gr1)"
        d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"
      ></path>
      <radialGradient
        id="yOrnnhliCrdS2gy~4tD8mb_Xy10Jcu1L2Su_gr2"
        cx="11.786"
        cy="5.54"
        r="29.813"
        gradientTransform="matrix(1 0 0 .6663 0 1.849)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#4168c9"></stop>
        <stop offset=".999" stopColor="#4168c9" stopOpacity="0"></stop>
      </radialGradient>
      <path
        fill="url(#yOrnnhliCrdS2gy~4tD8mb_Xy10Jcu1L2Su_gr2)"
        d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"
      ></path>
      <path
        fill="#fff"
        d="M24,31c-3.859,0-7-3.14-7-7s3.141-7,7-7s7,3.14,7,7S27.859,31,24,31z M24,19c-2.757,0-5,2.243-5,5	s2.243,5,5,5s5-2.243,5-5S26.757,19,24,19z"
      ></path>
      <circle cx="31.5" cy="16.5" r="1.5" fill="#fff"></circle>
      <path
        fill="#fff"
        d="M30,37H18c-3.859,0-7-3.14-7-7V18c0-3.86,3.141-7,7-7h12c3.859,0,7,3.14,7,7v12	C37,33.86,33.859,37,30,37z M18,13c-2.757,0-5,2.243-5,5v12c0,2.757,2.243,5,5,5h12c2.757,0,5-2.243,5-5V18c0-2.757-2.243-5-5-5H18z"
      ></path>
    </svg>
  );
};

export const World = ({ className, ...rest }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      // xmlSpace="preserve"
      width={25}
      height={26}
      // fill="blue"
      viewBox="0 0 356.926 356.926"
      className={twMerge("w-full h-auto ", className)}
      {...rest}
    >
      <path d="M211.89 213.669c0-10.475-8.521-18.997-18.996-18.997-.401 0-.799.017-1.193.041v2.406c.396-.028.79-.061 1.193-.061 9.158 0 16.608 7.452 16.608 16.611s-7.45 16.61-16.608 16.61c-.269 0-.53-.027-.795-.041v7.129H186.2v3.182h13.388v-3.182h-5.104v-4.774c9.734-.812 17.406-8.986 17.406-18.924zM260.072 79.408l.326 2.637-3.951.837-.534 5.635h4.764l6.321-.604 3.253-3.892-3.463-1.343-1.905-2.19-2.859-4.63-1.347-6.529-5.391 1.08-1.487 2.312v2.591l2.579 1.772z" />
      <path d="m255.495 81.569.278-3.532-3.136-1.354-4.404 1.023-3.288 5.234v3.404h3.823zM164.852 96.598l-.976 2.498h-4.7v2.428h1.121s.07.511.168 1.191l2.876-.238 1.783-1.121.465-2.248 2.335-.204.912-1.888-2.138-.442-1.846.024zM152.739 101.001l-.174 2.365 3.411-.285.348-2.376-2.045-1.609z" />
      <path d="M356.868 176.633a179.671 179.671 0 0 0-.802-15.505 177.018 177.018 0 0 0-11.828-48.589c-.441-1.127-.859-2.283-1.336-3.41-8.121-19.183-19.531-36.646-33.474-51.721a161.937 161.937 0 0 0-2.765-2.916c-2.649-2.736-5.333-5.415-8.156-7.971C266.788 17.631 224.642 0 178.463 0 131.896 0 89.447 17.957 57.635 47.271c-7.413 6.832-14.221 14.303-20.408 22.285C13.919 99.717 0 137.49 0 178.463c0 98.398 80.059 178.463 178.463 178.463 69.225 0 129.316-39.643 158.897-97.399a176.73 176.73 0 0 0 16.777-49.879c1.801-10.137 2.788-20.56 2.788-31.196-.023-.593-.057-1.203-.057-1.819zm-33.59-71.327 1.022-1.162a143.83 143.83 0 0 1 3.846 8.028l-1.708-.07-3.172.436v-7.233h.012zm-25.794-31.15.023-7.971a162.178 162.178 0 0 1 8.087 9.214l-3.207 4.781-11.247-.111-.696-2.341 7.04-3.572zM82.214 54.364v-.302h3.567l.325-1.226h5.838v2.55l-1.691 2.236h-8.052v-3.259h.013zm5.711 7.959s3.578-.61 3.892-.61c.296 0 0 3.573 0 3.573l-8.081.511-1.534-1.847 5.723-1.627zm246.717 70.833h-13.06l-7.971-5.92-8.365.808v5.112h-2.648l-2.848-2.033-14.512-3.671v-9.4l-18.38 1.423-5.705 3.062h-7.285l-3.59-.36-8.854 4.926v9.254l-18.097 13.065 1.5 5.583h3.677l-.964 5.315-2.58.953-.133 13.884 15.633 17.823h6.819l.407-1.081h12.246l3.531-3.265h6.948l3.812 3.811 10.328 1.069-1.359 13.757 11.503 20.28-6.064 11.572.406 5.438 4.775 4.752v13.095l6.251 8.412v10.897h5.391c-30.046 36.913-75.823 60.534-127.026 60.534-90.312 0-163.783-73.454-163.783-163.777 0-22.732 4.665-44.401 13.077-64.089v-5.106l5.855-7.11a159.322 159.322 0 0 1 6.542-11.235l.25 2.974-6.791 8.261c-2.108 3.985-4.084 8.052-5.855 12.217v9.312l6.791 3.276v12.955l6.535 11.136 5.316.808.68-3.817-6.245-9.661-1.237-9.388h3.677l1.557 9.673 9.051 13.193-2.33 4.27 5.734 8.795 14.291 3.532v-2.306l5.711.808-.534 4.078 4.484.825 6.948 1.888 9.8 11.171 12.507.941 1.237 10.207-8.58 5.984-.39 9.115-1.237 5.588 12.386 15.5.947 5.32s4.49 1.209 5.048 1.209c.535 0 10.062 7.227 10.062 7.227v28.024l3.393.964-2.294 12.92 5.71 7.634-1.068 12.827 7.563 13.269 9.696 8.47 9.731.197.952-3.148-7.163-6.029.418-2.986 1.272-3.684.273-3.741-4.839-.14-2.44-3.066 4.021-3.881.546-2.916-4.496-1.29.261-2.719 6.402-.976 9.73-4.672 3.265-6.006 10.196-13.06-2.312-10.213 3.131-5.438 9.399.278 6.327-5.02 2.051-19.693 7.04-8.877 1.237-5.704-6.39-2.045-4.224-6.942-14.419-.145-11.444-4.351-.534-8.162-3.811-6.675-10.335-.145-5.995-9.382-5.298-2.585-.273 2.858-9.672.569-3.532-4.926-10.079-2.045-8.302 9.603-13.065-2.23-.953-14.727-9.527-1.632 3.805-7.221-1.092-4.148-12.531 8.371-7.877-.964-2.817-6.158 1.737-6.355 4.339-8.005 9.998-5.072h19.322l-.064 5.891 6.948 3.235-.558-10.062 5.007-5.037 10.103-6.64.703-4.659 10.068-10.486 10.707-5.937-.941-.773 7.256-6.826 2.655.703 1.214 1.522 2.76-3.062.68-.296-3.021-.43-3.084-.987v-2.963l1.632-1.33h3.579l1.655.726 1.418 2.858 1.737-.267v-.244l.5.163 5.02-.772.714-2.463 2.852.726v2.667l-2.666 1.818h.018l.377 2.928 9.115 2.794s0 .035.023.11l2.079-.18.146-3.939-7.209-3.282-.396-1.894 5.972-2.033.273-5.722-6.245-3.805-.412-9.667-8.581 4.218h-3.143l.837-7.355-11.688-2.748-4.816 3.654v11.119l-8.673 2.754-3.486 7.244-3.758.604v-9.277L124.11 76.3l-4.096-2.667-1.639-6.007 14.611-8.54 7.14-2.179.72 4.804 3.991-.215.308-2.411 4.166-.599.07-.842-1.784-.738-.407-2.544 5.118-.43 3.091-3.213.18-.238.035.012.941-.976 10.753-1.354 4.746 4.032-12.467 6.64 15.871 3.747 2.045-5.31h6.948l2.44-4.625-4.903-1.226v-5.856l-15.359-6.803-10.62 1.226-6.001 3.125.407 7.628-6.257-.953-.964-4.212 6.007-5.449-10.898-.535-3.125.953-1.359 3.677 4.084.686-.813 4.084-6.936.406-1.092 2.725-10.075.277s-.273-5.711-.703-5.711c-.389 0 7.901-.145 7.901-.145l5.995-5.85-3.271-1.632-4.339 4.223-7.222-.406-4.403-6.019h-9.254l-9.661 7.21h8.848l.796 2.597-2.307 2.172 9.807.279 1.487 3.532-11.032-.407-.546-2.725-6.925-1.499-3.689-2.033-8.255.069c27.043-19.699 60.284-31.358 96.226-31.358 41.403 0 79.263 15.476 108.124 40.915l-1.929 3.474-7.564 2.962-3.194 3.462.743 4.02 3.893.546 2.358 5.867 6.704-2.713 1.127 7.86h-2.045l-5.519-.819-6.111 1.022-5.926 8.377-8.458 1.319-1.221 7.25 3.579.842-1.046 4.665-8.412-1.69-7.703 1.69-1.639 4.293 1.325 9.01 4.531 2.115 7.61-.046 5.123-.465 1.58-4.078 8.018-10.422 5.264 1.081 5.193-4.7.976 3.678 12.78 8.621-1.557 2.108-5.763-.308 2.23 3.137 3.556.79 4.159-1.737-.093-5.002 1.859-.923-1.487-1.575-8.528-4.758-2.254-6.314h7.099l2.243 2.248 6.134 5.257.244 6.367 6.332 6.733 2.348-9.231 4.392-2.394.802 7.552 4.287 4.7 8.54-.139a150.819 150.819 0 0 1 4.427 12.978l-.929.834zM97.324 81.092l4.27-2.044 3.881.929-1.324 5.211-4.183 1.319-2.644-5.415zm22.749 12.258v3.37h-9.783l-3.689-1.028.918-2.341 4.7-1.94h6.437v1.94h1.417zm4.509 4.7v3.259l-2.463 1.58-3.044.575v-5.415h5.507zm-2.76-1.33v-3.893l3.363 3.067-3.363.826zm1.533 7.848v3.178l-2.347 2.347h-5.211l.813-3.573 2.463-.215.5-1.226 3.782-.511zM110.39 98.05h5.408l-6.948 9.696-2.852-1.534.616-4.084 3.776-4.078zm22.139 5.414v3.166h-5.211l-1.417-2.062v-2.951h.406l6.222 1.847zm-4.781-4.368 1.475-1.557 2.498 1.557-1.999 1.656-1.974-1.656zm209.543 42.332.511-.61c.232.93.441 1.859.662 2.789l-1.173-2.179z" />
      <path d="M27.734 109.268v5.106c1.771-4.177 3.747-8.231 5.855-12.223l-5.855 7.117z" />
    </svg>
  );
};
