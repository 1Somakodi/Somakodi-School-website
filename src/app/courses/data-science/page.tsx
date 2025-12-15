"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  Typography,
  Button,
  Card,
  CardBody,
  Accordion,
  AccordionHeader,
  AccordionBody,
  Chip,
} from "@material-tailwind/react";
import { StarIcon, ChevronDownIcon } from "@heroicons/react/24/solid";
import Footer from "@/components/Footer";

export default function SoftwareEngineeringCoursePage() {
  const [open, setOpen] = useState<number | null>(1);
  const [faqOpen, setFaqOpen] = useState<number | null>(null);

  const curriculum = [
    { id: 1, title: "Foundations of Data Science & Python Programming", content: "Key data science concepts,Python basics & scripts for data processing and automation." },
    { id: 2, title: "Data Handling & Cleaning with Pandas and NumPy", content: "Datasets importation & manipulation, Handling missing or inconsistent data, calculations and data transformations." },
    { id: 3, title: "Data Visualization & Communication", content: "Charts, graphs, and dashboards with Matplotlib and Power BI, Data presentation skills." },
    { id: 4, title: "Database Management & SQL", content: "Relational databases and structures, SQL queries, storing data in databases." },
    { id: 5, title: "Statistics & Exploratory Data Analysis", content: "Descriptive statistics and probability fundamentals, hypothesis testing and inferential statistics, Data patterns, trends, and anomalies." },
    { id: 5, title: "Introduction to Machine Learning", content: " supervised and unsupervised learning models, predictive models using Scikit-learn,model performance with accuracy, confusion matrices." },
    { id: 5, title: "Capstone Project & Career Prep", content: "Building a complete data project from data collection to analysis & presentation and prepare for developer roles." },
  ];

  const testimonials = [
    {
      text: "Before joining the Data Science program, I had zero experience with Python or analytics. The hands-on projects and clear explanations helped me build real skills fast. I can now analyze datasets confidently and present insights that actually make sense.",
      name: "Lucy W.",
      role: "Data Analyst",
      image: "/image/blogs/lucy.jpg",
    },
    {
      text: "This course completely changed how I look at data. From Excel and SQL to Python and machine learning basics, everything was taught in a practical way. The support from instructors made learning feel possible, even with a busy schedule.",
      name: "John M.",
      role: "Data Science Graduate",
      image: "/image/blogs/john.jpg",
    },
    {
      text: "Before joining the Data Science program, I had zero experience with Python or analytics. The hands-on projects and clear explanations helped me build real skills fast. I can now analyze datasets confidently and present insights that actually make sense.",
      name: "Leilani",
      role: "Junior Data Analyst",
      image: "/image/blogs/leilani.jpg",
    },
  ];

  const faqs = [
  {
    question: "What prior experience do I need to join the Data Science course?",
    answer:
      "University Degree or diploma. The course is designed for proffesionals with some working experience and also basic understanding of math and statistics logic will be helpful.",
  },
  {
    question: "What tools and technologies will I learn?",
    answer:
      "You will gain hands-on experience with Python, SQL, Excel, data visualization tools like Tableau, and machine learning libraries such as scikit-learn and pandas.",
  },
  {
    question: "How long is the course and what is the schedule?",
    answer:
      "The course runs for 8 months with flexible learning options including live sessions, recorded lessons, and hands-on projects.",
  },
  {
    question: "Will I get a certificate?",
    answer:
      "Yes! Upon successful completion of all modules and projects, you'll receive a Somakodi Certificate of Completion that you can add to your resume and LinkedIn profile.",
  },
  {
    question: "Do you provide career support after the course?",
    answer:
      "Yes. We provide CV reviews, interview preparation, career guidance and job placement support to help you transition into data roles.",
  },
  {
    question: "What if I fall behind?",
    answer:
      "With our self-paced option, there's no falling behind. If you're in the mentored program, our instructors will work with you to create a catch-up plan. We're committed to your success.",
  },
];


  return (
    <main className="bg-gradient-to-b from-slate-50 via-white to-slate-100 text-gray-900">
      {/* ================= HERO ================= */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <div className="flex gap-2 mb-6">
            <Chip value="online" className="bg-indigo-100 text-indigo-700" />
            <Chip value="Intermediate" className="bg-gray-100 text-gray-700" />
          </div>

          <Typography variant="h1" className="mb-6 text-4xl lg:text-5xl font-bold">
            Data Science
          </Typography>

          <Typography className="mb-8 text-gray-600 max-w-xl">
            Data science is the engine behind modern decision-making, powering everything from personalized recommendations and financial forecasting to healthcare predictions and business intelligence. As organizations across all industries embrace data-driven strategies, the demand for professionals who can analyze, interpret, and communicate insights has grown. Master key skills in data cleaning, exploratory data analysis, visualization, machine learning, and statistical reasoning,know how to present insights effectively and make data-driven recommendations. 
          </Typography>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 mb-8 text-sm">
            <div>
              <Typography className="text-gray-500">Duration</Typography>
              <Typography className="font-semibold">8 Months</Typography>
            </div>
            <div>
              <Typography className="text-gray-500">Modules</Typography>
              <Typography className="font-semibold">6</Typography>
            </div>
            <div>
              <Typography className="text-gray-500">Rating</Typography>
              <Typography className="font-semibold">5.0 ⭐</Typography>
            </div>
            <div>
              <Typography className="text-gray-500">Format</Typography>
              <Typography className="font-semibold">Online | Hybrid</Typography>
            </div>
            <div>
              <Typography className="text-gray-500">Start Date</Typography>
              <Typography className="font-semibold">Apr 2026</Typography>
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            <Link href="/register">
              <Button size="lg" className="bg-indigo-600">
                Enroll Now
              </Button>
            </Link>
            <Link href="/inquiry">
              <Button size="lg" variant="outlined">
                Contact Admissions
              </Button>
            </Link>
          </div>
        </div>

        <div className="relative group">
          <Card className="overflow-hidden rounded-2xl shadow-xl border-4 border-green-500 transition-transform duration-500 group-hover:scale-105">
            <Image
              src="/image/blogs/DSC2.jpg"
              alt="Data Science"
              width={700}
              height={500}
              className="w-full"
            />
          </Card>
          <div className="absolute bottom-6 right-6 bg-white rounded-xl shadow-lg p-5">
            <Typography className="text-sm text-gray-500">Course Price</Typography>
            <Typography variant="h4" className="text-indigo-600">
              KES 75,000
            </Typography>
          </div>
        </div>
      </section>

      {/* ================= TESTIMONIALS ================= */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-20">
        <Typography variant="h2" className="mb-12 text-center">
          What Our Students Say
        </Typography>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, i) => (
            <Card
              key={i}
              className="rounded-2xl transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <CardBody>
                {/* Star Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, idx) => (
                    <StarIcon
                      key={idx}
                      className="h-4 w-4 text-yellow-500 animate-pulse"
                    />
                  ))}
                </div>

                {/* Testimonial Text */}
                <Typography className="text-sm mb-6 text-gray-700">
                  “{item.text}”
                </Typography>

                {/* Profile */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl border-2 border-indigo-500 overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={48}
                      height={48}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <Typography className="font-semibold text-sm">
                      {item.name}
                    </Typography>
                    <Typography className="text-xs text-gray-500">
                      {item.role}
                    </Typography>
                  </div>
                </div>
              </CardBody>
            </Card>
          ))}
        </div>
      </section>

      {/* ================= PREREQUISITES ================= */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-20">
        {/* Header */}
        <div className="mb-12">
          <Typography
            variant="h3"
            className="inline-block bg-indigo-600 text-white px-4 py-2 rounded-lg mb-4"
          >
            Prerequisites & Requirements
          </Typography>

          <Typography className="text-gray-600 max-w-3xl">
            Here's what you should know before starting this course to get the most out of your learning experience.
          </Typography>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Programming Knowledge */}
          <Card className="rounded-2xl border border-indigo-400 bg-indigo-50">
            <CardBody>
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-8 flex items-center justify-center rounded-full bg-indigo-600 text-white text-sm">
                  ✓
                </span>
                <Typography variant="h6">Programming Knowledge</Typography>
              </div>

              <Typography className="text-indigo-600 text-sm mb-4">
                Required
              </Typography>

              <ul className="space-y-3 text-sm text-gray-700 list-disc list-inside">
                <li>
                  Basic Computer Skills
                </li>
                <li>
                  Good reading comprehension (English)
                </li>
                <li>
                  A University degree or Diploma
                </li>
              </ul>
            </CardBody>
          </Card>

          {/* Technical Background */}
          <Card className="rounded-2xl border border-indigo-400 bg-indigo-50">
            <CardBody>
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-8 flex items-center justify-center rounded-full bg-indigo-600 text-white text-sm">
                  ✓
                </span>
                <Typography variant="h6">Technical Background</Typography>
              </div>

              <Typography className="text-indigo-600 text-sm mb-4">
                Helpful (But Not Required)
              </Typography>

              <ul className="space-y-3 text-sm text-gray-700 list-disc list-inside">
                <li>Prior coding experience</li>
                <li>Understanding maths and statistics</li>
              </ul>
            </CardBody>
          </Card>

          {/* Recommended */}
          <Card className="rounded-2xl border border-gray-200 bg-white">
            <CardBody>
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-200 text-gray-700 text-sm">
                  i
                </span>
                <Typography variant="h6">Equipment</Typography>
              </div>

              <ul className="space-y-3 text-sm text-gray-700 list-disc list-inside">
                <li>A high-end laptop (a basic one works)</li>
                <li>Good stable internet (even part-time)</li>
                <li>Commit a few hours daily (classes & Practice)</li>
              </ul>
            </CardBody>
          </Card>
        </div>

        {/* Callout */}
        <div className="mt-10 border border-indigo-300 rounded-xl p-6 bg-indigo-50">
          <Typography className="font-semibold mb-1">
            Don’t Meet All Prerequisites?
          </Typography>
          <Typography className="text-sm text-gray-700">
            We offer foundational modules and support resources to help you catch up.
            Contact our admissions team to discuss your background and learning goals.
          </Typography>
        </div>
      </section>


{/* ================= PRICING ================= */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 text-center">
          <Typography variant="h2" className="mb-12">
            Pricing & Payment Options
          </Typography>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Self-Paced", price: "KES 35,000", features: ["Recorded lessons", "Projects"], popular: false },
              { title: "Mentored", price: "KES 75,000", features: ["Live sessions", "Mentorship"], popular: true },
              { title: "Premium", price: "KES 115,000", features: ["Career coaching", "Job placement support"], popular: false },
            ].map((plan, i) => (
              <Card
                key={i}
                className={`relative rounded-2xl transition-all duration-300 ${
                  plan.popular
                    ? "border-2 border-indigo-600 shadow-xl scale-105"
                    : "shadow-md"
                }`}
              >
                {plan.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-indigo-600 text-white text-xs px-3 py-1 rounded-full z-10">
                    Most Popular
                  </span>
                )}

                <CardBody>
                  <Typography variant="h5">{plan.title}</Typography>
                  <Typography variant="h3" className="my-4 text-indigo-600">
                    {plan.price}
                  </Typography>

                  <ul className="text-sm text-gray-600 mb-6 space-y-2">
                    {plan.features.map((f, idx) => (
                      <li key={idx}>• {f}</li>
                    ))}
                  </ul>

                  <Button fullWidth className={plan.popular ? "bg-indigo-600" : ""}>
                    Enroll
                  </Button>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>
      </section>

{/* ================= CURRICULUM ================= */}

      <section className="max-w-5xl mx-auto px-6 lg:px-10 py-24">
        <Typography variant="h2" className="mb-10 text-center">
          Curriculum Overview
        </Typography>

        <div className="divide-y border-t">
          {curriculum.map((item) => (
            <Accordion key={item.id} open={open === item.id}>
              <AccordionHeader
                onClick={() => setOpen(open === item.id ? null : item.id)}
                className="px-0"
              >
                <div className="grid grid-cols-[1fr_24px] items-center w-full">
                  <span className="text-sm font-medium">
                    {item.title}
                  </span>

                  <ChevronDownIcon
                    className={`h-5 w-5 justify-self-end transition-transform duration-300 ${
                      open === item.id ? "rotate-180" : ""
                    }`}
                  />
                </div>
              </AccordionHeader>

              <AccordionBody className="text-gray-600">
                {item.content}
              </AccordionBody>
            </Accordion>
          ))}
        </div>
      </section>

{/* ================= FAQ ================= */}

      <section className="max-w-5xl mx-auto px-6 lg:px-10 py-24">
        <Typography variant="h2" className="mb-10 text-center">
          Frequently Asked Questions
        </Typography>

        <div className="divide-y border-t">
          {faqs.map((faq, i) => (
            <Accordion key={i} open={faqOpen === i}>
              <AccordionHeader
                onClick={() => setFaqOpen(faqOpen === i ? null : i)}
                className="px-0"
              >
                <div className="grid grid-cols-[1fr_24px] items-center w-full">
                  <span className="text-sm font-medium">
                    {faq.question}
                  </span>

                  <ChevronDownIcon
                    className={`h-5 w-5 justify-self-end transition-transform duration-300 ${
                      faqOpen === i ? "rotate-180" : ""
                    }`}
                  />
                </div>
              </AccordionHeader>

              <AccordionBody className="text-gray-600">
                {faq.answer}
              </AccordionBody>
            </Accordion>
          ))}
        </div>
      </section>


      <Footer />
    </main>
  );
}