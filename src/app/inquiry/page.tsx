"use client";

import { useState } from "react";
import {
  Typography,
  Input,
  Textarea,
  Button,
} from "@material-tailwind/react";

const SHEETDB_URL = "https://sheetdb.io/api/v1/yt8ui4z1adyfs";

export default function InquiryPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [captcha, setCaptcha] = useState("");
  const [captchaCode, setCaptchaCode] = useState(
    Math.random().toString(36).substring(2, 8).toUpperCase()
  );
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Email validation
    if (!validateEmail(formData.email)) {
      setError("Please enter a valid email address");
      return;
    }

    // Captcha validation
    if (captcha.toUpperCase() !== captchaCode) {
      setError("Captcha does not match");
      return;
    }

    setError("");
    setLoading(true);

    try {
      await fetch(SHEETDB_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          data: {
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            subject: formData.subject,
            message: formData.message,
            submitted_at: new Date().toISOString(),
          },
        }),
      });

      setSubmitted(true);
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
      setCaptcha("");
      setCaptchaCode(Math.random().toString(36).substring(2, 8).toUpperCase());
    } catch (err) {
      console.error("Error sending to SheetDB:", err);
      setError("There was an error submitting the form. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-12">
      {/* Sidebar */}
      <div className="md:col-span-1 bg-gray-50 p-6 rounded-lg shadow-md">
        <Typography variant="h5" className="mb-4">
          Contact Info
        </Typography>
        <div className="mb-3">
          <Typography className="font-semibold">Email:</Typography>
          <Typography>info.somakodi@gmail.com</Typography>
        </div>
        <div className="mb-3">
          <Typography className="font-semibold">Phone:</Typography>
          <Typography>+254 710 350 885</Typography>
        </div>
        <div className="mb-3">
          <Typography className="font-semibold">Address:</Typography>
          <Typography>Delta Towers Waiyaki Way, Nairobi, Kenya</Typography>
        </div>
        <div className="mt-6">
          <Typography className="font-semibold">Working Hours:</Typography>
          <Typography>Mon - Fri: 8:00 AM - 6:00 PM</Typography>
        </div>
      </div>

      {/* Form */}
      <div className="md:col-span-2 bg-white p-6 rounded-lg shadow-md">
        <Typography variant="h2" color="blue-gray" className="text-center mb-6">
          Send Us an Inquiry
        </Typography>
        <Typography variant="lead" className="text-center text-gray-600 mb-6">
          Fill out the form and we'll get back to you shortly.
        </Typography>

        {submitted && (
          <div className="mb-4 p-4 bg-green-100 text-green-800 rounded">
            Your inquiry has been submitted successfully!
          </div>
        )}

        {error && (
          <div className="mb-4 p-4 bg-red-100 text-red-800 rounded">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="grid gap-6">
          <div className="grid md:grid-cols-2 gap-6">
            <Input
              label="Full Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <Input
              label="Email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <Input
            label="Phone Number"
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />

          <Input
            label="Subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
          />

          <Textarea
            label="Message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />

          {/* Captcha */}
          <div className="flex items-center gap-4">
            <div className="bg-gray-200 p-3 rounded font-mono text-xl tracking-widest select-none">
              {captchaCode}
            </div>
            <Input
              label="Enter Captcha"
              name="captcha"
              value={captcha}
              onChange={(e) => setCaptcha(e.target.value)}
              required
            />
          </div>

          <Button
            type="submit"
            className="btn-primary w-full"
            disabled={loading}
          >
            {loading ? "Submitting..." : "Submit Inquiry"}
          </Button>
        </form>
      </div>
    </section>
  );
}
