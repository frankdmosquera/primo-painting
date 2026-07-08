"use client";

import { InlineWidget } from "react-calendly";

export default function Calendly() {
  return (
    <div className="relative h-[calc(100vh-4rem)] calendly-widget">
      <div className="absolute inset-0 flex flex-col items-center justify-center   text-white">
        <div className="animate-spin text-3xl mb-4">⏳</div>
        <p className="text-lg font-medium">Loading calendar, please wait…</p>
      </div>
      <div className="h-full relative z-2">
        <InlineWidget
          // url='https://calendly.com/alberta-colour-painting/booking?hide_gdpr_banner=1'
          url="https://calendly.com/primo-painting/30min?hide_gdpr_banner=1"
          styles={{ minWidth: "320px", height: "100%" }}
        />
      </div>
    </div>
  );
}
