import React from "react";
import Image from "next/image";
import { Zap } from "lucide-react";

const features = [
  "Enhanced Leadership Skills",
  "Improved Employee Engagement",
  "Stronger Organisational Culture",
  "Sustainable Growth",
];
export const ManagementDevelopment = () => {

  return (
    <section className="mb-[24px] bg-white py-12 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="overflow-hidden rounded-[15px] bg-[#2C0922] p-5 md:p-10 lg:p-16">
          <h2 className="mb-[20px] leading-[150%] block text-center font-display text-[16px] font-semibold text-white md:hidden">
            Management Development Program
          </h2>

          <div className="grid items-center gap-8 md:grid-cols-2 lg:gap-16">
            <div className="relative h-[250px] w-full overflow-hidden rounded-[16px] md:h-full">
              <Image
                src="/program.png"
                alt="Management Development Program"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>

            <div className="text-white">
              <h2 className="mb-6 hidden font-display text-[40px] font-semibold leading-tight md:block">
                Management Development Program
              </h2>

              <div className="space-y-6 text-[14px] leading-[150%] font-regular text-white md:text-[18px]">
                <p>
                  Tobams Group offers a comprehensive Management Development Program designed
                  to equip corporate organisations with the high-performing leaders they need to thrive.
                </p>
                <p>
                  Our program includes workshops, seminars, coaching sessions, online courses,
                  and experiential learning opportunities designed to improve leadership, strategic
                  thinking, communication, and other essential managerial competencies for
                  corporate organisations.
                </p>
              </div>

              <ul className="mt-10 space-y-4">
                {features.map((feature) => (
                  <li
                    key={feature}
                    className="flex leading-[150%] items-center gap-3 rounded-[12px] bg-[var(--color-shaded-purple)] px-3 py-2 transition-colors"
                  >
                    <Zap className="h-5 w-5 flex-shrink-0 fill-white text-white" />
                    <span className="text-[14px] font-semibold md:text-[18px]">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
