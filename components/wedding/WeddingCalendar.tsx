"use client";

import { useEffect, useRef } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import type { DayCellContentArg } from "@fullcalendar/core";
import Image from "next/image";

export default function WeddingCalendar() {
  const calendarRef = useRef<FullCalendar>(null);

  useEffect(() => {
    // Set calendar to March 2026
    if (calendarRef.current) {
      const calendarApi = calendarRef.current.getApi();
      calendarApi.gotoDate("2026-03-01");
    }
  }, []);

  // Custom day cell content
  const dayCellContent = (dayInfo: DayCellContentArg) => {
    const date = dayInfo.date;
    const dayNumber = date.getDate();
    const isMarch29 = date.getMonth() === 2 && dayNumber === 29; // Month is 0-indexed, March = 2

    return (
      <div className="relative w-full h-full flex items-center justify-center">
        <span className={`wc-cal-day-span ${isMarch29 ? "font-bold" : ""}`}>{dayNumber}</span>
      </div>
    );
  };

  // Custom day cell class names
  const dayCellClassNames = (dayInfo: any) => {
    const date = dayInfo.date;
    const classes: string[] = [];
    
    if (date.getMonth() === 2 && date.getDate() === 29) {
      classes.push("wc-cal-day--selected");
    }
    
    return classes;
  };

  return (
    <div className="wc-cal-outer bg-white md:p-8 rounded-lg max-w-4xl mx-auto">
      {/* Header */}
      <div className="wc-cal-head text-center mb-6">
        <div className="text-3xl md:text-4xl lg:text-6xl xl:text-7xl 2xl:text-8xl text-black mb-2">
          SAVE THE DATE
        </div>
        <div className="text-2xl md:text-3xl lg:text-5xl xl:text-6xl 2xl:text-7xl text-black">
          THÁNG 3 - 2026
        </div>
      </div>

      {/* Calendar */}
      <div className="wc-cal" id="wc-cal-target">
        <div className="wc-cal-frame">
          {/* Custom header row - fixed header */}
          <div className="wc-cal-grid-header grid grid-cols-7 border-b border-gray-200">
            {["T2", "T3", "T4", "T5", "T6", "T7", "CN"].map((day, index) => (
              <div 
                key={index}
                className="wc-cal-dow bg-[#FFB6D9] py-3 text-center font-bold text-sm md:text-base lg:text-lg xl:text-xl text-black"
              >
                {day}
              </div>
            ))}
          </div>
          
          <FullCalendar
            ref={calendarRef}
            plugins={[dayGridPlugin]}
            initialView="dayGridMonth"
            initialDate="2026-03-01"
            headerToolbar={false}
            height="auto"
            firstDay={1}
            dayCellContent={dayCellContent}
            dayCellClassNames={dayCellClassNames}
            fixedWeekCount={false}
            showNonCurrentDates={false}
          />
        </div>
      </div>
    </div>
  );
}

