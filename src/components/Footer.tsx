"use client";

import { Typography, Button, Input } from "@material-tailwind/react";
import Link from "next/link";
import { useState } from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaXTwitter } from "react-icons/fa6";

const LINKS = [
  {
    title: "Somakodi",
    items: [
      { label: "About Us", href: "/#about-us" },
      { label: "Courses", href: "/#ourcourses" },
      { label: "Careers", href: "/careers" },
      { label: "Financial Aid", href: "/scholarships" },
    ],
  },
  {
    title: "Socials",
    items: [
      { label: "Facebook", href: "https://www.facebook.com/Somakodischool", icon: <FaFacebook className="inline-block w-5 h-5 mr-2" /> },
      { label: "Instagram", href: "https://www.instagram.com/somakodi.ke/", icon: <FaInstagram className="inline-block w-5 h-5 mr-2" /> },
      { label: "LinkedIn", href: "https://www.linkedin.com/company/105460723/admin/page-posts/published/", icon: <FaLinkedin className="inline-block w-5 h-5 mr-2" /> },
      { label: "X", href: "https://x.com/somakodi", icon: <FaXTwitter className="inline-block w-5 h-5 mr-2" /> },
    ],
  },
];

const CURRENT_YEAR = new Date().getFullYear();

export function Footer() {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubscribe = async () => {
    if (!email) return alert("Please enter a valid email");

    setLoading(true);

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();

      if (data.success) {
        setSuccess(true);
        setEmail("");
      } else {
        alert("Failed to subscribe. Try again later.");
      }
    } catch (err) {
      console.error(err);
      alert("Failed to subscribe. Try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <footer className="px-8 pt-24 pb-8 bg-gray-50">
      <div className="container max-w-6xl flex flex-col mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 !w-full ">
          {/* Left Section */}
          <div className="flex col-span-2 items-start gap-10 mb-10 lg:mb-0 md:gap-36">
            {LINKS.map(({ title, items }) => (
              <ul key={title}>
                <Typography variant="h6" color="blue-gray" className="mb-4">
                  {title}
                </Typography>

                {items.map(({ label, href, icon }) => (
                  <li key={label}>
                    <Link href={href}>
                      <Typography
                        as="span"
                        className="py-1 flex items-center font-normal !text-gray-700 transition-colors hover:!text-gray-900 cursor-pointer"
                      >
                        {icon && <span>{icon}</span>}
                        {label}
                      </Typography>
                    </Link>
                  </li>
                ))}
              </ul>
            ))}
          </div>

          {/* Subscribe Section */}
          <div>
            <Typography variant="h6" className="mb-3 text-left">
              Subscribe
            </Typography>
            <Typography className="!text-gray-500 font-normal mb-4 text-base">
              Get first access to our exclusive Tech events and be the first to know about new courses and Financial Aid offers.
            </Typography>

            <div className="flex mb-3 flex-col lg:flex-row items-start gap-4">
              <Input
                label="Email"
                color="gray"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Button
                color="gray"
                className="w-full lg:w-fit"
                size="md"
                onClick={handleSubscribe}
                disabled={loading}
              >
                {loading ? "Sending..." : "Register"}
              </Button>
            </div>

            {success && <p className="text-green-600 mt-2">Subscribed successfully!</p>}
          </div>
        </div>

        {/* Footer Bottom */}
        <Typography
          color="blue-gray"
          className="md:text-center mt-16 font-normal !text-gray-700"
        >
          &copy; {CURRENT_YEAR} Website by <Link href="#!">Somakodi</Link>
        </Typography>
      </div>
    </footer>
  );
}

export default Footer;
