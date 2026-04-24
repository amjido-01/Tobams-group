import React from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Button } from "./ui/Button";

const courses = [
  "Business Analysis",
  "Design Thinking",
  "Effective Communication",
  "Entrepreneurship",
  "Career Development",
  "Business Model",
];
export const LMSSection = () => {

  return (
    <section className="bg-[#5712441A] py-16 lg:py-24 mb-[24px] md:mb-[40px]">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10">
        <h2 className="mb-[24px] leading-[150%] block font-display text-[20px] md:text-[40px] font-semibold text-[var(--color-primary)] md:hidden">
          Learning Management System
        </h2>

        <div className="grid items-center gap-12 md:grid-cols-2 lg:grid-cols-[1.2fr_1fr]">
          <div className="relative mx-auto aspect-square w-full max-w-[450px] overflow-hidden rounded-full md:mx-0 md:max-w-[500px] lg:max-w-[720px]">
            <Image
              src="/management.png"
              alt="Diverse professional team collaborating in a modern workspace"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          <div className="flex flex-col">
            <h2 className="mb-6 hidden font-display text-3xl font-bold text-[var(--color-primary)] md:block lg:text-4xl">
              Learning Management System
            </h2>

            <div className="rounded-2xl bg-[#5712441A] p-6 shadow-sm lg:p-8 mb-[24px] md:mb-[32px]">
              <p className="mb-6 text-[14px] md:text-[18px] leading-relaxed text-[var(--color-main-text)] lg:text-base font-regular">
                TG Academy is a hub of knowledge and skill-building resources designed to empower tech talents on their learning journey. From technical courses covering the latest programming languages and development frameworks to soft skills training in leadership, effective communication and project management, TG Academy offers a wide range of courses to cater to diverse learning needs. With accessible and interactive learning materials, individuals can enhance their skills and stay ahead in today's competitive tech landscape.
              </p>

              <h3 className="mb-4 font-display text-[16px] md:text-[18px] font-bold text-[var(--color-primary)]">
                Some of our courses include:
              </h3>

              <ul className="grid grid-cols-1 gap-y-3 sm:grid-cols-3 lg:gap-x-2">
                {courses.map((course) => (
                  <li key={course} className="flex items-center text-[14px] md:text-[16px] font-regular leading-[150%] text-[var(--color-main-text)]">
                    <span className="mr-2 h-1.5 w-1.5 rounded-full bg-[var(--color-primary)]" />
                    {course}
                  </li>
                ))}
              </ul>

              <div className="block md:hidden mt-[24px]">
                <Button
                  href="#learn-more"
                  variant="primary"
                  size="md"
                  className="px-6 py-[12px] text-[14px]"
                >
                  Learn More <ArrowUpRight className="h-5 w-5" />
                </Button>
              </div>

            </div>

            <div className="hidden md:block">
              <Button
                href="#learn-more"
                variant="primary"
                size="md"
                className="px-6 py-[12px] text-[14px] md:text-[18px]"
              >
                Learn More <ArrowUpRight className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
