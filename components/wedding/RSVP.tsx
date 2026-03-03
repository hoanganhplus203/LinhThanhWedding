"use client";

import { useState } from "react";

export default function RSVP() {
  const [name, setName] = useState("");
  const [attendance, setAttendance] = useState<"yes" | "no" | null>(null);
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setSubmitted(true);
      setName("");
      setAttendance(null);
      setMessage("");
      setIsSubmitting(false);
    }, 500);
  };

  return (
    <section id="rsvp" className="min-h-screen flex flex-col items-center justify-center bg-white px-4 py-16">
      <div className="text-center space-y-8 max-w-2xl w-full">
        <h2 className="text-3xl md:text-5xl font-bold text-black mb-4">
          Xác Nhận Tham Dự
        </h2>
        <p className="text-lg text-black/70 mb-8">
          Rất hân hạnh được đón tiếp!
        </p>

        {submitted ? (
          <div className="p-8 bg-[#FFB6D9]/20 rounded-lg border-2 border-[#FFB6D9] space-y-4">
            <h3 className="text-2xl font-bold text-black mb-2">Thank You!</h3>
            <p className="text-lg text-black font-semibold">
              Cảm Ơn Quý Khách Đã Phản Hồi,
            </p>
            <p className="text-lg text-black font-semibold">
              Rất Hân Hạnh Được Đón Tiếp!
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-left text-black font-semibold mb-2">
                Tên của bạn
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full px-4 py-3 border-2 border-black rounded-lg focus:outline-none focus:border-[#FFB6D9]"
              />
            </div>

            <div>
              <label className="block text-left text-black font-semibold mb-4">
                Bạn Có Tham Dự Không?
              </label>
              <div className="flex gap-4">
                <button
                  type="button"
                  onClick={() => setAttendance("yes")}
                  className={`flex-1 px-6 py-3 rounded-lg font-semibold transition-colors ${
                    attendance === "yes"
                      ? "bg-[#FFB6D9] text-black border-2 border-black"
                      : "bg-white text-black border-2 border-black hover:bg-[#FFB6D9]/20"
                  }`}
                >
                  Có Thể Tham Dự
                </button>
                <button
                  type="button"
                  onClick={() => setAttendance("no")}
                  className={`flex-1 px-6 py-3 rounded-lg font-semibold transition-colors ${
                    attendance === "no"
                      ? "bg-[#FFB6D9] text-black border-2 border-black"
                      : "bg-white text-black border-2 border-black hover:bg-[#FFB6D9]/20"
                  }`}
                >
                  Không Thể Tham Dự
                </button>
              </div>
            </div>

            <div>
              <label className="block text-left text-black font-semibold mb-2">
                Lời nhắn (tùy chọn)
              </label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={4}
                className="w-full px-4 py-3 border-2 border-black rounded-lg focus:outline-none focus:border-[#FFB6D9]"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting || !attendance}
              className="w-full px-8 py-4 bg-black text-white rounded-lg font-semibold hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Đang gửi..." : "GỬI NGAY"}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

