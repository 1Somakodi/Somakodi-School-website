"use client";

import Image from "next/image";
import { Typography, Card, CardBody, Avatar } from "@material-tailwind/react";

function TESTIMONIAL() {
  return (
    <section className="px-8 py-10">
      <div className="container mx-auto">
        <Card color="transparent" shadow={false}>
          <CardBody className="col-span-full gap-10 place-items-center overflow-visible grid grid-cols-1 lg:grid-cols-4">
            
            {/* Left Image */}
            <div className="w-full xl:w-[600px] flex items-center overflow-hidden rounded-xl justify-center col-span-2 h-full">
              <Image
                width={768}
                height={768}
                src="/image/blogs/blog6.svg"
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

              {/* Tutor Section */}
              <div className="flex items-center mt-8 gap-4">
                <Avatar
                  variant="circular"
                  src="/image/aln.jpg"
                  alt="spotify"
                  size="md"
                />
                <div>
                  <Typography variant="h6" color="blue-gray" className="mb-0.5">
                    Allan Ochieng
                  </Typography>
                  <Typography
                    variant="small"
                    className="font-normal !text-gray-500"
                  >
                    Tutor Somakodi
                  </Typography>
                </div>
              </div>

            </div>
          </CardBody>
        </Card>
      </div>
    </section>
  );
}

export default TESTIMONIAL;