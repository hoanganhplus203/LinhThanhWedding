export default function Footer() {
  return (
    <footer className="bg-white border-t border-[#FFB6D9]/20 py-4 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <p 
          className="text-black text-base md:text-lg"
          style={{ fontFamily: "'UTM-Cafeta', sans-serif" }}
        >
           Powered by{" "}
          <a
            href="https://www.facebook.com/ha1plus"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#FFB6D9] hover:text-[#FFB6D9]/80 transition-colors duration-200"
          >
            DuongDH
          </a>
        </p>
      </div>
    </footer>
  );
}
