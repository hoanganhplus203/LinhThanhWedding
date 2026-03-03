import Image from "next/image";

export default function SaveTheDate() {
  return (
    <section id="save-the-date" className="flex flex-col items-center justify-center bg-white p-4">
      <div className="text-center space-y-8 max-w-4xl">
          <p 
            className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-black/80"
            style={{ fontFamily: "'LuxuriousScript', sans-serif" }}
          >
            "Hôn nhân là chuyện cả đời,<br />
            Yêu người vừa ý, cưới người mình thương..."
          </p>

        <div className="mt-12">
          {/* Header row */}
          <div className="relative flex justify-between items-center">
            {/* Heart Image - Absolute center */}
            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
              <Image
                src="/heart.png"
                alt="Heart"
                width={150}
                height={150}
                className="w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40"
              />
            </div>
            <h3 
              className="text-lg md:text-xl lg:text-2xl font-normal text-black"
              style={{ fontFamily: "'UTM-Cafeta', sans-serif" }}
            >
              NHÀ TRAI
            </h3>
            <h3 
              className="text-lg md:text-xl lg:text-2xl font-normal text-black"
              style={{ fontFamily: "'UTM-Cafeta', sans-serif" }}
            >
              NHÀ GÁI
            </h3>
          </div>

          {/* Content row */}
          <div className="grid grid-cols-2 gap-8 md:gap-12">
            {/* Groom Side - Left */}
            <div className="space-y-4 text-left">
              <div>
                <p 
                  className="text-lg md:text-xl lg:text-2xl font-normal text-black"
                  style={{ fontFamily: "'UTM-Cafeta', sans-serif" }}
                >
                  Ông TRẦN ĐẮC THANH
                </p>
                <p 
                  className="text-lg md:text-xl lg:text-2xl font-normal text-black"
                  style={{ fontFamily: "'UTM-Cafeta', sans-serif" }}
                >
                  Bà TRẦN THỊ NHIỄU
                </p>
                <p className="text-sm md:text-base lg:text-lg text-black/60 mt-2">454 Giải Phóng <br/> P.Trường Thi <br/> T.Ninh Bình</p>
              </div>
            </div>

            {/* Bride Side - Right */}
            <div className="space-y-4 text-right">
              <div>
                <p 
                  className="text-lg md:text-xl lg:text-2xl font-normal text-black"
                  style={{ fontFamily: "'UTM-Cafeta', sans-serif" }}
                >
                  Ông ĐINH QUANG ĐẠI
                </p>
                <p 
                  className="text-lg md:text-xl lg:text-2xl font-normal text-black"
                  style={{ fontFamily: "'UTM-Cafeta', sans-serif" }}
                >
                  Bà ĐINH THỊ HƯƠNG
                </p>
                <p className="text-sm md:text-base lg:text-lg text-black/60 mt-2">Xã Giao Minh <br/> T.Ninh Bình</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

