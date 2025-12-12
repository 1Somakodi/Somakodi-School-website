"use client";
import React from "react";
import FeedbackCard from "@/components/feedback-card";
import { Typography } from "@material-tailwind/react";


const FEEDBACKS = [
  {
    feedback:
      "The instructors excel at teaching, and their hands-on methodology ensures effective understanding of the material.",
    client: "Jessica Maina",
    title: "Web Developer.",
    img: "/image/image7.svg ",
  },
  {
    feedback:
      "I went from knowing nothing about Software development to landing my dream job as a frontend developer.",
    client: "Kennedy Onyango",
    title: "Software Engineer.",
    img: "/image/avatar3.jpg",
  },
  {
    feedback:
      "The courses are structured well, and the class projects helped me build a strong portfolio to showcase.",
    client: "Arya Alya",
    title: "Cybersecurity Intern.",
    img: "/image/avatar2.jpeg",
  },
];

export function StudentsFeedback() {
  return (
    <section className="px-8 py-36">
      <div className="container mx-auto">
        <div className="mb-16 flex flex-col items-center w-full">
          <Typography variant="h2" color="blue-gray" className="mb-2">
            What Our Students Are Saying
          </Typography>
          <Typography
            variant="lead"
            className="mb-10 max-w-3xl lg:text-center !text-gray-500"
          >
            Our mission is to empower individuals with the knowledge and skills
            they need to succeed in the world of web development. But don&apos;t
            just take our word for it.
          </Typography>
        </div>
        <div className="grid gap-x-8 gap-y-12 lg:px-32 grid-cols-1 md:grid-cols-3">
          {FEEDBACKS.map((props, key) => (
            <FeedbackCard key={key} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}


export default StudentsFeedback;
