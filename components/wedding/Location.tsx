"use client";

import Image from "next/image";

export default function Location() {
  const handleViewMap = () => {
    // Open Google Maps with the address
    const address = encodeURIComponent("431 Hoàng Văn Thụ, Phường 4, TP. Hồ Chí Minh");
    window.open(`https://www.google.com/maps/search/?api=1&query=${address}`, "_blank");
  };

  return (
    <section id="location" className="flex flex-col items-center justify-center bg-white p-4">
      <div className="text-center space-y-8 max-w-4xl w-full">
        {/* Location Icon - positioned to the right */}
        <div className="flex justify-end w-full mb-4">
          <div className="relative w-[280px] h-[33px] sm:w-[320px] sm:h-[38px] md:w-[350px] md:h-[41px]">
            <Image
              src="/location-icon.webp"
              alt="Location Icon"
              fill
              className="object-contain"
            />
          </div>
        </div>
        
        <h2 className="text-2xl md:text-3xl font-bold text-white bg-[#FFB6D9] -mx-4 px-4 py-4 flex items-center gap-2 justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 md:w-6 md:h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
          </svg>
          Địa Điểm Tổ Chức
        </h2>
        
        <div className="space-y-6">  
          <div className="space-y-4">
            <h4 className="text-xl md:text-2xl font-semibold text-black text-center">NHÀ HÀNG TRỐNG ĐỒNG PALACE 
            </h4>
          </div>
          <div className="flex items-center justify-center gap-2">
            <p className="text-lg md:text-xl text-black/80">
              Số 30 Trần Phú, KĐT Dệt May, T.Ninh Bình
            </p>
          </div>

          <div className="mt-8 flex justify-center">
            <a
              href="https://maps.app.goo.gl/gtibSSXxr7FGwuoJ9"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-2 bg-[#FFB6D9] text-white rounded-full font-semibold hover:bg-[#FFB6D9]/80 transition-colors"
            >
              Xem Chỉ Đường
            </a>
          </div>

          {/* Map Embed */}
            <div className="mt-8 w-full px-4 flex justify-center">
              <div className="relative w-full max-w-4xl h-[300px] sm:h-[400px] md:h-[500px]">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3739.024948733807!2d106.16920287612525!3d20.42305450830493!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135e125738550d5%3A0x6ae4e580545d2597!2zVHLhu5FuZyDEkOG7k25nIFBhbGFjZQ!5e0!3m2!1svi!2s!4v1772561447208!5m2!1svi!2s" 
              width="600" 
              height="450" 
              allowFullScreen
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            ></iframe>
            </div>
            </div>

        </div>
      </div>
    </section>
  );
}

