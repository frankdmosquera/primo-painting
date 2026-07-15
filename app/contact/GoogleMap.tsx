// import React from "react";

// const GoogleMap: React.FC = () => {
//   return (
//     <div className=" container mx-auto py-12 ">
//       <h2 className="text-center text-[#0D378D] text-[36px] leading-[46.34px] font-semibold tracking-normal">
//         FIND US
//       </h2>
//       <div className="flex justify-center mt-8">
//         <div className="w-full md:w-10/12 sm:w-full">
//           <iframe
//             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2514.9804540011864!2d-113.95337842341479!3d50.92407857168656!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5371773f98224b4f%3A0xb012918acd574a36!2sAlberta%20Colour%20Painting%20Ltd.!5e0!3m2!1sen!2sin!4v1747742379662!5m2!1sen!2sin"
//             width="100%"
//             height="600"
//             frameBorder="0"
//             className="rounded-[40px] border-[15px] border-solid "
//             allowFullScreen
//             aria-hidden="false"
//             tabIndex={0}
//             loading="lazy"
//           ></iframe>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default GoogleMap;

"use client";

import React, { useState, useEffect, useRef } from "react";

const GoogleMap: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const mapRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.25,
      },
    );

    if (mapRef.current) {
      observer.observe(mapRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="container mx-auto py-12" ref={mapRef}>
      <h2 className="text-center text-[#0D378D] text-[36px] leading-[46.34px] font-semibold tracking-normal">
        FIND US
      </h2>
      <div className="flex justify-center mt-8 w-full">
        <div className="w-full sm:w-3/5 lg:w-1/2 h-[20rem] lg:h-[30rem]">
          {isVisible ? (
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28485.73344108164!2d-114.02428417919734!3d50.8717743312288!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x53719da9a4980f5d%3A0xcdb54d98d20b7521!2sPrimo%20Painters%20Calgary!5e0!3m2!1sen!2sca!4v1784083092850!5m2!1sen!2sca"
              width="100%"
              height="100%"
              frameBorder="0"
              loading="lazy"
              className="rounded-[40px] border-[15px] border-solid"
              allowFullScreen
              aria-hidden="false"
              tabIndex={0}
            />
          ) : (
            <div className="h-[600px] w-full bg-gray-100 flex items-center justify-center rounded-[40px] border-[15px] border-solid">
              <p className="text-gray-400">Loading map...</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default GoogleMap;
