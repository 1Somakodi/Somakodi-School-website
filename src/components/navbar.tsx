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

const NAV_MENU = [
  {
    name: "About Us",
    icon: RectangleStackIcon,
    href: "/#about-us",
  },
  {
    name: "Courses",
    icon: UserCircleIcon,
    href: "/#ourcourses",
  },
];

function NavItem({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) {
  return (
    <li>
      <Link href={href} className="flex items-center gap-2">
        {children}
      </Link>
    </li>
  );
}

export default function Navbar() {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="px-10 sticky top-4 z-50">
      <div className="mx-auto container">
        <MTNavbar
          blurred
          color="transparent" // keep transparent so blur works
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
              {NAV_MENU.map(({ name, icon: Icon, href }) => (
                <NavItem key={name} href={href}>
                  <Icon className="h-5 w-5" />
                  <Typography
                    variant="paragraph"
                    color="gray"
                    className="font-medium text-gray-900 hover:text-orange-600 transition"
                  >
                    {name}
                  </Typography>
                </NavItem>
              ))}
            </ul>

            {/* DESKTOP ACTIONS */}
            <div className="hidden items-center gap-4 lg:flex">
              <Link href="/#events">
                <Button variant="text">Events</Button>
              </Link>
              <Link href="/scholarships">
                <Button color="gray">Financial Aid</Button>
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
                {NAV_MENU.map(({ name, icon: Icon, href }) => (
                  <Link
                    key={name}
                    href={href}
                    onClick={() => setOpen(false)}
                    className="flex items-center gap-2"
                  >
                    <Icon className="h-5 w-5" />
                    <Typography className="font-medium text-gray-900">
                      {name}
                    </Typography>
                  </Link>
                ))}

                <Link href="/#events" onClick={() => setOpen(false)}>
                  <Button variant="text" fullWidth>
                    Events
                  </Button>
                </Link>

                <Link href="/scholarships" onClick={() => setOpen(false)}>
                  <Button color="gray" fullWidth>
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
