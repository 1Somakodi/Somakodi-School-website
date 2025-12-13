"use client";

import {
  Typography,
  Card,
  CardBody,
  CardHeader,
  Button,
} from "@material-tailwind/react";
import Image from "next/image";
import Link from "next/link";
import {
  AcademicCapIcon,
  ClockIcon,
  CalendarDaysIcon,
} from "@heroicons/react/24/outline";

interface CourseCardProps {
  img: string;
  tag: string;
  title: string;
  desc: string;
  label: string;
  level?: string;
  duration?: string;
  intake?: string;
  brochure?: string;
}

export function CourseCard({
  img,
  tag,
  title,
  desc,
  label,
  level,
  duration,
  intake,
  brochure,
}: CourseCardProps) {
  return (
    <Card className="border hover:shadow-lg transition-shadow duration-300">
      {/* IMAGE */}
      <CardHeader
        floated={false}
        shadow={false}
        className="h-64 overflow-hidden rounded-t-xl border-4 border-pink-300 group"
      >
        <Image
          src={img}
          alt={title}
          width={768}
          height={768}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </CardHeader>

      <CardBody>
        {/* ICON INFO ROW */}
        <div className="flex flex-wrap items-center gap-5 mb-4 text-sm text-gray-600">
          {/* LEVEL */}
          <div className="flex items-center gap-2">
            <AcademicCapIcon className="h-5 w-5 text-blue-500" />
            <span>{level}</span>
          </div>

          {/* DURATION */}
          <div className="flex items-center gap-2">
            <ClockIcon className="h-5 w-5 text-blue-500" />
            <span>{duration}</span>
          </div>

          {/* INTAKE */}
          <div className="flex items-center gap-2">
            <CalendarDaysIcon className="h-5 w-5 text-blue-500" />
            <span>Intake: {intake}</span>
          </div>
        </div>

        {/* TAG */}
        <Typography variant="small" className="mb-2 text-gray-500">
          {tag}
        </Typography>

        {/* TITLE */}
        <Typography variant="h5" className="mb-2 normal-case">
          {title}
        </Typography>

        {/* DESCRIPTION */}
        <Typography className="mb-6 font-normal text-gray-500">
          {desc}
        </Typography>

        {/* BUTTONS */}
        <div className="grid grid-cols-2 gap-3">
          <Button variant="outlined" className="w-full">
            {label}
          </Button>

          <Link href={`/register?course=${encodeURIComponent(title)}`}>
            <Button color="blue" className="w-full">
              Apply
            </Button>
          </Link>
        </div>

        {/* BROCHURE */}
        {brochure && (
          <a
            href={brochure}
            target="_blank"
            rel="noopener noreferrer"
            className="block mt-3"
          >
            <Button color="blue" variant="outlined" className="w-full">
              Open Brochure
            </Button>
          </a>
        )}
      </CardBody>
    </Card>
  );
}

export default CourseCard;
