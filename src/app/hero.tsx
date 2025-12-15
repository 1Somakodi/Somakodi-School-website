"use client";

import Image from "next/image";
import Link from "next/link";
import { Button, Typography, Card } from "@material-tailwind/react";

function Hero() {
  return (
    <div className="!flex h-[90vh] w-full items-center justify-between px-10 pt-40">
      <Image
        width={1200}
        height={1200}
        src="/image/image8.svg"
        alt="bg-img"
        className="absolute inset-0 ml-auto w-[920px] h-[780px] rounded-bl-[100px] object-cover object-center"
      />
      <div className="container mx-auto">
        <div className="grid grid-cols-12 text-center lg:text-left">
          <Card className="col-span-full rounded-xl border border-white bg-white/90 py-10 p-8 shadow-lg shadow-black/10 backdrop-blur-sm backdrop-saturate-200 xl:col-span-7">
            <Typography
              variant="h1"
              color="blue-gray"
              className="lg:text-5xl !leading-snug text-3xl lg:max-w-3xl"
            >
              Unlock the Power of the Web with Our Expert Courses
            </Typography>
            <Typography variant="lead" className="mb-10 mt-6 !text-gray-900">
              Are you ready to embark on an exciting journey into the world of
              software development? Look no further! We are your trusted partner for
              mastering the art of software development.
            </Typography>
            <div className="mb-8 flex justify-center gap-4 lg:justify-start">
              <a href="#ourcourses">
                <Button className="btn-primary">View All Courses</Button>
              </a>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 items-center justify-between gap-4 lg:justify-start">
              <Image
                width={144}
                height={144}
                className="w-36 grayscale opacity-60"
                src="/logos/logo-JavaScript.svg"
                alt="javascript"
              />
              <Image
                width={144}
                height={144}
                className="w-36 grayscale opacity-60"
                src="/logos/logo-react.png"
                alt="react"
              />
              <Image
                width={144}
                height={144}
                className="w-36 grayscale opacity-60"
                src="/logos/logo-python.jpeg"
                alt="python"
              />
              <Image
                width={144}
                height={144}
                className="w-36 grayscale opacity-60"
                src="/logos/logo-html.png"
                alt="html"
              />
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
export default Hero;
