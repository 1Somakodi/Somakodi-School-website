"use client";

import { useSearchParams } from "next/navigation";
import { useState } from "react";
import Footer from "@/components/Footer";

export default function RegisterForm() {
  const params = useSearchParams();
  const course = params.get("course") || "Somakodi Program";

  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    location: "",
    schedule: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const sheetdbEndpoint = "https://sheetdb.io/api/v1/ilxqxwe1drya4";

    try {
      const response = await fetch(sheetdbEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          data: {
            course,
            fullName: formData.fullName,
            email: formData.email,
            phone: formData.phone,
            location: formData.location,
            schedule: formData.schedule,
          },
        }),
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        alert("Error submitting form. Please try again.");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      alert("Error submitting form. Please try again.");
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center px-6 text-center">
        <h1 className="text-3xl font-bold text-green-600">
          Application Received 🎉
        </h1>
        <p className="mt-2 text-gray-700 max-w-md">
          Thank you for applying to the <strong>{course}</strong> program at
          Somakodi School. Our Admissions Team will contact you shortly.
        </p>

        <a
          href="/"
          className="mt-6 inline-block bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition"
        >
          Back to Home
        </a>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6">
      <div className="max-w-2xl mx-auto bg-white p-10 rounded-2xl shadow-md">
        <h1 className="text-3xl font-bold text-gray-900 text-center">
          Somakodi Student Application Form
        </h1>
        <p className="text-center mt-2 text-gray-600">
          Apply today and start your journey in tech.
        </p>

        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Course Applying For
            </label>
            <input
              type="text"
              value={course}
              readOnly
              className="w-full rounded-xl border-gray-300 bg-gray-100 px-4 py-3"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">Full Name</label>
            <input
              type="text"
              name="fullName"
              required
              placeholder="Enter your full name"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full rounded-xl border-gray-300 px-4 py-3"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">Email Address</label>
            <input
              type="email"
              name="email"
              required
              placeholder="example@gmail.com"
              value={formData.email}
              onChange={handleChange}
              className="w-full rounded-xl border-gray-300 px-4 py-3"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">Phone Number</label>
            <input
              type="text"
              name="phone"
              required
              placeholder="07XX XXX XXX"
              value={formData.phone}
              onChange={handleChange}
              className="w-full rounded-xl border-gray-300 px-4 py-3"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">Location</label>
            <input
              type="text"
              name="location"
              required
              placeholder="City or town"
              value={formData.location}
              onChange={handleChange}
              className="w-full rounded-xl border-gray-300 px-4 py-3"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">Preferred Schedule</label>
            <select
              name="schedule"
              value={formData.schedule}
              onChange={handleChange}
              className="w-full rounded-xl border-gray-300 px-4 py-3"
              required
            >
              <option value="">Select schedule</option>
              <option>Weekday Classes</option>
              <option>Evening Classes</option>
              <option>Weekend Classes</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-xl text-lg font-medium hover:bg-blue-700 transition"
          >
            Submit Application
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
}
