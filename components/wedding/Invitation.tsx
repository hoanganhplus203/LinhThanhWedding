"use client";

export default function Invitation() {
  return (
    <section id="invitation" className="min-h-screen flex flex-col items-center justify-center bg-white px-4 py-16">
      <div className="text-center space-y-8 max-w-4xl">
        <h2 className="text-3xl md:text-5xl font-bold text-black mb-8">
          Thư Mời
        </h2>
        
        <div className="space-y-6 text-lg text-black/80 leading-relaxed">
          <p>THAM DỰ LỄ CƯỚI CƯỜNG & LIÊN</p>
          
          <div className="mt-12 space-y-4">
            <div className="text-4xl font-bold text-[#FFB6D9]">00 giờ 00</div>
            <div className="text-2xl font-semibold text-black">Năm 2025</div>
            <p className="text-lg text-black/70">
              (Tức Ngày 00 Tháng 00 Năm Ất Tỵ)
            </p>
            <p className="text-xl font-semibold text-black">Thứ</p>
            <p className="text-xl font-semibold text-black">Tháng 05</p>
            <p className="text-lg text-black/80">Vào Lúc</p>
            <p className="text-lg text-black/80">Tại ...</p>
          </div>

          <div className="mt-16 space-y-6">
            <h3 className="text-2xl font-bold text-black">LỄ THÀNH HÔN</h3>
            <h3 className="text-2xl font-bold text-black">TIỆC MỪNG LỄ THÀNH HÔN</h3>
          </div>

          <div className="mt-12 p-8 bg-[#FFB6D9]/20 rounded-lg border-2 border-[#FFB6D9]">
            <div className="text-3xl font-bold text-black mb-2">.02.2025</div>
            <div className="text-xl font-semibold text-black">THỨ 0 | 00H00</div>
            <p className="text-lg text-black/70 mt-2">
              (Tức Ngày .. Tháng .. Năm Ất Tỵ)
            </p>
            <p className="text-lg text-black/80 mt-4">Tại ...</p>
          </div>
        </div>
      </div>
    </section>
  );
}

