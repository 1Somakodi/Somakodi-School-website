"use client";

import React from "react";
import {
  Navbar as MTNavbar,
  Collapse,
  Button,
  IconButton,
  Typography,
} from "@material-tailwind/react";
import {
  RectangleStackIcon,
  UserCircleIcon,
  XMarkIcon,
  Bars3Icon,
} from "@heroicons/react/24/solid";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const NAV_MENU = [
  {
    name: "About Us",
    icon: RectangleStackIcon,
    targetId: "about-us",
  },
  {
    name: "Courses",
    icon: UserCircleIcon,
    targetId: "ourcourses",
  },
];

export default function Navbar() {
  const [open, setOpen] = React.useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const handleScroll = (targetId) => {
    setOpen(false);

    const scrollToSection = () => {
      const el = document.getElementById(targetId);
      el?.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    if (pathname !== "/") {
      router.push("/");
      setTimeout(scrollToSection, 300);
    } else {
      scrollToSection();
    }
  };

  return (
    <div className="px-10 sticky top-4 z-50">
      <div className="mx-auto container">
        <MTNavbar
          blurred
          color="transparent"
          className="z-50 mt-6 relative border-0 pr-3 py-3 pl-6 bg-orange-200/70 backdrop-blur-md"
        >
          <div className="flex items-center justify-between">
            {/* LOGO */}
            <Link href="/">
              <Typography className="text-lg font-bold cursor-pointer text-orange-900 drop-shadow-md">
                Somakodi School
              </Typography>
            </Link>

            {/* DESKTOP MENU */}
            <ul className="ml-10 hidden items-center gap-8 lg:flex">
              {NAV_MENU.map(({ name, icon: Icon, targetId }) => (
                <li key={name}>
                  <button
                    onClick={() => handleScroll(targetId)}
                    className="flex items-center gap-2 hover:text-orange-600 transition"
                  >
                    <Icon className="h-5 w-5 text-gray-900" />
                    <Typography className="font-medium text-gray-900">
                      {name}
                    </Typography>
                  </button>
                </li>
              ))}
            </ul>

            {/* DESKTOP ACTIONS */}
            <div className="hidden items-center gap-4 lg:flex">
              <Link href="/blog">
                <Button variant="text" className="btn-soft">
                  Blogs
                </Button>
              </Link>

              <Link href="/events">
                <Button variant="text" className="btn-soft">
                  Events
                </Button>
              </Link>

              <Link href="/scholarships">
                <Button variant="filled" className="btn-primary">
                  Financial Aid
                </Button>
              </Link>
            </div>

            {/* MOBILE TOGGLE */}
            <IconButton
              variant="text"
              color="gray"
              onClick={() => setOpen((o) => !o)}
              className="ml-auto inline-block lg:hidden"
            >
              {open ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </IconButton>
          </div>

          {/* MOBILE MENU */}
          <Collapse open={open}>
            <div className="container mx-auto mt-3 border-t border-gray-200 px-2 pt-4">
              <ul className="flex flex-col gap-4">
                {NAV_MENU.map(({ name, icon: Icon, targetId }) => (
                  <Button
                    key={name}
                    variant="text"
                    fullWidth
                    onClick={() => handleScroll(targetId)}
                    className="flex items-center gap-2 justify-start text-gray-900 font-medium hover:text-orange-600 transition"
                  >
                    <Icon className="h-5 w-5 text-gray-900" />
                    {name}
                  </Button>
                ))}

                <Button
                  variant="text"
                  fullWidth
                  onClick={() => handleScroll("events")}
                  className="flex items-center gap-2 justify-start text-gray-900 font-medium hover:text-orange-600 transition"
                >
                  <RectangleStackIcon className="h-5 w-5 text-gray-900" />
                  Events
                </Button>

                <Link href="/scholarships" onClick={() => setOpen(false)}>
                  <Button
                    variant="text"
                    fullWidth
                    className="flex items-center gap-2 justify-start text-gray-900 font-medium hover:text-orange-600 transition"
                  >
                    <UserCircleIcon className="h-5 w-5 text-gray-900" />
                    Financial Aid
                  </Button>
                </Link>
              </ul>
            </div>
          </Collapse>
        </MTNavbar>
      </div>
    </div>
  );
}
