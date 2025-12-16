"use client";

import { Typography, Button, Input } from "@material-tailwind/react";
import Link from "next/link";
import { useState } from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaXTwitter,
  FaCode,
} from "react-icons/fa6";

const CURRENT_YEAR = new Date().getFullYear();

export function Footer() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

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
    <footer className="bg-white border-t border-gray-200 px-6 pt-20 pb-10">
      <div className="max-w-7xl mx-auto">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 flex items-center justify-center">
                <FaCode className="text-white text-lg" />
              </div>
              <Typography variant="h5" className="font-bold">
                <Link href="#!">Somakodi</Link>
              </Typography>
            </div>

            <Typography className="text-gray-600 mb-6">
              Empowering the next generation of tech professionals through
              world-class online bootcamps.
            </Typography>

            <div className="flex gap-4 text-gray-700">
              <Link href="https://www.facebook.com/Somakodischool">
                <FaFacebook className="hover:text-blue-600 transition" />
              </Link>
              <Link href="https://x.com/somakodi">
                <FaXTwitter className="hover:text-black transition" />
              </Link>
              <Link href="https://www.linkedin.com/company/105460723">
                <FaLinkedin className="hover:text-blue-700 transition" />
              </Link>
              <Link href="https://www.instagram.com/somakodi.ke/">
                <FaInstagram className="hover:text-pink-600 transition" />
              </Link>
            </div>
          </div>

          {/* Programs */}
          <div>
            <Typography variant="h6" className="mb-4">
              Popular Programs
            </Typography>
            <ul className="space-y-3 text-gray-600">
              <li><Link href="/courses/software-engineering">Software Engineering</Link></li>
              <li><Link href="/courses/website-design">Web Design</Link></li>
              <li><Link href="/courses/aifullstack">AI Fullstack Dev</Link></li>
              <li><Link href="/courses/data-science">Data Science</Link></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <Typography variant="h6" className="mb-4">
              Quick Links
            </Typography>
            <ul className="space-y-3 text-gray-600">
              <li><Link href="/#about-us">About Us</Link></li>
              <li><Link href="/careers">Careers</Link></li>
              <li><Link href="/scholarships">Financial Aid</Link></li>
              <li><Link href="/inquiry">Contact Us</Link></li>
            </ul>
          </div>

         {/* Subscribe Section */}
          <div>
            <Typography variant="h6" className="mb-4">
              Subscribe
            </Typography>
            <Typography className="text-gray-600 mb-4">
              Subscribe to our newsletter for course updates and tech insights.
            </Typography>

            <div className="flex flex-col gap-4">
              <Input
                label="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Button
                className="btn-primary"
                onClick={handleSubscribe}
                disabled={loading}
              >
                {loading ? "Subscribing..." : "Subscribe"}
              </Button>
            </div>

            {success && (
              <p className="text-green-600 text-sm mt-3">
                Subscribed successfully!
              </p>
            )}
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 my-10" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center text-gray-600 text-sm gap-4">
          <p>© {CURRENT_YEAR} Somakodi. All rights reserved.</p>
          <div className="flex gap-6">
            <p>code</p>
            <p>create</p>
            <p>innovate</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
