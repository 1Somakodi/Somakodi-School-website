"use client";
import React, { useState } from "react";
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

  const filteredJobs = vacancies.filter((job) => {
    const matchesSearch =
      job.title.toLowerCase().includes(search.toLowerCase()) ||
      job.description.toLowerCase().includes(search.toLowerCase());

    const matchesFilter = filter === "All" ? true : job.category === filter;

    return matchesSearch && matchesFilter;
  });

  const [formData, setFormData] = useState<{
    name: string;
    email: string;
    phone: string;
    position: string;
    message: string;
    file: File | null;
  }>({
    name: "",
    email: "",
    phone: "",
    position: "",
    message: "",
    file: null,
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((s) => ({ ...s, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((s) => ({ ...s, file: e.target.files?.[0] || null }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

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
        resumeUrl = uploadJson.url;
      }

      await fetch(SHEETY_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          sheet1: {
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            position: formData.position,
            message: formData.message,
            resume: resumeUrl,
            created_at: new Date().toISOString(),
          },
        }),
      });

      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3000);
    } catch (err) {
      console.error(err);
    }

    setLoading(false);
  };

  return (
    <>
      <section className="px-8 py-24">
        <div className="max-w-5xl mx-auto">
          <Typography variant="h2" className="font-bold mb-8">
            Careers at Somakodi
          </Typography>

          {/* Search + Filter */}
          <div className="flex gap-4 mb-10">
            <Input
              label="Search jobs"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />

            <Select
              label="Filter"
              value={filter}
              onChange={(v) => setFilter(v || "All")}
            >
              <Option value="All">All</Option>
              <Option value="Technical">Technical</Option>
              <Option value="Non-Technical">Non-Technical</Option>
            </Select>
          </div>

          {/* Job Cards */}
          <div className="grid gap-8">
            {filteredJobs.map((job, i) => (
              <Card key={i} className="border border-gray-200 shadow-sm">
                <CardBody>
                  <Typography variant="h4" className="font-semibold">
                    {job.title}
                  </Typography>

                  <Typography className="text-gray-700 mt-2">
                    {job.description}
                  </Typography>

                  <Typography className="text-sm text-gray-500 mt-2">
                    Deadline: {job.deadline}
                  </Typography>

                  <a
                    href={job.pdf}
                    target="_blank"
                    className="text-blue-600 underline block mt-3"
                  >
                    View Job Description
                  </a>
                </CardBody>
              </Card>
            ))}
          </div>

          {/* Application Form */}
          <div className="mt-16">
            <Typography variant="h3" className="font-semibold mb-6">
              Apply Now
            </Typography>

            <form className="grid gap-6" onSubmit={handleSubmit}>
              <Input
                label="Full Name"
                name="name"
                onChange={handleChange}
                required
              />
              <Input
                label="Email"
                name="email"
                onChange={handleChange}
                required
              />
              <Input label="Phone" name="phone" onChange={handleChange} />

              <Select
                label="Position"
                value={formData.position}
                onChange={(v) => setFormData({ ...formData, position: v || "" })}
              >
                {vacancies.map((job) => (
                  <Option key={job.title} value={job.title}>
                    {job.title}
                  </Option>
                ))}
              </Select>

              <Textarea
                label="Message"
                name="message"
                onChange={handleChange}
              />

              <input
                id="resumeInput"
                type="file"
                className="border p-2 rounded"
                onChange={handleFileChange}
              />

              <Button disabled={loading} type="submit">
                {loading ? "Submitting..." : "Submit Application"}
              </Button>

              {submitted && (
                <Typography color="green" className="mt-2">
                  Application submitted successfully!
                </Typography>
              )}
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
