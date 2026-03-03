"use client";

import { useState } from "react";

export default function Gift() {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [showCode, setShowCode] = useState(false);
  const [code, setCode] = useState("");

  const bankInfo = {
    bank: "MBBANK",
    name: "NGUYEN TAN DAT",
    account: "8838683860",
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Verify code if provided
    if (code && code !== "2025") {
      alert("Mã xác nhận không đúng!");
      return;
    }

    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setSubmitted(true);
      setName("");
      setAmount("");
      setMessage("");
      setCode("");
      setIsSubmitting(false);
    }, 500);
  };

  return (
    <section id="gift" className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-white to-[#FFB6D9]/10 px-4 py-16">
      <div className="text-center space-y-8 max-w-2xl w-full">
        <h2 className="text-3xl md:text-5xl font-bold text-black mb-4">
          Gửi Mừng Cưới
        </h2>
        <p className="text-lg text-black/70 mb-8">
          | THIỆP CƯỚI ONLINE LONG THỊNH
        </p>

        <div className="bg-[#FFB6D9]/20 rounded-lg p-8 border-2 border-[#FFB6D9] space-y-4">
          <h3 className="text-xl font-bold text-black mb-4">Thông tin chuyển khoản</h3>
          <div className="text-left space-y-2 text-black">
            <p><strong>Ngân hàng:</strong> {bankInfo.bank}</p>
            <p><strong>Chủ tài khoản:</strong> {bankInfo.name}</p>
            <p><strong>Số tài khoản:</strong> {bankInfo.account}</p>
          </div>
        </div>

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
          <form onSubmit={handleSubmit} className="space-y-6 text-left">
            <div>
              <label className="block text-black font-semibold mb-2">
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
              <label className="block text-black font-semibold mb-2">
                Số tiền (tùy chọn)
              </label>
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="w-full px-4 py-3 border-2 border-black rounded-lg focus:outline-none focus:border-[#FFB6D9]"
                placeholder="Nhập số tiền (nếu có)"
              />
            </div>

            <div>
              <label className="block text-black font-semibold mb-2">
                Lời chúc mừng
              </label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={4}
                required
                className="w-full px-4 py-3 border-2 border-black rounded-lg focus:outline-none focus:border-[#FFB6D9]"
                placeholder="Nhập lời chúc mừng của bạn..."
              />
            </div>

            {showCode && (
              <div>
                <label className="block text-black font-semibold mb-2">
                  Mã xác nhận
                </label>
                <input
                  type="text"
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  className="w-full px-4 py-3 border-2 border-black rounded-lg focus:outline-none focus:border-[#FFB6D9]"
                  placeholder="Nhập mã xác nhận"
                />
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
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

