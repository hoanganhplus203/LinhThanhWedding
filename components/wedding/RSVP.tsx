"use client";

import { useState, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { supabase } from "@/lib/supabase";
import toast, { Toaster } from 'react-hot-toast';

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
  created_at: string;
}

export default function RSVP() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(true);

  // Load messages from Supabase on component mount
  useEffect(() => {
    loadMessages();
  }, []);

  const loadMessages = async () => {
    try {
      if (!supabase) {
        console.warn('Supabase client not initialized. Please check your environment variables.');
        setMessages([]);
        setLoading(false);
        return;
      }

      const { data, error } = await supabase
        .from('messages')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        // Only log error, don't show alert for loading errors
        console.warn('Error loading messages (this is normal if table does not exist yet):', {
          message: error.message,
          details: error.details,
          hint: error.hint,
          code: error.code
        });
        // If table doesn't exist or RLS issue, set empty array silently
        setMessages([]);
      } else {
        setMessages(data || []);
      }
    } catch (error: any) {
      console.error('Error loading messages:', error?.message || error);
      // Set empty array on error to prevent UI issues
      setMessages([]);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (values: { name: string; message: string }, { resetForm }: any) => {
    // Prevent submission if already submitting
    if (isSubmitting) {
      return;
    }

    setIsSubmitting(true);

    try {
      if (!supabase) {
        console.error('Supabase client not initialized');
        toast.error('Supabase chưa được cấu hình. Vui lòng kiểm tra biến môi trường.');
        setIsSubmitting(false);
        return;
      }

      const { data, error } = await supabase
        .from('messages')
        .insert([
          {
            name: values.name.trim(),
            message: values.message.trim(),
          },
        ])
        .select()
        .single();

      if (error) {
        console.error('Error submitting message:', {
          message: error.message,
          details: error.details,
          hint: error.hint,
          code: error.code
        });
        toast.error(`Có lỗi xảy ra khi gửi lời chúc: ${error.message || 'Vui lòng thử lại.'}`);
        setIsSubmitting(false);
        return;
      }

      // Add new message to the list
      if (data) {
        setMessages((prev) => [data, ...prev]);
      }

      // Show success toast
      toast.success('Cảm Ơn Lời Chúc Của Quý Khách');

      resetForm();
    } catch (error: any) {
      console.error('Error submitting message:', error?.message || error);
      if (error?.message) {
        toast.error(`Có lỗi xảy ra khi gửi lời chúc: ${error.message}`);
      } else {
        toast.error('Có lỗi xảy ra khi gửi lời chúc. Vui lòng thử lại.');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="rsvp" className="flex flex-col items-center justify-center bg-white p-4">
      <Toaster position="top-center" />
      <div className="text-center space-y-8 max-w-2xl w-full">
        <h2
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-black mb-4"
          style={{ fontFamily: "'LuxuriousScript', sans-serif" }}
        >
          Gửi Lời Chúc
        </h2>

        {/* Messages List */}
        {loading ? (
          <div className="mt-8 mb-6 text-center">
            <p className="text-gray-500" style={{ fontFamily: "'UTM-Cafeta', sans-serif" }}>
              Đang tải lời chúc...
            </p>
          </div>
        ) : messages.length > 0 ? (
          <div className="mt-8 mb-6 border-2 border-[#FFB6D9]/30 rounded-xl p-5">
            <div className="max-h-96 overflow-y-auto space-y-4 pr-2">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className="bg-[#FFB6D9]/10 border-2 border-[#FFB6D9]/30 rounded-xl p-5 text-left"
                >
                  <span
                    className="text-base text-gray-500"
                  >
                    {new Date(msg.created_at).toLocaleDateString('vi-VN', {
                      day: '2-digit',
                      month: '2-digit',
                      year: 'numeric',
                      hour: '2-digit',
                      minute: '2-digit'
                    })}
                  </span>
                  <div className="flex items-center justify-between">
                    <h4
                      className="font-semibold text-black text-base"
                    >
                      {msg.name}
                    </h4>

                  </div>
                  <p
                    className="text-black leading-relaxed text-base"
                  >
                    {msg.message}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ) : null}

        <Formik
          initialValues={{ name: "", message: "" }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting: formikSubmitting }) => (
            <Form className="space-y-6">
              <div>
                <label
                  className="block text-left text-black font-semibold mb-2 text-base"
                  style={{ fontFamily: "'UTM-Cafeta', sans-serif" }}
                >
                  Tên của bạn
                </label>
                <Field
                  type="text"
                  name="name"
                  placeholder="Nhập tên của bạn..."
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#FFB6D9] focus:ring-2 focus:ring-[#FFB6D9]/20 transition-all duration-200 bg-white text-black text-base placeholder:text-gray-500"
                  style={{ fontFamily: "'UTM-Cafeta', sans-serif" }}
                />
                <div className="text-red-500 text-sm mt-1 text-left font-medium" style={{ fontFamily: "'UTM-Cafeta', sans-serif" }}>
                  <ErrorMessage name="name" component="div" />
                </div>
              </div>

              <div>
                <label
                  className="block text-left text-black font-semibold mb-2 text-base"
                  style={{ fontFamily: "'UTM-Cafeta', sans-serif" }}
                >
                  Lời chúc
                </label>
                <Field
                  as="textarea"
                  name="message"
                  rows={5}
                  placeholder="Nhập lời chúc của bạn..."
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#FFB6D9] focus:ring-2 focus:ring-[#FFB6D9]/20 transition-all duration-200 bg-white text-black text-base placeholder:text-gray-500 resize-none"
                  style={{ fontFamily: "'UTM-Cafeta', sans-serif" }}
                />
                <div className="text-red-500 text-sm mt-1 text-left font-medium" style={{ fontFamily: "'UTM-Cafeta', sans-serif" }}>
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
      </div>
    </section>
  );
}

