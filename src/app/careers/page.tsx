"use client";

import { useState, useRef } from "react";
import {
  Card,
  CardBody,
  Typography,
  Button,
  Input,
  Textarea,
  Select,
  Option,
} from "@material-tailwind/react";
import Footer from "@/components/Footer";

export default function CareersPage() {
  const vacancies = [
    {
      title: "Tutor – Software Engineering",
      deadline: "January 20, 2026",
      pdf: "/job-descriptions/Tutor Job Vacancy.pdf",
      category: "Technical",
      description:
        "We are seeking a passionate Software Engineering Tutor for our online classes. In this role, you will train and mentor learners through hands-on coding sessions and real-world software development projects. Candidates should have experience with web development languages and frameworks, including JavaScript, React, HTML & CSS, Python and Flask. Experience with version control systems and prior teaching or mentoring experience will be an added advantage.",
    },
    {
      title: "Grants & Partnerships Lead",
      deadline: "January 15, 2026",
      pdf: "/job-descriptions/Grants Job Vacancy.pdf",
      category: "Non-Technical",
      description:
        "We are seeking a dynamic Grants & Partnerships Lead to spearhead our fundraising and partnership efforts. In this role, you will identify and pursue funding opportunities, build and maintain strategic partnerships, and manage donor relationships that support the growth and sustainability of our programs. You will collaborate closely with internal teams to develop compelling proposals, track partnership performance, and strengthen Somakodi School’s impact.",
    },
  ];

  const SHEETY_URL =
    "https://api.sheety.co/5b12450aae55e55b7a0696abfc6e02df/jobapplicants/sheet1";

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    position: "",
    message: "",
    file: null as File | null,
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const filteredJobs = vacancies.filter((job) => {
    const matchesSearch =
      job.title.toLowerCase().includes(search.toLowerCase()) ||
      job.description.toLowerCase().includes(search.toLowerCase());

    const matchesFilter = filter === "All" || job.category === filter;

    return matchesSearch && matchesFilter;
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((s) => ({ ...s, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((s) => ({ ...s, file: e.target.files?.[0] || null }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.position) {
      alert("Please fill in name, email and position.");
      return;
    }

    setLoading(true);

    try {
      let resumeUrl = "";

      if (formData.file) {
        const uploadForm = new FormData();
        uploadForm.append("file", formData.file);

        const uploadRes = await fetch("/api/upload-resume", {
          method: "POST",
          body: uploadForm,
        });

        const uploadJson = await uploadRes.json();

        if (!uploadRes.ok || !uploadJson.url) {
          throw new Error("Resume upload failed");
        }

        resumeUrl = uploadJson.url;
      }

      const payload = {
        sheet1: {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          position: formData.position,
          message: formData.message,
          resume: resumeUrl,
          createdAt: new Date().toISOString(),
        },
      };

      const res = await fetch(SHEETY_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error("Sheety submission failed");

      setSubmitted(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        position: "",
        message: "",
        file: null,
      });

      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }

      setTimeout(() => setSubmitted(false), 4000);
    } catch {
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="px-4 sm:px-6 lg:px-8 pt-6 lg:pt-8">
      {/* HERO SECTION */}
      <div className="relative mb-12 lg:mb-20 border-4 border-pink-300 rounded-2xl overflow-hidden h-[260px] sm:h-[340px] lg:h-[420px]">
        <img
          src="/logos/africa.jpg"
          alt="Careers at Somakodi"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center px-4">
          <div className="bg-white/90 px-6 py-6 sm:px-10 sm:py-8 rounded-xl text-center max-w-xl shadow-lg">
            <Typography variant="h2" className="font-bold text-gray-900 mb-2">
              We’re Hiring!
            </Typography>
            <Typography className="text-gray-700 text-sm sm:text-base">
              Join Somakodi School and help shape the next generation of tech
              talent across Kenya.
            </Typography>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto">
        {/* SEARCH & FILTER */}
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end mb-10">
          <div className="flex-1">
            <Input
              label="Search for a job..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <div className="w-full lg:w-64">
            <Select
              variant="outlined"
              label="Filter by category"
              value={filter}
              onChange={(val) => setFilter(val || "All")}
            >
              <Option value="All">All</Option>
              <Option value="Technical">Technical</Option>
              <Option value="Non-Technical">Non-Technical</Option>
            </Select>
          </div>
        </div>

        {/* JOB CARDS */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 mb-16">
          {filteredJobs.map((job, i) => (
            <Card key={i}>
              <CardBody>
                <Typography variant="h5">{job.title}</Typography>
                <Typography className="text-blue-600 text-sm mb-2">
                  {job.category}
                </Typography>
                <Typography className="text-sm mb-4">
                  {job.description}
                </Typography>
                <Typography className="text-red-600 text-sm">
                  Deadline: {job.deadline}
                </Typography>

                <div className="flex gap-3 mt-6">
                  <a
                    href={job.pdf}
                    className="flex-1"
                  >
                    <Button variant="outlined" className="btn-soft">
                      View JD
                    </Button>
                  </a>
                  <Button
                    className=" btn-primary flex-1"
                    onClick={() => {
                      setFormData((s) => ({ ...s, position: job.title }));
                      document
                        .getElementById("applyForm")
                        ?.scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    Apply
                  </Button>
                </div>
              </CardBody>
            </Card>
          ))}
        </div>

        {/* APPLY SECTION */}
        <div
          id="applyForm"
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch"
        >
          <div className="border-4 border-pink-300 rounded-2xl overflow-hidden flex">
            <img
              src="/logos/together.jpg"
              alt="Join Somakodi"
              className="w-full h-full object-cover"
            />
          </div>

          <Card>
            <CardBody>
              <Typography variant="h4" className="mb-4">
                Apply for a Position
              </Typography>

              {submitted && (
                <div className="bg-green-100 text-green-700 p-3 rounded mb-4 text-center text-sm">
                  🎉 Application submitted successfully!
                </div>
              )}

              <form className="space-y-4" onSubmit={handleSubmit}>
                <Input label="Full Name" name="name" value={formData.name} onChange={handleChange} required />
                <Input label="Email" name="email" value={formData.email} onChange={handleChange} required />
                <Input label="Phone Number" name="phone" value={formData.phone} onChange={handleChange} required />

                <Select
                  label="Position Applying For"
                  value={formData.position}
                  onChange={(val) =>
                    setFormData((s) => ({ ...s, position: val || "" }))
                  }
                  required
                >
                  {vacancies.map((v, i) => (
                    <Option key={i} value={v.title}>
                      {v.title}
                    </Option>
                  ))}
                </Select>

                <Textarea
                  label="Why are you a good fit?"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                />

                <input
                  ref={fileInputRef}
                  type="file"
                  accept=".pdf,.doc,.docx"
                  onChange={handleFileChange}
                  className="text-sm"
                />

                <Button type="submit" disabled={loading} className="btn-primary">
                  {loading ? "Submitting..." : "Submit Application"}
                </Button>
              </form>
            </CardBody>
          </Card>
        </div>
      </div>

      <Footer />
    </section>
  );
}
