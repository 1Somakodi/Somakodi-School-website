"use client";

import Link from "next/link";
import Image from "next/image";
import { Typography, Card, CardBody, Avatar, Button } from "@material-tailwind/react";


function TESTIMONIAL() {
  return (
    <section className="px-8 py-10">
      <div className="container mx-auto">
        <Card color="transparent" shadow={false}>
          <CardBody className="col-span-full gap-10 place-items-center overflow-visible grid grid-cols-1 lg:grid-cols-4">
            
            {/* Left Image */}
            <div className="w-full xl:w-[600px] flex items-center overflow-hidden rounded-xl justify-center col-span-2 h-full border-4 border-pink-500 group">
              <Image
                width={768}
                height={768}
                src="/image/blogs/senew.jpg"
                alt="testimonial image"
                className="w-full h-full scale-110 object-cover"
              />
            </div>

            {/* Right Text Section */}
            <div className="col-span-2 w-full ml-8">

              {/* 🔥 Fancy Discount Badge */}
              <div className="inline-block mb-4 px-4 py-2 rounded-full bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 text-white font-semibold text-sm shadow-lg animate-pulse">
                Get 30% OFF Tuition Fee for Feb 26 Intake!
                Early enrollment
              </div>

              <Typography variant="h6" color="blue" className="mb-4">
                ONLINE COURSE
              </Typography>

              <Typography
                variant="h3"
                color="blue-gray"
                className="mb-4 font-bold"
              >
                Software Engineering
              </Typography>

              <Typography className="mb-1 w-full font-normal !text-gray-500">
                Become a well-rounded software engineer with strong command of
                algorithms, data structures, API development, databases, cloud
                deployment, and version control. This program teaches you how to
                design, develop, test, and maintain complete software systems,
                giving you the skills needed to contribute to modern software
                teams and tackle complex engineering challenges.
              
              </Typography>
              
              <Link href="/courses/software-engineering">
                <Button size="md" color="blue" className="btn-primary mt-4">
                  View More
                </Button>
              </Link>

            </div>
          </CardBody>
        </Card>
      </div>
    </section>
  );
}

export default TESTIMONIAL;