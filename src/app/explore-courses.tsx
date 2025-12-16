"use client";

import { Typography } from "@material-tailwind/react";
import CourseCard from "@/components/course-card";

const COURSES = [
  {
    img: "/image/blogs/blog41.jpg",
    level: "Beginner",
    duration: "5 weeks",
    intake: "JAN 26",
    title: "Website Design",
    slug: "website-design",
    label: "view more",
    desc: "Unlock the Web Design and Development Foundation. Dive into HTML to structure your content and CSS to style it. By the end, you'll be crafting beautiful web pages from scratch.",
    brochure: "/brochures/Web-design.pdf",
  },
  {
    img: "/image/blogs/senew.jpg",
    level: "Beginner",
    duration: "8 months",
    intake: "FEB 26",
    title: "Software Engineering",
    slug : "software-engineering",
    label: "view more",
    desc: "Our Software Engineering course equips you with the skills to design and build scalable, high-performance applications that work seamlessly across different platforms and environments.",
    brochure: "/brochures/Software-engineering.pdf",
  },
  {
    img: "/image/blogs/blog2.jpg",
    level: "Intermediate",
    duration: "8 weeks",
    intake: "APR 26",
    title: "Master the Power of React",
    slug : "react",
    label: "view more",
    desc: "Take your frontend development to the next level with our React Development course. Learn how to build fast, interactive and dynamic web applications using the power of React.",
    brochure: "/brochures/React.pdf",
  },
  {
    img: "/image/blogs/fende.jpg",
    level: "Beginner",
    duration: "12 weeks",
    intake: "JAN 26",
    title: "Frontend Essentials Course",
    slug : "frontend",
    label: "view more",
    desc: "For aspiring web developers, the Frontend Essentials course is a must. Dive into the core technologies - HTML, CSS, and JavaScript.",
    brochure: "/brochures/Frontend-essentials.pdf",
  },
  {
    img: "/image/blogs/blog6.png",
    level: "Intermediate",
    duration: "3 weeks",
    intake: "JAN 26",
    title: "Streamline Your CSS Workflow",
    slug : "tailwind",
    label: "view more",
    desc: "Our Tailwind CSS Introduction course teaches you how to use this utility-first CSS framework to streamline your workflow, saving you time.",
    brochure: "/brochures/Tailwind-css.pdf",
  },
  {
    img: "/image/blogs/blog5.jpg",
    level: "Beginner",
    duration: "12 weeks",
    intake: "FEB 26",
    title: "Backend Development",
    slug : "backend",
    label: "view more",
    desc: "Dream of becoming a backend developer? Our intensive Python and Flask course is your fast track to achieving that goal.",
    brochure: "/brochures/Python-Flask.pdf",
  },
    {
    img: "/image/blogs/blog7.jpg",
    level: "Intermediate",
    duration: "6 months",
    intake: "FEB 26",
    title: "CyberSecurity",
    slug : "cybersecurity",
    label: "view more",
    desc: "Take your cybersecurity skills to the next level with our hands-on Cybersecurity course. Learn how to detect threats, secure systems, and protect digital environments.",
    brochure: "/brochures/cybersecurity.pdf",
  },
  {
    img: "/image/blogs/blog8.jpg",
    level: "Intermediate",
    duration: "8 Months",
    intake: "JUN 26",
    title: "Mobile App. Development",
    slug : "mobileapp",
    label: "view more",
    desc: "Take your mobile app development skills to the next level with our Mobile App Development course. Learn how to build fast, interactive, and user-friendly applications for Android and iOS.",
    brochure: "/brochures/Mobile-app.pdf",
  },
  {
    img: "/image/blogs/dsc1.jpg",
    level: "Mid-level",
    duration: "6 months",
    intake: "Apr 26",
    title: "Data Science",
    slug : "data-science",
    label: "view more",
    desc: "Take your data skills to the next level with our Data Science course. Learn how to analyze data, build predictive models, and turn insights into real-world solutions.",
    brochure: "/brochures/Data-Science.pdf",
  },
      {
    img: "/image/blogs/blog9.jpg",
    level: "Beginner",
    duration: "3 months",
    intake: "MAR 26",
    title: "JavaScript Mastery",
    slug : "javascript",
    label: "view more",
    desc: "Learn how to build interactive frontend interfaces and powerful backend applications using modern JavaScript. From dynamic UIs to server-side logic, we’ll equip you with the full-stack skills needed to create complete web apps.",
    brochure: "/brochures/Javascript.pdf",
  },
  {
    img: "/image/blogs/blog10.jpg",
    level: "Beginner",
    duration: "4 weeks",
    intake: "FEB 26",
    title: "Workplace Readiness & Leadership Program",
    slug : "softskills",
    label: "view more",
    desc: "Level up your career with essential soft skills! Master communication, teamwork, and problem-solving to stand out, collaborate effectively, and succeed in any professional setting.",
    brochure: "/brochures/Soft-skills.pdf",
  },
  {
    img: "/image/blogs/blog11.jpg",
    level: "Intermediate",
    duration: "8 month",
    intake: "MAR 26",
    title: "Applied AI & Full-Stack Development",
    slug : "aifullstack",
    label: "view more",
    desc: "Unlock the power of AI and become a full-stack developer! Learn how to build intelligent web applications using Python and JavaScript, from dynamic user interfaces to smart backend systems.",
    brochure: "/brochures/Fullstack-AI.pdf",
  },
];

export function ExploreCourses() {
  return (
    <section id="ourcourses" className="px-8">
      <div className="container mx-auto mb-24 text-center">
        <Typography variant="h2" color="blue-gray">
          Explore Courses
        </Typography>
        <Typography
          variant="lead"
          className="mt-2 mx-auto w-full px-4 !text-gray-500 lg:w-6/12 lg:px-8"
        >
          Browse through our courses and find the one that
          fits your needs.
        </Typography>
      </div>
      <div className="container mx-auto grid grid-cols-1 gap-x-10 gap-y-24 md:grid-cols-2 lg:grid-cols-3 lg:gap-x-14">
        {COURSES.map((props, idx) => (
          <CourseCard key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}

export default ExploreCourses;
