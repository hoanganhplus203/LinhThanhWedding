"use client";

export default function Location() {
  const handleViewMap = () => {
    // Open Google Maps with the address
    const address = encodeURIComponent("431 Hoàng Văn Thụ, Phường 4, TP. Hồ Chí Minh");
    window.open(`https://www.google.com/maps/search/?api=1&query=${address}`, "_blank");
  };

  return (
    <section id="location" className="min-h-screen flex flex-col items-center justify-center bg-white px-4 py-16">
      <div className="text-center space-y-8 max-w-4xl w-full">
        <h2 className="text-3xl md:text-5xl font-bold text-black mb-8">
          Địa điểm tổ chức
        </h2>
        
        <div className="space-y-6">
          <h3 className="text-2xl md:text-3xl font-bold text-black">
            ĐỊA ĐIỂM
          </h3>
          
          <div className="space-y-4">
            <h4 className="text-xl font-semibold text-black">Tên địa điểm</h4>
            <p className="text-lg md:text-xl text-black/80">
              431 Hoàng Văn Thụ, Phường 4, TP. Hồ Chí Minh
            </p>
          </div>

          <div className="mt-8">
            <button
              onClick={handleViewMap}
              className="px-8 py-4 bg-[#FFB6D9] text-black rounded-full font-semibold hover:bg-[#FFB6D9]/80 transition-colors border-2 border-black"
            >
              Xem Chỉ Đường Trên Google Maps
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

