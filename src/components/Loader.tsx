import React, { useEffect, useState } from "react";
import Logo from "./Logo";
import { AnimatePresence, motion } from "framer-motion";

function Loader({ isLoading, setIsLoading }: any) {
  useEffect(() => {
    setTimeout(() => {
      setIsLoading();
    }, 1900);
  }, [setIsLoading]);
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="loader"
          exit={{ scale: 0 }}
          key="motiondivleave"
          transition={{
            duration: 0.45,
            ease: "easeInOut",
          }}
        >
          <motion.svg
            id="logo"
            width="100"
            height="100"
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Logo</title>
            <g>
              <g id="S" transform="translate(35.000000, 35.000000)">
                <motion.path
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    duration: 1,
                    ease: "easeInOut",
                    delay: 1,
                  }}
                  exit={{
                    scale: 2,
                  }}
                  d="M302 389.75C289.167 389.75 277.667 387.667 267.5 383.5C257.333 379.333 249.167 373.167 243 365C237 356.833 233.833 347 233.5 335.5H279C279.667 342 281.917 347 285.75 350.5C289.583 353.833 294.583 355.5 300.75 355.5C307.083 355.5 312.083 354.083 315.75 351.25C319.417 348.25 321.25 344.167 321.25 339C321.25 334.667 319.75 331.083 316.75 328.25C313.917 325.417 310.333 323.083 306 321.25C301.833 319.417 295.833 317.333 288 315C276.667 311.5 267.417 308 260.25 304.5C253.083 301 246.917 295.833 241.75 289C236.583 282.167 234 273.25 234 262.25C234 245.917 239.917 233.167 251.75 224C263.583 214.667 279 210 298 210C317.333 210 332.917 214.667 344.75 224C356.583 233.167 362.917 246 363.75 262.5H317.5C317.167 256.833 315.083 252.417 311.25 249.25C307.417 245.917 302.5 244.25 296.5 244.25C291.333 244.25 287.167 245.667 284 248.5C280.833 251.167 279.25 255.083 279.25 260.25C279.25 265.917 281.917 270.333 287.25 273.5C292.583 276.667 300.917 280.083 312.25 283.75C323.583 287.583 332.75 291.25 339.75 294.75C346.917 298.25 353.083 303.333 358.25 310C363.417 316.667 366 325.25 366 335.75C366 345.75 363.417 354.833 358.25 363C353.25 371.167 345.917 377.667 336.25 382.5C326.583 387.333 315.167 389.75 302 389.75Z"
                  fill="#daf7a6"
                />
              </g>
              <motion.path
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{
                  duration: 1,
                  ease: "easeInOut",
                }}
                exit={{
                  scale: 2,
                }}
                stroke="#daf7a6"
                strokeWidth="5"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M 50, 5
          L 11, 27
          L 11, 72
          L 50, 95
          L 89, 73
          L 89, 28 z"
              />
            </g>
          </motion.svg>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Loader;
