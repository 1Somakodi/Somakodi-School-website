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
  const courseName = "Workplace Readiness & Leadership Program";

  const [open, setOpen] = useState<number | null>(1);
  const [faqOpen, setFaqOpen] = useState<number | null>(null);

  const curriculum = [
    { id: 1, title: "Effective Communication", content: "Master how to speak clearly, listen actively, adapt your tone to different situations, and give or receive constructive feedback." },
    { id: 2, title: "Collaboration & Teamwork", content: "Work effectively in teams by building trust, resolving conflicts, and contributing to shared success, both in-person and online." },
    { id: 3, title: "Professionalism & Work Ethic", content: "Understand how to consistently show up with reliability, respect, and a proactive mindset qualities employers value highly." },
    { id: 4, title: "Confidence & Public Speaking", content: "Gain confidence in presenting your ideas clearly, whether in meetings, interviews, or group settings, without fear or hesitation." },
    { id: 5, title: "Career Readiness & Workplace Etiquette", content: "Learn how to navigate professional environments from email and meeting etiquette to remote work conduct and communication." },
  ];

  const testimonials = [
    {
      text: "This course went beyond theory. We learned practical skills like workplace ethics, problem-solving, good presentation skills and leadership mindset. The sessions were engaging, relatable, and applicable to everyday work situations. It has truly changed how I approach my career.",
      name: "Faith W.",
      role: "Program Graduate",
      image: "/image/blogs/faith.jpg",
    },
    {
      text: "Before this program, I struggled with confidence and communication at work. The Workplace Readiness & Leadership course helped me understand how to present myself professionally, work in teams, and lead with integrity. I now feel prepared for real workplace environments and leadership opportunities.",
      name: "Duke N.",
      role: "Program Student",
      image: "/image/blogs/tom.jpg",
    },
    {
      text: "The Workplace Readiness & Leadership Program equipped me with essential soft skills employers look for. From communication to teamwork and leadership, the training gave me clarity, confidence, and direction. I would recommend it to any young professional preparing for the job market.",
      name: "Luca M.",
      role: "Program Graduate",
      image: "/image/blogs/luca.jpg",
    },
  ];

  const faqs = [
  {
    question: "Do I need prior working experience?",
    answer:
      "No prior employment experience is required.",
  },
  {
    question: "How long is the course and what is the schedule?",
    answer:
      "The course runs for 4 weeks with flexible learning options including live sessions,",
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
            <Chip value="Beginner" className="bg-gray-100 text-gray-700" />
          </div>

          <Typography variant="h1" className="mb-6 text-4xl lg:text-5xl font-bold">
            WORKPLACE READINESS & LEADERSHIP PROGRAM
          </Typography>

          <Typography className="mb-8 text-gray-600 max-w-xl">
            Somakodi's Workplace Readiness and Leadership Program is a focused, 1-month course designed to equip learners with essential soft skills for personal and professional success in today’s competitive job market. The program emphasizes communication, leadership, problem-solving, teamwork, and emotional intelligence all critical skills that employers value across every industry.

          </Typography>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 mb-8 text-sm">
            <div>
              <Typography className="text-gray-500">Duration</Typography>
              <Typography className="font-semibold">4 Weeks</Typography>
            </div>
            <div>
              <Typography className="text-gray-500">Modules</Typography>
              <Typography className="font-semibold">4</Typography>
            </div>
            <div>
              <Typography className="text-gray-500">Rating</Typography>
              <Typography className="font-semibold">4.5 ⭐</Typography>
            </div>
            <div>
              <Typography className="text-gray-500">Format</Typography>
              <Typography className="font-semibold">Online | Hybrid</Typography>
            </div>
            <div>
              <Typography className="text-gray-500">Start Date</Typography>
              <Typography className="font-semibold">Feb 2026</Typography>
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            <Link href={`/register?course=${encodeURIComponent(courseName)}`}>
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
          <Card className="overflow-hidden rounded-2xl shadow-xl border-4 border-indigo-500 transition-transform duration-500 group-hover:scale-105">
            <Image
              src="/image/blogs/softskills.jpg"
              alt="Software Engineering"
              width={700}
              height={500}
              className="w-full"
            />
          </Card>
          <div className="absolute bottom-6 right-6 bg-white rounded-xl shadow-lg p-5">
            <Typography className="text-sm text-gray-500">Course Price</Typography>
            <Typography variant="h4" className="text-indigo-600">
              KES 25,000
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
                  Willingness to Learn & Practice
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
                <li>Employement experience</li>
                <li>A university degree or Diploma</li>
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