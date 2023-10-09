import React from "react";

const FeatureCenter = () => {
  return (
    <>
      <svg
        width="920"
        height="920"
        viewBox="0 0 920 920"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full lg:w-auto"
      >
        <g opacity="0.2" filter="url(#filter0_f_1_198)">
          <circle
            cx="460"
            cy="460"
            r="244"
            fill="#C0FF0D"
            fillOpacity="0.49"
          />
        </g>
        <defs>
          <filter
            id="filter0_f_1_198"
            x="0"
            y="0"
            width="920"
            height="920"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="108"
              result="effect1_foregroundBlur_1_198"
            />
          </filter>
        </defs>
      </svg>
    </>
  );
};

export default FeatureCenter;
