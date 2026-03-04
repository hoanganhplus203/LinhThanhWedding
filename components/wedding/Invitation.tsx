"use client";

import Image from "next/image";

export default function Invitation() {
  return (
    <section id="invitation" className="flex flex-col items-center justify-center bg-white px-4 py-8">
      <div className="text-center space-y-8 max-w-4xl">
        <div className="flex flex-col items-center">
          <div className="w-2/5 border-t border-black mb-4"></div>
          <h2 
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-normal text-black"
            style={{ fontFamily: "'LuxuriousScript', sans-serif" }}
          >
            Thư Mời
          </h2>
        </div>
        
        <div className="space-y-6 text-lg text-black/80 leading-relaxed">
          {/* Text and Image Gallery - on 2 lines */}
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:gap-6">
            <p className="text-lg md:text-xl lg:text-4xl text-center text-black/80 whitespace-nowrap">
              THAM DỰ LỄ CƯỚI ĐỨC THÀNH & MỸ LINH
            </p>
            <div className="flex flex-row items-center justify-center gap-2 sm:gap-3 md:gap-4">
              <div className="relative w-28 sm:w-40 md:w-52 lg:w-64 aspect-[3/4] overflow-hidden">
                <Image
                  src="/DNG_1046.jpg"
                  alt="Wedding Photo 1"
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 112px, (max-width: 768px) 160px, (max-width: 1024px) 208px, 256px"
                />
              </div>
              <div className="relative w-44 sm:w-64 md:w-80 lg:w-96 aspect-[3/4] overflow-hidden">
                <Image
                  src="/DNG_1303.jpg"
                  alt="Wedding Photo 2"
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 176px, (max-width: 768px) 256px, (max-width: 1024px) 320px, 384px"
                />
              </div>
              <div className="relative w-28 sm:w-40 md:w-52 lg:w-64 aspect-[3/4] overflow-hidden">
                <Image
                  src="/DNG_1521.jpg"
                  alt="Wedding Photo 3"
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 112px, (max-width: 768px) 160px, (max-width: 1024px) 208px, 256px"
                />
              </div>
            </div>
          </div>
          
          {/* Time format matching Hero.tsx */}
          <div className="mt-12 flex items-stretch justify-center gap-4 sm:gap-6 md:gap-8">
            {/* Column 1: Time only */}
            <div className="flex items-center justify-center flex-1">
              <p 
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-black font-light"
                style={{ fontFamily: "'UTM-Cafeta', sans-serif" }}
              >
                11 giờ 00
              </p>
            </div>

            {/* Column 2: Day and Date - 3 columns layout with border separator */}
            <div className="flex flex-col items-center justify-center gap-1 border-l border-black pl-4 sm:pl-6 md:pl-8 flex-1">
              <p 
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-black font-light"
                style={{ fontFamily: "'UTM-Cafeta', sans-serif" }}
              >
                Chủ Nhật
              </p>
              <p 
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-black font-light"
                style={{ fontFamily: "'UTM-Cafeta', sans-serif" }}
              >
                29
              </p>
              <p 
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-black font-light"
                style={{ fontFamily: "'UTM-Cafeta', sans-serif" }}
              >
                Tháng 3
              </p>
            </div>

            {/* Column 3: Year with border separator */}
            <div className="flex items-center border-l border-black pl-4 sm:pl-6 md:pl-8 flex-1">
              <p 
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-black font-light"
                style={{ fontFamily: "'UTM-Cafeta', sans-serif" }}
              >
                Năm 2026
              </p>
            </div>
          </div>

          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-black/70 mt-4">
            (Tức Ngày 11 Tháng 02 Năm Bính Ngọ)
          </p>

          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-black/80 mt-6 font-bold">
            TẠI: NHÀ HÀNG TRỐNG ĐỒNG PALACE
          </p>

        </div>
      </div>
    </section>
  );
}

