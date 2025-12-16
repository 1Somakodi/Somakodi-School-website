"use client";

import React from "react";
import { Typography } from "@material-tailwind/react";
import {
  DocumentTextIcon,
  PlayCircleIcon,
  PencilSquareIcon,
  PhoneArrowDownLeftIcon,
} from "@heroicons/react/24/solid";

import StatsCard from "@/components/stats-card";


const STATS = [
  {
    icon: DocumentTextIcon,
    count: "200+",
    title: "Students",
  },
  {
    icon: PlayCircleIcon,
    count: "5+",
    title: "Instructors",
  },
  {
    icon: PencilSquareIcon,
    count: "10+",
    title: "Courses",
  },
  {
    icon: PhoneArrowDownLeftIcon,
    count: "24/7",
    title: "Support",
  },
];

export function OutImpressiveStats() {
  return (
    <section id="about-us" className="px-8 pt-20 lg:pt-28">
      <div className="container mx-auto text-center lg:text-left">
        <div className="grid place-items-center text-center">
          <Typography variant="h2" color="blue-gray" className="mb-2 text-4xl">
            Somakodi
          </Typography>
          <Typography
            variant="lead"
            className="
              mx-auto
              mb-12
              w-full
              !text-gray-500
              text-left
              sm:text-justify
              lg:w-10/12
            "
          >
            Somakodi School is where future tech leaders are made! We deliver fast-paced,
            hands-on training in Software Engineering, Data Science, Cybersecurity, and more.
            Our Courses are designed to get you job-ready, confident, and unstoppable within
            a short time. With a strong focus on accessibility and community, we open doors
            for learners from all backgrounds to break into the digital world. At Somakodi,
            we don’t just teach tech skills, we ignite potential and launch careers.
          </Typography>

        </div>
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-4 md:gap-10">
          {STATS.map((props, key) => (
            <StatsCard key={key} {...props} />
          ))}
        </div>
      </div>
    </section>

  );
}
export default OutImpressiveStats;