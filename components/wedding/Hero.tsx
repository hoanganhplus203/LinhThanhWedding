"use client";

import { useState, useEffect, useRef, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";

function GuestInvitation() {
  const searchParams = useSearchParams();
  const guestName = searchParams.get("guest");

  if (!guestName) {
    return null;
  }

  return (
    <div className="w-4/5 mx-auto text-center">
      <p 
        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-black font-light"
        style={{ fontFamily: "'UTM-Cafeta', sans-serif" }}
      >
        Trân Trọng Kính Mời
      </p>
      <p 
        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-red-600 mt-1 font-weight-400" 
        style={{ fontFamily: "'UTM-Cafeta', sans-serif" }}
      >
        {guestName}
      </p>
      <div className="w-full border-t border-dashed border-black"></div>
    </div>
  );
}

export default function Hero() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.addEventListener('ended', () => {
        setIsPlaying(false);
      });
      
      return () => {
        audio.removeEventListener('ended', () => {
          setIsPlaying(false);
        });
      };
    }
  }, []);

  return (
    <section 
      className="relative flex flex-col items-center justify-center p-4"
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-contain bg-bottom bg-no-repeat z-0"
        style={{ backgroundImage: "url('/main-background.webp')" }}
      />
      
      {/* Content */}
      <div className="relative z-10 w-full flex flex-col items-center justify-center">
        <audio
          ref={audioRef}
          src="/五十年以后.mp3"
          loop
        />
        
        <div className="text-center space-y-6">
          <p 
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light text-black mb-2"
            style={{ fontFamily: "'UTM-Cafeta', sans-serif" }}
          >
            SAVE THE DATE
          </p>
          <h1 
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-normal text-black mb-4"
            style={{ fontFamily: "'LuxuriousScript', sans-serif" }}
          >
            Đức Thành & Mỹ Linh
          </h1>
          
          {/* Couple Photo */}
          <div className="my-6 flex justify-center">
            <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg overflow-hidden shadow-lg">
              <Image
                src="/KEIY9680 (1).jpg"
                alt="Đức Thành & Mỹ Linh"
                width={600}
                height={800}
                className="w-full h-auto object-cover"
                priority
              />
            </div>
          </div>
          
          <div className="flex items-stretch justify-center gap-4 sm:gap-6 md:gap-8">
            {/* Column 1: Time and Day */}
            <div className="flex flex-col items-center justify-center">
              <p 
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-black font-normal"
                style={{ fontFamily: "'UTM-Cafeta', sans-serif" }}
              >
                11:00
              </p>
              <p 
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-black font-normal"
                style={{ fontFamily: "'UTM-Cafeta', sans-serif" }}
              >
                Chủ Nhật
              </p>
            </div>

            {/* Column 2: Date with border separator */}
            <div className="flex items-center border-l border-black pl-4 sm:pl-6 md:pl-8">
              <p 
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-black font-normal"
                style={{ fontFamily: "'UTM-Cafeta', sans-serif" }}
              >
                29.03
              </p>
            </div>

            {/* Column 3: Year with word break */}
            <div className="flex items-center">
              <p 
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-black font-normal break-words"
                style={{ 
                  fontFamily: "'UTM-Cafeta', sans-serif",
                  wordBreak: 'break-all',
                  lineHeight: '1.2'
                }}
              >
                20<br />26
              </p>
            </div>
          </div>

          <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-black/70 mt-4">
            (Tức Ngày 11 Tháng 02 Năm Bính Ngọ)
          </p>

          {/* Guest Invitation Section */}
          <Suspense fallback={null}>
            <GuestInvitation />
          </Suspense>
        </div>
      </div>

      {/* Toggle Button - Fixed at bottom left */}
      <button
        onClick={togglePlay}
        className="fixed bottom-2 left-2 sm:bottom-3 sm:left-3 md:bottom-4 md:left-4 z-50 p-1 bg-white rounded-full shadow-lg hover:opacity-80 transition-opacity"
        aria-label={isPlaying ? "Pause music" : "Play music"}
      >
        {isPlaying ? (
          <Image
            src="/toggle-on.gif"
            alt="Toggle On"
            width={60}
            height={60}
            className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16"
            unoptimized
          />
        ) : (
          <Image
            src="/toggle-off.png"
            alt="Toggle Off"
            width={60}
            height={60}
            className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16"
          />
        )}
      </button>
    </section>
  );
}

