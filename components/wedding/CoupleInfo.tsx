import Image from "next/image";

export default function CoupleInfo() {
  return (
    <section className="flex flex-col items-center justify-center bg-gradient-to-b from-white to-[#FFB6D9]/10">
      <div className="text-center space-y-8 max-w-4xl">
        <h2 
          className="text-2xl md:text-3xl lg:text-4xl font-normal text-black mb-4"
          style={{ fontFamily: "'UTM-Cafeta', sans-serif" }}
        >
          Trân Trọng Thông Báo Lễ Thành Hôn Của
        </h2>
        <div>
          <p 
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-normal text-black mb-1"
            style={{ fontFamily: "'LuxuriousScript', sans-serif" }}
          >
            Đức Thành
          </p>
          <p 
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-normal text-black my-0"
            style={{ fontFamily: "'LuxuriousScript', sans-serif" }}
          >
            &
          </p>
          <p 
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-normal text-black mt-1"
            style={{ fontFamily: "'LuxuriousScript', sans-serif" }}
          >
            Mỹ Linh
          </p>
        </div>
        
        {/* Couple Photo */}
        <div className="mt-8 flex justify-center">
          <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg overflow-hidden shadow-lg">
            <Image
              src="/KEIY9790 (1).jpg"
              alt="Đức Thành & Mỹ Linh"
              width={600}
              height={800}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

