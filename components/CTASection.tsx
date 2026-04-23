import React from "react";
import Link from "next/link";

export const CTASection = () => {
  return (
    <section className="bg-white py-12 lg:py-20 mb-[24px] md:mb-[60px]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-10">
        <div className="flex flex-col items-center justify-center rounded-[8px] bg-[var(--color-primary)] px-6 py-12 text-center text-white md:py-16">
          
          <div className="hidden md:block">
            <h2 className="mb-8 text-[16px] font-medium leading-relaxed md:text-[20px]">
              Want to accelerate professional growth and development at your organisation? <br />
              See how we can help.
            </h2>
          </div>

          <div className="block md:hidden">
            <h2 className="mb-8 text-[18px] font-medium leading-relaxed">
              Don&apos;t just dream it—let&apos;s build it! <br />
              Click now and start your project with Tobams Group. <br />
              Your journey to digital excellence begins here.
            </h2>
          </div>

          <Link
            href="#consultation"
            className="rounded-md bg-white px-[24px] py-[13px] text-[14px] font-semibold text-[var(--color-primary)] transition-all hover:bg-gray-100 active:scale-95 md:text-[18px]"
          >
            Book a Consultation
          </Link>
        </div>
      </div>
    </section>
  );
};
