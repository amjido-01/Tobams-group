import React from "react";
import { ArrowUpRight, ChevronRight } from "lucide-react";
import { Button } from "./ui/Button";

const features = [
  {
    title: "Expert-Led Learning",
    desc: "Gain insight from seasoned professionals in the field as they mentor you through the subtleties of business analysis.",
  },
  {
    title: "Interactive Workshops",
    desc: "Engage in hands-on workshops designed to enhance your training capabilities and provide practical insights.",
  },
  {
    title: "Comprehensive Curriculum",
    desc: "Access a robust curriculum that covers fundamental principles and advanced methodologies, ensuring a well-rounded understanding.",
  },
  {
    title: "Global Recognition",
    desc: "You will attain a globally recognized certification, opening doors to new career opportunities and industry recognition.",
  },
];

export const ConsultantSection = () => {
  return (
    <section className="bg-[#5712441A] py-16 lg:py-24 mb-6 md:mb-10">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10">
        
        <div className="max-w-xl mb-3">
          <h2 className="mb-5 font-display text-2xl font-semibold leading-[130%] text-[var(--color-primary)] md:text-3xl">
            Training The Consultant
          </h2>
          <h3 className="mb-5 font-display text-base font-semibold leading-[130%] text-[var(--color-primary)] md:text-xl">
            Maximise Your Potential as a Certified Trainer:
          </h3>
          <p className="text-sm mb-8 leading-[130%] font-regular text-[#151515] md:text-lg">
            With the help of our Training Consultants program, take a revolutionary step toward 
            becoming a distinguished certified training consultant. Learn from professionals 
            in the field, immerse yourself in a thorough curriculum, and hone your training 
            methods through interactive workshops. Participating in our program will enable 
            you to gain expertise in diverse courses while also developing the abilities to 
            mentor and encourage others in their career advancement.
          </p>
        </div>

        <div className="overflow-hidden rounded-2xl bg-[var(--color-primary)] p-6 mb-8">
          <div className="grid gap-x-12 gap-y-10 md:grid-cols-2">
            {features.map((feature, i) => (
              <div key={i} className="text-white">
                <h4 className="mb-3 text-base leading-[150%] font-bold md:text-lg">
                  {feature.title}
                </h4>
                <p className="text-sm leading-relaxed opacity-90 md:text-[15px]">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="">
          <Button
            href="#learn-more"
            variant="primary"
            size="md"
            className="gap-2 px-8 py-3 text-base"
          >
            Learn More 
            <ChevronRight className="h-5 w-5 md:hidden" />
            <ArrowUpRight className="h-5 w-5 hidden md:block"/>
          </Button>
        </div>

      </div>
    </section>
  );
};
