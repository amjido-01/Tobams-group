import React from "react";
import Image from "next/image";
import { Zap, ArrowUpRight } from "lucide-react";
import { Button } from "./ui/Button";

export const CEOSection = () => {
  const features = [
    "Strategic Career Guidance",
    "Leadership Development",
    "CV Development",
    "Sustainability Leadership",
    "Communication Skills",
    "Business Model",
  ];

  return (
    <section className="py-12 md:py-20 lg:py-24">
      <div className="mx-auto max-w-[1440px] bg-[#EF435333] rounded-[15px] p-5 md:p-10 px-4 sm:px-6 lg:px-10">
        
        <div className="mb-10 max-w-5xl">
          <p className="mb-4 text-sm italic font-semibold text-[#1671D9] md:text-xl">
            Learning With Our CEO:
          </p>
          <h2 className="mb-5 md:mb-6 font-display leading-[130%] text-xl font-bold text-[var(--color-primary)] md:text-[32px]">
            Transformation Hub With Jite Newton
          </h2>
          <p className="text-sm font-regular leading-[150%] text-[var(--color-main-text)] md:text-lg">
            Transformation Hub with Jite Newton is a flagship webinar series curated by the CEO, Dr. Jite Newton. 
            Designed to elevate career trajectories and leadership capabilities, this exclusive event offers 
            invaluable insights and strategies for personal and professional growth. Whether you&apos;re 
            seeking to advance your career or enhance your leadership skills, the Transformation Hub 
            provides a transformative learning experience to unlock your full potential and drive 
            meaningful change.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
          
          <div className="relative aspect-[16/10] w-full overflow-hidden rounded-lg">
            <Image
              src="/hub.png"
              alt="Transformation Hub with Jite Newton"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          <div className="rounded-lg bg-[#fdf2f2] p-2 md:p-4">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {features.map((feature) => (
                <div 
                  key={feature} 
                  className="flex items-center gap-3 rounded-xl bg-white px-2 py-4 shadow-sm"
                >
                  <Zap className="h-5 w-5 flex-shrink-0 fill-[var(--color-primary)] text-[var(--color-primary)]" />
                  <span className="text-sm font-regular text-[var(--color-main-text)] md:text-lg">
                    {feature}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <Button
                href="#learn-more"
                variant="primary"
                size="md"
                className="px-8 py-3 text-sm md:text-base"
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
