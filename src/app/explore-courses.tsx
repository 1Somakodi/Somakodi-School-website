"use client";

import { Typography } from "@material-tailwind/react";
import CourseCard from "@/components/course-card";

const COURSES = [
  {
    img: "/image/blogs/blog4.jpg",
    level: "Beginner",
    duration: "5 weeks",
    intake: "JAN 26",
    title: "Website Design",
    label: "Kes. 10,500",
    desc: "Unlock the Web Design and Development Foundation. Dive into HTML to structure your content and CSS to style it. By the end, you'll be crafting beautiful web pages from scratch.",
    brochure: "/brochures/Web-design.pdf",
  },
  {
    img: "/image/blogs/blog3.svg",
    level: "Beginner",
    duration: "8 months",
    intake: "FEB 26",
    title: "Software Engineering",
    label: "Kes. 75,000",
    desc: "Our Software Engineering course equips you with the skills to design and build scalable, high-performance applications that work seamlessly across different platforms and environments.",
    brochure: "/brochures/Software-engineering.pdf",
  },
  {
    img: "/image/blogs/blog2.jpg",
    level: "Intermediate",
    duration: "8 weeks",
    intake: "APR 26",
    title: "Master the Power of React",
    label: "Kes. 25,000",
    desc: "Take your frontend development to the next level with our React Development course. Learn how to build fast, interactive and dynamic web applications using the power of React.",
    brochure: "/brochures/React.pdf",
  },
  {
    img: "/image/blogs/fende.jpg",
    level: "Beginner",
    duration: "12 weeks",
    intake: "JAN 26",
    title: "Frontend Essentials Course",
    label: "Kes. 45,000",
    desc: "For aspiring web developers, the Frontend Essentials course is a must. Dive into the core technologies - HTML, CSS, and JavaScript.",
    brochure: "/brochures/Frontend-essentials.pdf",
  },
  {
    img: "/image/blogs/blog6.png",
    level: "Intermediate",
    duration: "3 weeks",
    intake: "JAN 26",
    title: "Streamline Your CSS Workflow",
    label: "Kes. 7,500",
    desc: "Our Tailwind CSS Introduction course teaches you how to use this utility-first CSS framework to streamline your workflow, saving you time.",
    brochure: "/brochures/Tailwind-css.pdf",
  },
  {
    img: "/image/blogs/blog5.jpg",
    level: "Beginner",
    duration: "12 weeks",
    intake: "FEB 26",
    title: "Backend Development",
    label: "Kes. 45,000",
    desc: "Dream of becoming a backend developer? Our intensive Python and Flask course is your fast track to achieving that goal.",
    brochure: "/brochures/Python-Flask.pdf",
  },
    {
    img: "/image/blogs/blog7.jpg",
    level: "Intermediate",
    duration: "6 months",
    intake: "FEB 26",
    title: "CyberSecurity",
    label: "Kes. 75,000",
    desc: "Take your cybersecurity skills to the next level with our hands-on Cybersecurity course. Learn how to detect threats, secure systems, and protect digital environments.",
    brochure: "/brochures/cybersecurity.pdf",
  },
  {
    img: "/image/blogs/blog8.jpg",
    level: "Intermediate",
    duration: "8 Months",
    intake: "JUN 26",
    title: "Mobile App. Development",
    label: "Kes.75,000",
    desc: "Take your mobile app development skills to the next level with our Mobile App Development course. Learn how to build fast, interactive, and user-friendly applications for Android and iOS.",
    brochure: "/brochures/Mobile-app.pdf",
  },
  {
    img: "/image/blogs/dsc.jpg",
    level: "Intermediate",
    duration: "6 months",
    intake: "APR 26",
    title: "Data Science",
    label: "Kes. 75,000",
    desc: "Take your data skills to the next level with our Data Science course. Learn how to analyze data, build predictive models, and turn insights into real-world solutions.",
    brochure: "/brochures/Data-Science.pdf",
  },
      {
    img: "/image/blogs/blog9.jpg",
    level: "Beginner",
    duration: "3 months",
    intake: "MAR 26",
    title: "JavaScript Mastery",
    label: "Kes. 50,000",
    desc: "Learn how to build interactive frontend interfaces and powerful backend applications using modern JavaScript. From dynamic UIs to server-side logic, we’ll equip you with the full-stack skills needed to create complete web apps.",
    brochure: "/brochures/Javascript.pdf",
  },
  {
    img: "/image/blogs/blog10.jpg",
    level: "Beginner",
    duration: "4 weeks",
    intake: "FEB 26",
    title: "Workplace Readiness & Leadership Program",
    label: "Kes. 25,000",
    desc: "Level up your career with essential soft skills! Master communication, teamwork, and problem-solving to stand out, collaborate effectively, and succeed in any professional setting.",
    brochure: "/brochures/Soft-skills.pdf",
  },
  {
    img: "/image/blogs/blog11.jpg",
    level: "Intermediate",
    duration: "8 month",
    intake: "MAR 26",
    title: "Applied AI & Full-Stack Development",
    label: "Kes. 75,000",
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
