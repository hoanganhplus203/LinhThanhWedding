"use client";

import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  name: Yup.string()
    .required("Tên là bắt buộc"),
  message: Yup.string()
    .required("Lời chúc là bắt buộc"),
});

interface Message {
  id: number;
  name: string;
  message: string;
  timestamp: Date;
}

export default function RSVP() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);

  const handleSubmit = async (values: { name: string; message: string }, { resetForm }: any) => {
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      const newMessage: Message = {
        id: Date.now(),
        name: values.name,
        message: values.message,
        timestamp: new Date(),
      };
      setMessages((prev) => [newMessage, ...prev]);
      setSubmitted(true);
      setIsSubmitting(false);
      resetForm();
      
      // Reset submitted state after 2 seconds to show form again
      setTimeout(() => {
        setSubmitted(false);
      }, 2000);
    }, 500);
  };

  return (
    <section id="rsvp" className="flex flex-col items-center justify-center bg-white p-4">
      <div className="text-center space-y-8 max-w-2xl w-full">
        <h2 
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-black mb-4"
          style={{ fontFamily: "'LuxuriousScript', sans-serif" }}
        >
          Gửi Lời Chúc
        </h2>

        {/* Messages List */}
        {messages.length > 0 && (
          <div className="mt-8 mb-6">
            <div className="max-h-96 overflow-y-auto space-y-4 pr-2">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className="bg-[#FFB6D9]/10 border-2 border-[#FFB6D9]/30 rounded-xl p-5 text-left"
                >
                  <div className="flex items-center justify-between mb-2">
                    <h4 
                      className="font-semibold text-black text-lg"
                      style={{ fontFamily: "'UTM-Cafeta', sans-serif" }}
                    >
                      {msg.name}
                    </h4>
                    <span 
                      className="text-xs text-gray-500"
                      style={{ fontFamily: "'UTM-Cafeta', sans-serif" }}
                    >
                      {msg.timestamp.toLocaleDateString('vi-VN', {
                        day: '2-digit',
                        month: '2-digit',
                        year: 'numeric',
                        hour: '2-digit',
                        minute: '2-digit'
                      })}
                    </span>
                  </div>
                  <p 
                    className="text-black leading-relaxed"
                    style={{ fontFamily: "'UTM-Cafeta', sans-serif" }}
                  >
                    {msg.message}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

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
          <Formik
            initialValues={{ name: "", message: "" }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting: formikSubmitting }) => (
              <Form className="space-y-6">
                <div>
                  <label 
                    className="block text-left text-black font-medium mb-3 text-lg"
                    style={{ fontFamily: "'UTM-Cafeta', sans-serif" }}
                  >
                    Tên của bạn
                  </label>
                  <Field
                    type="text"
                    name="name"
                    placeholder="Nhập tên của bạn..."
                    className="w-full px-5 py-4 border-2 border-[#FFB6D9]/30 rounded-xl focus:outline-none focus:border-[#FFB6D9] focus:ring-2 focus:ring-[#FFB6D9]/20 transition-all duration-200 bg-white text-black placeholder:text-gray-400"
                    style={{ fontFamily: "'UTM-Cafeta', sans-serif" }}
                  />
                  <div className="text-[#FFB6D9] text-sm mt-2 text-left font-medium" style={{ fontFamily: "'UTM-Cafeta', sans-serif" }}>
                    <ErrorMessage name="name" component="div" />
                  </div>
                </div>

                <div>
                  <label 
                    className="block text-left text-black font-medium mb-3 text-lg"
                    style={{ fontFamily: "'UTM-Cafeta', sans-serif" }}
                  >
                    Lời chúc
                  </label>
                  <Field
                    as="textarea"
                    name="message"
                    rows={5}
                    placeholder="Nhập lời chúc của bạn..."
                    className="w-full px-5 py-4 border-2 border-[#FFB6D9]/30 rounded-xl focus:outline-none focus:border-[#FFB6D9] focus:ring-2 focus:ring-[#FFB6D9]/20 transition-all duration-200 bg-white text-black placeholder:text-gray-400 resize-none"
                    style={{ fontFamily: "'UTM-Cafeta', sans-serif" }}
                  />
                  <div className="text-[#FFB6D9] text-sm mt-2 text-left font-medium" style={{ fontFamily: "'UTM-Cafeta', sans-serif" }}>
                    <ErrorMessage name="message" component="div" />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting || formikSubmitting}
                  className="w-full px-6 py-3 bg-[#FFB6D9] text-white rounded-lg font-semibold hover:bg-[#FFB6D9]/80 transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-base"
                >
                  {isSubmitting ? "Đang gửi..." : "GỬI NGAY"}
                </button>
              </Form>
            )}
          </Formik>
        )}
      </div>
    </section>
  );
}

