"use client";

import { useState } from "react";

const EmailForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const res = await fetch("/api/send-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const data = await res.json();
    setResponseMessage(data.message);
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-6 bg-gray-800 text-white rounded-lg">
      <input type="email" name="email" placeholder="ایمیل گیرنده" onChange={handleChange} className="w-full p-2 mb-2 bg-gray-700" required />
      <input type="text" name="subject" placeholder="موضوع" onChange={handleChange} className="w-full p-2 mb-2 bg-gray-700" required />
      <textarea name="message" placeholder="پیام" onChange={handleChange} className="w-full p-2 mb-2 bg-gray-700" required />
      <button type="submit" className="bg-blue-500 p-2 w-full" disabled={loading}>
        {loading ? "در حال ارسال..." : "ارسال ایمیل"}
      </button>
      {responseMessage && <p className="mt-2">{responseMessage}</p>}
    </form>
  );
};

export default EmailForm;