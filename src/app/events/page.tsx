"use client";

import {
  Typography,
  Card,
  CardBody,
  Button,
} from "@material-tailwind/react";
import Link from "next/link";
import Image from "next/image";
import { useScrollSpy } from "@/hooks/useScrollSpy";

interface EventItem {
  id: string;
  title: string;
  date: string;
  status: "upcoming" | "past";
  description: string;
  image: string;
}

const EVENTS: EventItem[] = [
 
   {
    id: "online-Q&A-session",
    title: "Ask the Experts: Frontend Web Development",
    date: "2026-02-26",
    status: "upcoming",
    description: "Join us for an engaging live Q&A session with our experienced instructors and industry professionals. This is your opportunity to get answers to your questions, gain insights into frontend web development best practices, and learn tips for building responsive, user-friendly, and modern web applications. Whether you’re just starting out or looking to level up your skills, this session will provide practical guidance and real-world advice to help you grow as a frontend developer.",
    image: "/image/events/under.jpg",
  },
     {
    id: "online-Q&A-session",
    title: "Future of Web Development: Trends and Innovations",
    date: "2026-03-26",
    status: "upcoming",
    description: "Explore the cutting edge of software development in this insightful session, where we dive into the latest trends, innovations, and emerging technologies shaping the future of web development. Learn about modern frameworks, tools, and best practices that are transforming how websites and applications are built, as well as the skills and approaches developers need to stay ahead in a rapidly evolving industry. Whether you’re a beginner or an experienced professional, this session will provide valuable insights to help you navigate and thrive in the future of web development.",
    image: "/image/events/divgirl.jpg",
  },
  {
    id: "somakodi-Graduation-day",
    title: "Somakodi Graduation Day",
    date: "2026-03-26",
    status: "upcoming",
    description: "Welcome to this special Somakodi event, where we come together to celebrate the growth, resilience, and achievements of our software engineering class. This gathering marks an important milestone in our learners’ journeys, recognizing the dedication, hard work, and perseverance that have shaped them into confident, job-ready tech talent. At Somakodi, we believe in practical, project-based learning and strong community support, and this event reflects the impact of that approach. We are honored to welcome students, mentors, partners, families, and friends to share in this moment and to celebrate the next generation of software engineers as they prepare to build, innovate, and contribute meaningfully to the tech ecosystem.",
    image: "/image/events/avatar6.jpg",
  },
    {
    id: "somakodi-Code-a-Thon",
    title: "WebDev Pro Code-a-Thon: Build a Responsive Website",
    date: "2026-05-26",
    status: "upcoming",
    description: "Put your web development skills to the test in this 48-hour coding challenge! Participants will create a fully responsive website from scratch using HTML, CSS, and JavaScript, applying both design and functionality principles. This is a hands-on opportunity to showcase your creativity, problem-solving abilities, and technical skills while competing in a dynamic, time-bound environment. Whether you’re a beginner or an experienced coder, the Code-a-Thon is your chance to learn, innovate, and build a project you can be proud of.",
    image: "/image/events/blog2.svg",
  },
  {
    id: "Project-Presentation",
    title: "Software Engineering Program – End of Program Project Presentation",
    date: "2025-12-01",
    status: "past",
    description: " 🎉🎉🎉🎉🎉🎉 You are warmly invited to the Software Engineering Program – End of Program Project Presentation. This event is a culmination of months of learning, practice, and perseverance. Our learners will be showcasing projects that demonstrate their growth and capability across frontend and backend development, databases, APIs, version control, and deployment. This is also a great opportunity to network, give constructive feedback, and see the kind of talent being shaped through our program.",
    image: "/image/events/projectshowcase.jpg",
  },
    {
    id: "career-talk",
    title: "Career talk Session: Guest Churchil Adika",
    date: "2025-04-24",
    status: "past",
    description: " Hello and welcome to all our students at Somakodi School! We’re excited to guide you on building a successful career in technology and turning your coding skills into real-world opportunities. In today’s fast-moving tech industry, employers value problem-solving, creativity, and hands-on experience just as much as technical knowledge. In this career talk, we’ll explore how to build projects that showcase your skills, connect with mentors and peers, stay up-to-date with industry trends, and prepare for interviews and job opportunities. Whether you’re just starting out or looking to level up, being intentional, persistent, and proactive with every project and learning experience will help you move closer to a rewarding career in tech.",
    image: "/image/events/talkk.jpg",
  },
];

export default function EventsPage() {
  const activeId = useScrollSpy([
    "upcoming-events",
    "past-events",
  ]);

  return (
    <section className="px-6 lg:px-10 py-16">
      <div className="container mx-auto grid lg:grid-cols-12 gap-10">

        {/* SIDEBAR */}

        <aside className="hidden lg:block lg:col-span-3">
          <div className="sticky top-28 space-y-6">

            {/* Sidebar Card */}
            <div className="rounded-2xl border bg-white p-5 shadow-sm space-y-6">

              {/* Title */}
              <Typography variant="h6" className="text-gray-900">
                Events Guide
              </Typography>

              {/* Categories */}
              <div className="space-y-2">
                <Typography variant="small" className="uppercase text-gray-500 font-semibold">
                  Categories
                </Typography>

                <a
                  href="#upcoming-events"
                  className={`block rounded-lg px-3 py-2 transition ${
                    activeId === "upcoming-events"
                      ? "bg-orange-50 text-orange-600 font-semibold border-l-4 border-orange-600"
                      : "hover:bg-gray-100 text-gray-700"
                  }`}
                >
                  Upcoming Events
                </a>

                <a
                  href="#past-events"
                  className={`block rounded-lg px-3 py-2 transition ${
                    activeId === "past-events"
                      ? "bg-orange-50 text-orange-600 font-semibold border-l-4 border-orange-600"
                      : "hover:bg-gray-100 text-gray-700"
                  }`}
                >
                  Past Events
                </a>
              </div>

              {/* Divider */}
              <div className="h-px bg-gray-200" />

              {/* Upcoming Events List */}
              <div className="space-y-3">
                <Typography variant="small" className="uppercase text-gray-500 font-semibold">
                  Upcoming
                </Typography>

                {EVENTS.filter(e => e.status === "upcoming")
                  .slice(0, 4)
                  .map(event => (
                    <a
                      key={event.id}
                      href={`#${event.status === "upcoming" ? "upcoming-events" : "past-events"}`}
                      className="block rounded-lg p-3 hover:bg-gray-100 transition"
                    >
                      <Typography className="text-sm font-medium text-gray-800 line-clamp-2">
                        {event.title}
                      </Typography>
                      <Typography className="text-xs text-gray-500">
                        {new Date(event.date).toDateString()}
                      </Typography>
                    </a>
                  ))}
              </div>
            </div>
          </div>
        </aside>


        {/* CONTENT */}
        <main className="lg:col-span-9 space-y-16">
          {/* UPCOMING EVENTS */}
          <section id="upcoming-events">
            <Typography variant="h4" className="mb-6">
              Upcoming Events
            </Typography>

            <div className="space-y-6">
              {EVENTS.filter(e => e.status === "upcoming").map(event => (
                <Card key={event.id} className="border overflow-hidden">
                  <div className="relative h-72">
                      <Image
                        src={event.image}
                        alt={event.title}
                        fill
                        className="object-cover"
                      />
                  </div>
                  <CardBody>
                    <Typography variant="h6">{event.title}</Typography>
                    <Typography className="text-sm text-gray-500">
                      {new Date(event.date).toDateString()}
                    </Typography>
                    <Typography className="mt-2">
                      {event.description}
                    </Typography>

                    <Link href={`/events/${event.id}`}>
                      <Button size="sm" className="mt-4 btn-primary">
                        View Details
                      </Button>
                    </Link>
                  </CardBody>
                </Card>
              ))}
            </div>
          </section>

          {/* PAST EVENTS */}
          <section id="past-events">
            <Typography variant="h4" className="mb-6">
              Past Events
            </Typography>

            <div className="space-y-6">
              {EVENTS.filter(e => e.status === "past").map(event => (
                <Card key={event.id} className="border bg-gray-50 overflow-hidden">
                  <div className="relative h-72">
                      <Image
                        src={event.image}
                        alt={event.title}
                        fill
                        className="object-cover"
                      />
                  </div>

                  <CardBody>
                    <Typography variant="h6">{event.title}</Typography>
                    <Typography className="text-sm text-gray-500">
                      {new Date(event.date).toDateString()}
                    </Typography>
                    <Typography className="mt-2">
                      {event.description}
                    </Typography>
                  </CardBody>
                </Card>
              ))}
            </div>
          </section>
        </main>
      </div>
    </section>
  );
}
