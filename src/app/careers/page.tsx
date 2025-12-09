"use client";

import { useState } from "react";
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
import Link from "next/link";
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

  const filteredJobs = vacancies.filter((job) => {
    const matchesSearch =
      job.title.toLowerCase().includes(search.toLowerCase()) ||
      job.description.toLowerCase().includes(search.toLowerCase());

    const matchesFilter = filter === "All" ? true : job.category === filter;

    return matchesSearch && matchesFilter;
  });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    position: "",
    message: "",
    file: null,
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((s) => ({ ...s, [name]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files?.[0] || null;
    setFormData((s) => ({ ...s, file }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name || !formData.email || !formData.position) {
      alert("Please fill name, email and position.");
      return;
    }

    setLoading(true);

    try {
      // 1) Upload resume to Supabase via your API route (if file present)
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
          throw new Error(uploadJson?.error || "Resume upload failed");
        }

        resumeUrl = uploadJson.url;
      }

      // 2) Submit application to Sheety
      // Use the sheet's expected key. For safety we'll send under "sheet1" key since your URL ends with /sheet1
      const payload = {
        sheet1: {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          position: formData.position,
          message: formData.message,
          resume: resumeUrl,
          created_at: new Date().toISOString(),
        },
      };

      const res = await fetch(SHEETY_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const err = await res.text();
        throw new Error(err || "Failed to submit application to Sheety");
      }

      // success
      setSubmitted(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        position: "",
        message: "",
        file: null,
      });

      // clear file input UI (if you want to ensure)
      const fileInput = document.getElementById("resumeInput");
      if (fileInput) fileInput.value = "";

      setTimeout(() => setSubmitted(false), 4000);
    } catch (error) {
      console.error("Submit error:", error);
      alert("Something went wrong. Check console for details.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="px-8 py-24">
      {/* Banner */}
      <div className="text-center bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl py-12 mb-16 text-white">
        <Typography variant="h2" className="font-bold mb-3">
          🎉 We’re Hiring!
        </Typography>
        <Typography className="text-blue-100 max-w-3xl mx-auto">
          Join Somakodi School and help shape the next generation of tech talent across Kenya.
        </Typography>
      </div>

      <div className="container mx-auto max-w-5xl">
        {/* Header */}
        <div className="text-center mb-16">
          <Typography variant="h2" className="font-bold mb-4 text-blue-gray-900">
            Career Opportunities
          </Typography>
          <Typography className="text-gray-600 max-w-3xl mx-auto">
            Explore our open roles and become part of our mission to increase access to impactful tech education.
          </Typography>
        </div>

        {/* Search + Filters */}
        <div className="flex flex-col lg:flex-row items-center gap-6 mb-16">
          <Input
            label="Search for a job..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-1"
          />
          <Select
            label="Filter by category"
            value={filter}
            onChange={(value) => setFilter(value || "All")}
            className="w-full lg:w-64"
          >
            <Option value="All">All</Option>
            <Option value="Technical">Technical</Option>
            <Option value="Non-Technical">Non-Technical</Option>
          </Select>
        </div>

        {/* Vacancies */}
        {filteredJobs.length === 0 ? (
          <Typography className="text-center text-gray-500 mb-16">
            No vacancies match your search or filter.
          </Typography>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-20">
            {filteredJobs.map((job, index) => (
              <Card key={index} className="border border-gray-200 shadow-sm">
                <CardBody>
                  <Typography variant="h4" className="font-semibold mb-3">
                    {job.title}
                  </Typography>

                  <Typography className="text-blue-600 font-medium mb-3">
                    {job.category}
                  </Typography>

                  <Typography className="text-gray-700 mb-4">
                    {job.description}
                  </Typography>

                  <Typography className="font-medium text-red-600 mb-6">
                    Application Deadline: {job.deadline}
                  </Typography>

                  <div className="flex items-center gap-4">
                    <a href={job.pdf} download className="flex-1">
                      <Button color="blue-gray" className="w-full">
                        View Job Description
                      </Button>
                    </a>

                    <Button
                      color="blue"
                      className="flex-1"
                      onClick={() => {
                        // scroll to form & preselect position
                        setFormData((s) => ({ ...s, position: job.title }));
                        const el = document.getElementById("applyForm");
                        el?.scrollIntoView({ behavior: "smooth" });
                      }}
                    >
                      Apply Below
                    </Button>
                  </div>
                </CardBody>
              </Card>
            ))}
          </div>
        )}

        {/* Application Form */}
        <div id="applyForm" className="max-w-3xl mx-auto">
          <Card className="shadow-md border border-gray-200">
            <CardBody>
              <Typography variant="h3" className="mb-6 font-bold">
                Apply for a Position
              </Typography>

              {submitted && (
                <div className="bg-green-100 text-green-700 px-4 py-3 rounded-lg mb-6 text-sm text-center">
                  🎉 Your application has been submitted successfully!
                </div>
              )}

              <form className="space-y-6" onSubmit={handleSubmit}>
                <Input
                  label="Full Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <Input
                  label="Email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <Input
                  label="Phone Number"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />

                <Select
                  label="Position Applying For"
                  value={formData.position}
                  onChange={(val) => setFormData((s) => ({ ...s, position: val || "" }))}
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
                  required
                />

                <div>
                  <label className="block mb-2 font-medium">Upload Resume (PDF / DOC)</label>
                  <input
                    id="resumeInput"
                    type="file"
                    accept=".pdf,.doc,.docx"
                    onChange={handleFileChange}
                    className="w-full"
                  />
                </div>

                <Button type="submit" color="blue" className="w-full" disabled={loading}>
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
