"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./ui/Button";

const testimonials = [
  {
    name: "Aisha Yusuf",
    role: "Founder, CraftHub NG",
    content: "Working with Tobams Group on our website was a breeze. They understood our vision and transformed it into a beautiful online space. Highly recommend their Website Design service!",
    image: "/one.png",
  },
  {
    name: "John Davies",
    role: "Marketing Manager, E-Commerce Emporium",
    content: "Tobams Group's Digital Marketing strategies gave our brand the boost it needed. Simple yet powerful techniques that delivered tangible results. A pleasure to collaborate with!",
    image: "/two.png",
  },
  {
    name: "Chinonso Nwankwo",
    role: "HR Director, FutureTech Solutions",
    content: "Tobams Group has been instrumental in our talent acquisition journey. Their Tech Talent Solution service consistently connects us with the right professionals. Reliable and straightforward.",
    image: "/three.png",
  },
  {
    name: "Sarah Johnson",
    role: "CEO of Tech Innovations Inc.",
    content: "Tobams Group is a true partner in our journey to digital excellence. Their creativity and technical expertise have propelled our projects to new heights. Their work is top-notch!",
    image: "/one.png",
  },
  {
    name: "Michael Chen",
    role: "Product Lead, DevSystems",
    content: "The level of professionalism and technical depth Tobams Group brings is unmatched. They delivered our LMS ahead of schedule and exceeded our feature requirements.",
    image: "/two.png",
  }
];

export const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="bg-[#FBFBFB] py-16 lg:py-24 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <h2 className="mb-12 text-center font-display text-3xl font-bold text-[#1A1A1A] md:text-4xl">
          Testimonials
        </h2>

        <div className="relative">
          {/* Swiper Container */}
          <div className="relative overflow-visible">
            <div 
              className="flex transition-transform duration-500 ease-in-out gap-6 [--items:1] md:[--items:3.5]"
              style={{ 
                transform: `translateX(calc(-${currentIndex} * (100% / var(--items) + (24px / var(--items)))))` 
              } as React.CSSProperties}
            >
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index} 
                  className="flex-shrink-0 w-[calc(100%/var(--items)-(24px*(var(--items)-1)/var(--items)))] min-h-[280px]"
                >
                  <div className="h-full rounded-2xl bg-white p-6 shadow-sm border-l-4 border-[#E31B54] flex flex-col">
                    <div className="mb-6 flex items-center gap-4">
                      <div className="relative h-12 w-12 overflow-hidden rounded-full border-2 border-yellow-400">
                        <Image
                          src={testimonial.image}
                          alt={testimonial.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-bold text-[#1A1A1A]">{testimonial.name}</h4>
                        <p className="text-sm text-gray-500">{testimonial.role}</p>
                      </div>
                    </div>
                    <p className="text-[14px] md:text-[18px] leading-[150%] text-[var(--color-main-text)]">
                      {testimonial.content}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 flex justify-end gap-4 pr-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={prevSlide}
              className="h-12 w-12 rounded-full bg-[#FFEBF0] text-[#E31B54] hover:bg-[#FFD1DD]"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={nextSlide}
              className="h-12 w-12 rounded-full bg-[#FFEBF0] text-[#E31B54] hover:bg-[#FFD1DD]"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
