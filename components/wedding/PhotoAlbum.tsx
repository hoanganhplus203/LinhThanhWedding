"use client";

import Image from "next/image";

export default function PhotoAlbum() {
  const photos = [
    "/DNG_1249.jpg",
    "/KEIY9700 (1).jpg",
    "/KEIY9624_(2) (1).jpg",
    "/DNG_1564.jpg",
    "/DNG_1295.jpg",
    "/DNG_1526.jpg",
    "/KEIY9891 (1).jpg",
    "/KEIY9797 (1).jpg",
  ];

  return (
    <section id="album" className="flex flex-col items-center justify-center bg-gradient-to-b from-white to-[#FFB6D9]/10 px-4 py-16">
      <div className="text-center space-y-8 max-w-6xl w-full">
        <div className="flex items-center justify-center gap-4 w-full">
          <h2 
            className="text-3xl md:text-5xl font-bold text-black whitespace-nowrap flex-shrink-0"
            style={{ fontFamily: "'LuxuriousScript', sans-serif" }}
          >
            Album ảnh cưới
          </h2>
          <div className="flex-1 relative" style={{ height: '57.72px' }}>
            <Image
              src="/line-heart.webp"
              alt=""
              width={493}
              height={58}
              className="w-full h-full object-cover"
              style={{ 
                objectPosition: 'center center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
              }}
            />
          </div>
        </div>
        
        <div className="space-y-4">
          {/* Row 1: Photos 1, 2 - same width and height */}
          <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
            <div className="aspect-[3/4] rounded-lg overflow-hidden hover:scale-[1.02] transition-transform duration-300 cursor-pointer shadow-md hover:shadow-lg relative bg-gray-200">
              <Image
                src={photos[0]}
                alt="Wedding photo 1"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 50vw"
              />
            </div>
            
            <div className="aspect-[3/4] rounded-lg overflow-hidden hover:scale-[1.02] transition-transform duration-300 cursor-pointer shadow-md hover:shadow-lg relative bg-gray-200">
              <Image
                src={photos[1]}
                alt="Wedding photo 2"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 50vw"
              />
            </div>
          </div>

          {/* Row 2: Photos 3, 4, 5 */}
          <div className="grid grid-cols-2 md:grid-cols-2 gap-4 items-center">
            <div className="aspect-[2/3] rounded-lg overflow-hidden hover:scale-[1.02] transition-transform duration-300 cursor-pointer shadow-md hover:shadow-lg relative bg-gray-200 self-center">
              <Image
                src={photos[2]}
                alt="Wedding photo 3"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 50vw"
              />
            </div>
            
            <div className="flex flex-col gap-4 items-center justify-center">
              <div className="aspect-[3/2] w-full rounded-lg overflow-hidden hover:scale-[1.02] transition-transform duration-300 cursor-pointer shadow-md hover:shadow-lg relative bg-gray-200">
                <Image
                  src={photos[3]}
                  alt="Wedding photo 4"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 50vw"
                />
              </div>
              <div className="aspect-[3/2] w-full rounded-lg overflow-hidden hover:scale-[1.02] transition-transform duration-300 cursor-pointer shadow-md hover:shadow-lg relative bg-gray-200">
                <Image
                  src={photos[4]}
                  alt="Wedding photo 5"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 50vw"
                />
              </div>
            </div>
          </div>

          {/* Row 3: Photos 6, 7 - same width and height */}
          <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
            <div className="aspect-[3/4] rounded-lg overflow-hidden hover:scale-[1.02] transition-transform duration-300 cursor-pointer shadow-md hover:shadow-lg relative bg-gray-200">
              <Image
                src={photos[5]}
                alt="Wedding photo 6"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 50vw"
              />
            </div>
            
            <div className="aspect-[3/4] rounded-lg overflow-hidden hover:scale-[1.02] transition-transform duration-300 cursor-pointer shadow-md hover:shadow-lg relative bg-gray-200">
              <Image
                src={photos[6]}
                alt="Wedding photo 7"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 50vw"
              />
            </div>
          </div>

          {/* Photo 8: Full width and taller */}
          <div className="w-full aspect-[16/14] rounded-lg overflow-hidden hover:scale-[1.02] transition-transform duration-300 cursor-pointer shadow-md hover:shadow-lg relative bg-gray-200">
            <Image
              src={photos[7]}
              alt="Wedding photo 8"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 100vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

