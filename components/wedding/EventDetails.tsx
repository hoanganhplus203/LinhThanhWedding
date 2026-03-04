"use client";

import WeddingCalendar from "./WeddingCalendar";

export default function EventDetails() {
  return (
    <section className="flex flex-col items-center justify-center bg-gradient-to-b from-white to-[#FFB6D9]/10 p-4">
      <div className="text-center space-y-8 max-w-4xl w-full">
        <WeddingCalendar />
      </div>
    </section>
  );
}

