import { Metadata } from "next";
import SoftwareEngineeringClient from "./SoftwareEngineeringClient";

export const metadata: Metadata = {
  title: "Software Engineering | Somakodi School",
  description:
    "Learn full-stack software engineering with hands-on projects, expert mentorship, and industry-ready skills at Somakodi School.",

  openGraph: {
    title: "Software Engineering | Somakodi School",
    description:
      "Build real-world software engineering skills through practical, project-based training at Somakodi School.",
    url: "https://somakodi.org/courses/software-engineering",
    siteName: "Somakodi School",
    images: [
      {
        url: "https://somakodi.org/og/mixx.jpg",
        width: 1200,
        height: 630,
        alt: "Software Engineering at Somakodi School",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    images: ["https://somakodi.org/og/mixx.jpg"],
  },
};

export default function Page() {
  return <SoftwareEngineeringClient />;
}
