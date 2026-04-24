import React from "react";
import { Button } from "./ui/Button";

export const CTASection = () => {
  return (
    <section className="bg-white py-12 lg:py-20 mb-6 md:mb-[60px]">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10">
        <div className="flex flex-col items-center justify-center rounded-lg bg-[var(--color-primary)] px-6 py-12 text-center text-white md:py-16">
          
          <div className="hidden md:block">
            <h2 className="mb-8 text-base font-medium leading-relaxed md:text-xl">
              Want to accelerate professional growth and development at your organisation? <br />
              See how we can help.
            </h2>
          </div>

          <div className="block md:hidden">
            <h2 className="mb-8 text-lg font-medium leading-relaxed">
              Don&apos;t just dream it—let&apos;s build it! <br />
              Click now and start your project with Tobams Group. <br />
              Your journey to digital excellence begins here.
            </h2>
          </div>

          <Button
            href="#consultation"
            variant="white"
            size="lg"
            className="px-6 py-3 text-sm md:text-lg"
          >
            Book a Consultation
          </Button>
        </div>
      </div>
    </section>
  );
};
