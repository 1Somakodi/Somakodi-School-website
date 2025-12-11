"use client";
import React, { useState } from "react";
import { Card, CardHeader, CardBody, Typography, Button } from "@material-tailwind/react";
import Image from "next/image";
import Footer from "@/components/Footer";

const scholarships = [
  {
    title: "Financial Aid",
    desc: "Our financial aid program supports learners who may not be able to afford the full course fees. Eligible students can receive up to 50% tuition fees aid, along with flexible installment payment options designed to make Somakodi tech courses accessible to everyone. Financial aid is awarded based on the applicant’s financial background and personal circumstances. Aid is available across selected Somakodi School courses, subject to availability.",
    percent: "Up to 50%",
    img: "/image/blogs/faid.jpg",
    button: "Apply",
  },
  {
    title: "PWD Scholarship",
    desc: "Eligible learners to receive up to 100% scholarship on their tuition fees, priority admission assistance, and flexible learning arrangements to ensure equal access to our programs. By supporting PWD learners, we aim to build a more inclusive tech community where everyone can thrive and contribute meaningfully. Our courses accommodate diverse needs, such as adjusted schedules, additional learning resources, and personalized assistance.",
    percent: "100%",
    img: "/image/blogs/pwd.jpg",
    button: "Apply",
  },
  {
    title: "InnovateHer",
    desc: "We are dedicated to empowering women to grow and excel in the Tech space, eligible female learners can receive up to 70% scholarship, mentorship opportunities, and a supportive learning environment. You can apply for special tuition discounts and flexible installment plans to make tech education more accessible and access to experienced female mentors, career guidance, and community support to build confidence and accelerate growth.",
    percent: "Up to 70%",
    img: "/image/blogs/Devgirl.jpg",
    button: "Apply",
  },
];

export default function ScholarshipPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    scholarship: "",
    description: "",
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validate = () => {
    let newErrors: any = {};
    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.email.trim()) newErrors.email = "Email is required";
    if (!form.scholarship.trim()) newErrors.scholarship = "Select a scholarship";
    if (!form.description.trim()) newErrors.description = "Description is required";
    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSuccess(false);
      return;
    }

    // SheetDB endpoint
    const sheetdbEndpoint = "https://sheetdb.io/api/v1/izg5vtcz0sh91";

    try {
      const response = await fetch(sheetdbEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          data: {
            name: form.name,
            email: form.email,
            scholarship: form.scholarship,
            description: form.description,
          },
        }),
      });

      if (response.ok) {
        setSuccess(true);
        setForm({ name: "", email: "", scholarship: "", description: "" });
      } else {
        alert("Error submitting form. Please try again.");
      }
    } catch (error) {
      console.error("Submission error:", error);
      alert("Error submitting form. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-20 px-4 text-center">
        <Typography variant="h2" className="font-bold mb-4">
          Making Education Accessible for All
        </Typography>
        <Typography className="text-lg w-11/12 sm:w-4/5 md:w-4/5 lg:w-4/5 mx-auto mb-6 text-justify">
          At Somakodi School, our mission is rooted in expanding access to life-changing digital skills for underserved communities. We believe that talent exists everywhere, but opportunity does not and that’s why our scholarship program is designed to remove financial barriers and open doors for passionate learners.
          Through this initiative, we aim to empower young people, women, and individuals from marginalized backgrounds with the technical training, mentorship, and career support they need to thrive in today’s digital economy. By investing in their growth, we’re building a future where innovation, opportunity, and technology are accessible to all.
        </Typography>
        <div className="absolute bottom-0 left-0 w-full h-16 bg-white rounded-t-full"></div>
      </div>

      {/* Scholarships Grid */}
      <div className="max-w-6xl mx-auto py-16 px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {scholarships.map((sch, idx) => (
          <Card key={idx} className="shadow-xl hover:shadow-2xl transition-all duration-300">
            <CardHeader className="relative h-48">
              <Image src={sch.img} alt={sch.title} fill className="object-cover rounded-t-lg" priority />
              <div className="absolute top-4 left-4 bg-purple-600 text-white px-3 py-1 rounded-lg font-bold">
                {sch.percent}
              </div>
            </CardHeader>
            <CardBody className="text-center">
              <Typography variant="h5" className="font-semibold mb-2">{sch.title}</Typography>
              <Typography className="text-gray-600 mb-6 text-justify">{sch.desc}</Typography>
              <Button size="lg"
                onClick={() => document.getElementById("apply-form")?.scrollIntoView({ behavior: "smooth" })}
                className="w-full bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-indigo-500 hover:to-purple-500"
              >
                {sch.button}
              </Button>
            </CardBody>
          </Card>
        ))}
      </div>

      {/* Form Section */}
      <div id="apply-form" className="max-w-4xl mx-auto mb-16 bg-white p-8 rounded-2xl shadow-lg">
        <Typography variant="h4" className="font-semibold mb-6 text-center">
          Apply for a Scholarship
        </Typography>

        {success && (
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6 text-center font-medium">
            🎉 Your application has been submitted successfully!
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={form.name}
                onChange={handleChange}
                className="w-full px-4 py-3 border rounded-lg focus:outline-purple-600"
              />
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
            </div>

            <div>
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={form.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border rounded-lg focus:outline-purple-600"
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>

            <div>
              <select
                name="scholarship"
                value={form.scholarship}
                onChange={handleChange}
                className="w-full px-4 py-3 border rounded-lg bg-white focus:outline-purple-600"
              >
                <option value="">Select Scholarship</option>
                <option value="Financial Aid">Financial Aid</option>
                <option value="PWD Scholarship">PWD Scholarship</option>
                <option value="InnovateHer">InnovateHer</option>
              </select>
              {errors.scholarship && <p className="text-red-500 text-sm mt-1">{errors.scholarship}</p>}
            </div>
          </div>

          <div>
            <textarea
              name="description"
              placeholder="Describe why you need this scholarship..."
              value={form.description}
              onChange={handleChange}
              rows={4}
              className="w-full px-4 py-3 border rounded-lg focus:outline-purple-600"
            ></textarea>
            {errors.description && <p className="text-red-500 text-sm mt-1">{errors.description}</p>}
          </div>

          <Button
            type="submit"
            size="lg"
            className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-indigo-500 hover:to-purple-600"
          >
            Send Application
          </Button>
        </form>
      </div>
      <Footer />
    </div>
  );
}
