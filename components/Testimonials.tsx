"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Aisha Yusuf",
    role: "Founder, CraftHub NG",
    image: "/avatar1.png",
    text: "Working with Tobams Group on our website was a breeze. They understood our vision and transformed it into a beautiful online space. Highly recommend their Website Design service!"
  },
  {
    name: "John Davies",
    role: "Marketing Manager, E-Commerce Emporium",
    image: "/avatar2.png",
    text: "Tobams Group's Digital Marketing strategies gave our brand the boost it needed. Simple yet powerful techniques that delivered tangible results. A pleasure to collaborate with!"
  },
  {
    name: "Chinonso Nwankwo",
    role: "HR Director, FutureTech Solutions",
    image: "/avatar3.png",
    text: "Tobams Group has been instrumental in our talent acquisition journey. Their Tech Talent Solution service consistently connects us with the right professionals. Reliable and straightforward."
  },
  {
    name: "Sarah Johnson",
    role: "CEO of Tech Innovations Inc.",
    image: "/avatar4.png",
    text: "Tobams Group is a true partner in our journey to digital excellence. Their creativity and technical expertise have propelled our projects to new heights. Their work is top-notch, and the results speak for themselves. I can't recommend them enough!"
  }
];

export const Testimonials = () => {
  const [startIndex, setStartIndex] = useState(0);

  const next = () => {
    setStartIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setStartIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="bg-white overflow-hidden mb-[24px] md:mb-[64px]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        
        <h2 className="mb-12 text-center font-bold text-[20px] font-bold text-[var(--color-main-text)] md:text-[40px]">
          Testimonials
        </h2>

        <div className="relative">
          <div className="flex gap-6 transition-transform duration-500 ease-in-out md:grid md:grid-cols-3">
            {testimonials.map((t, i) => {
              const isVisibleOnMobile = i === startIndex;
              const isVisibleOnDesktop = (i >= startIndex && i < startIndex + 3) || (startIndex + 3 > testimonials.length && i < (startIndex + 3) % testimonials.length);

              return (
                <div 
                  key={i}
                  className={`
                    min-w-full flex-shrink-0 rounded-[16px] border-l-4 border-[var(--color-secondary)] bg-white p-8 shadow-[0_4px_20px_rgba(0,0,0,0.05)] transition-all duration-300 md:min-w-0
                    ${isVisibleOnMobile ? "block" : "hidden md:block"}
                  `}
                >
                  <div className="mb-6 flex items-center gap-4">
                    <div className="relative h-14 w-14 overflow-hidden rounded-full bg-gray-100">
                      <Image
                        src={t.image}
                        alt={t.name}
                        fill
                        sizes="56px"
                        className="object-cover"
                      />
                    </div>
                    <div className="mb-[18px] md:mb-[24px]">
                      <h4 className="text-[14px] md:text-[16px] font-bold text-[var-(--color-main-text)] leading-[150%]">{t.name}</h4>
                      <p className="text-[12px] md:text-[14px] text-[var-(--color-gray-text)]">{t.role}</p>
                    </div>
                  </div>
                  <p className="text-[14px] md:text-[15px] leading-[150%] md:text-[18px] font-regular text-[var-(--color-main-text)]">
                    {t.text}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="mt-12 flex justify-end gap-4">
            <button
              onClick={prev}
              className="flex h-10 w-10 items-center justify-center rounded bg-[#F043541A] text-[var(--color-secondary)] transition-all hover:bg-[var(--color-secondary)] hover:text-white"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={next}
              className="flex h-10 w-10 items-center justify-center rounded bg-[#F043541A] text-[var(--color-secondary)] transition-all hover:bg-[var(--color-secondary)] hover:text-white"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
