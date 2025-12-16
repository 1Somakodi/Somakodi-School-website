"use client";

import React from "react";
import {
  Button,
  Typography,
  Card,
  CardBody,
} from "@material-tailwind/react";

import {
  GlobeEuropeAfricaIcon,
  MicrophoneIcon,
  PuzzlePieceIcon,
  HeartIcon,
} from "@heroicons/react/24/solid";

import CategoryCard from "@/components/category-card";


const CATEGORIES = [
  {
    img: "/image/blogs/BScSE.jpg",
    icon: HeartIcon,
    title: "Frontend Web Development",
    desc: "3 Courses",
  },
  {
    img: "/image/blogs/blog-12.jpeg",
    icon: PuzzlePieceIcon,
    title: "Backend Web Development",
    desc: "1 Courses",
  },
  {
    img: "/image/blogs/blog12.jpg",
    icon: GlobeEuropeAfricaIcon,
    title: "Web Security & Performance",
    desc: "1 Courses",
  },
  {
    img: "/image/blogs/BScSE3.jpg",
    icon: MicrophoneIcon,
    title: "Full-Stack Web Development",
    desc: "4 Courses",
  },
];

export function CoursesCategories() {
  return (
    <section className="container mx-auto px-8 py-36">
<div className="mb-20 grid place-items-center px-4 sm:px-0 text-center">
  <Typography variant="h2" color="blue-gray" className="my-3">
    Courses Categories
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
    A comprehensive selection of courses designed to empower you with the skills
    you need to thrive in the dynamic world of Tech. Explore our hands-on programs
    that cover both the foundations and advanced topics, from building responsive
    web applications & mobile apps to mastering full-stack development, data
    science, cybersecurity, and artificial intelligence. Each course is carefully
    crafted to provide real-world experience, practical projects, and career-ready
    skills. Whether you’re starting your tech journey or looking to upskill,
    Somakodi School has the right course for you.
  </Typography>
</div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <Card
          color="gray"
          className="relative grid h-full w-full place-items-center overflow-hidden text-center"
        >
          <div className="absolute inset-0 h-full w-full bg-gray-900/75" />
          <CardBody className="relative w-full">
            <Typography variant="small" color="white" className="font-bold opacity-50">
              HTML, CSS & Javascript
            </Typography>
            <Typography variant="small" color="white" className="font-bold opacity-50">
              React, Python & Flask
            </Typography>
            <Typography variant="h4" className="mt-9" color="white">
              Web Development
            </Typography>
            <Typography
              variant="paragraph"
              color="white"
              className="mt-4 mb-14 opacity-50"
            >
              Ready to start your Software Development journey? Enroll Today
            </Typography>
          </CardBody>
        </Card>
        <div className="col-span-1 flex flex-col gap-6">
          {CATEGORIES.slice(0, 2).map((props, key) => (
            <CategoryCard key={key} {...props} />
          ))}
        </div>
        <div className="col-span-1 flex flex-col gap-6">
          {CATEGORIES.slice(2, 4).map((props, key) => (
            <CategoryCard key={key} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default CoursesCategories;