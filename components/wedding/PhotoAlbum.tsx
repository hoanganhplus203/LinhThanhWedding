"use client";

export default function PhotoAlbum() {
  const photos = [
    // Add photo URLs here
    "/placeholder-1.jpg",
    "/placeholder-2.jpg",
    "/placeholder-3.jpg",
    "/placeholder-4.jpg",
  ];

  return (
    <section id="album" className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-white to-[#FFB6D9]/10 px-4 py-16">
      <div className="text-center space-y-8 max-w-6xl w-full">
        <h2 className="text-3xl md:text-5xl font-bold text-black mb-12">
          Album hình cưới
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {photos.map((photo, index) => (
            <div
              key={index}
              className="aspect-square bg-[#FFB6D9]/20 rounded-lg border-2 border-[#FFB6D9] flex items-center justify-center"
            >
              <span className="text-black/40">Photo {index + 1}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

