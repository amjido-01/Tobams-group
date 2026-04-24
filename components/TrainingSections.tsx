import React from "react";
import Image from "next/image";
import { Zap } from "lucide-react";

interface SubSectionProps {
  title: string;
  description: string;
  imagePath: string;
  features: string[];
  reverse?: boolean;
  imageRounded?: string;
}

const TrainingSubSection = ({ title, description, imagePath, features, reverse, imageRounded = "rounded-[24px]" }: SubSectionProps) => {
  return (
    <div className="py-[24px] md:py-[64px]">
      <h2 className="mb-[24px] block font-display text-[20px] font-semibold text-[var(--color-main-text)] md:hidden">
        {title}
      </h2>

      <div className={`flex flex-col gap-8 md:items-center lg:gap-16 ${reverse ? "md:flex-row-reverse" : "md:flex-row"}`}>
        
        <div className={`relative aspect-[4/3] w-full overflow-hidden ${imageRounded} md:w-1/2`}>
          <Image
            src={imagePath}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </div>

        <div className="w-full md:w-1/2">
          <h2 className="mb-[21px] hidden font-display text-[32px] font-bold text-[var(--color-main-text)] md:block md:text-[40px] leading-[150%]">
            {title}
          </h2>
          <p className="mb-[20px] md:mb-[19px] text-[14px] leading-relaxed text-[var(--color-gray-text)] font-regular md:text-[18px]">
            {description}
          </p>
          <ul className="space-y-4 md:pl-4">
            {features.map((feature, i) => (
              <li key={i} className="flex items-start gap-3">
                <Zap className="mt-1 h-[16px] w-[16px] flex-shrink-0 fill-[var(--color-spark)] text-[var(--color-spark)]" />
                <span className="text-[14px] font-regular text-[var(--color-gray-text)] md:text-[18px]">
                  {feature}
                </span>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </div>
  );
};

export const TrainingSections = () => {
  return (
    <section className="bg-white md:mb-[64px]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        
        <TrainingSubSection
          title="Corporate Trainings"
          imagePath="/corperate.png"
          reverse={true}
          imageRounded="rounded-tl-[30px] rounded-tr-[24px] rounded-bl-[40px] rounded-br-[23px] md:rounded-tl-[56px] md:rounded-tr-[24px] md:rounded-bl-[23px] md:rounded-br-[12px]"
          description="Empower your team with our customised Corporate Training programs designed to address the unique needs and objectives of your organisation. Our expert facilitators work closely with your team to deliver tailored learning experiences that align with your company's goals and values."
          features={[
            "Leadership Training",
            "Strategic Planning and Implementation",
            "Project Management",
            "Sustainability Training",
            "Customised Training"
          ]}
        />

        <TrainingSubSection
          title="Personalised Individual Training"
          imagePath="/personal.png"
          reverse={false}
          imageRounded="rounded-tl-[33px] rounded-tr-[8px] rounded-bl-[8px] rounded-br-[8px] md:rounded-tl-[100px] md:rounded-tr-[24px] md:rounded-bl-[24px] md:rounded-br-[24px]"
          description="Begin a journey of lifelong learning and professional development with Tobams Group's diverse range of training programs for individuals. From technical skills mastery to soft skills enhancement, our courses cover a wide spectrum of topics to meet the evolving needs of today's professionals."
          features={[
            "Leadership Development",
            "Soft Skills Development",
            "Industry Specific Knowledge",
            "Technical Skills Enhancement",
            "Time Management and Productivity",
            "Career Development"
          ]}
        />

        <TrainingSubSection
          title="Capacity Development"
          imagePath="/capacity.png"
          reverse={true}
          imageRounded="rounded-tl-[33px] rounded-tr-[8px] rounded-bl-[8px] rounded-br-[8px] md:rounded-tl-[24px] md:rounded-tr-[8px] md:rounded-bl-[8px] md:rounded-br-[8px]"
          description="At Tobams Group, we empower individuals and organizations through tailored training programs, expert-led workshops, and personalized mentorship. We are committed to your success and growth. We are dedicated to providing a comprehensive suite of benefits designed to foster your development and success:"
          features={[
            "Tailored Training Programs",
            "Expert-Led Workshops",
            "Personalized Mentorship",
            "Technical Skills Enhancement",
            "Collaborative Learning Environment",
            "Ongoing Support and Resources"
          ]}
        />

      </div>
    </section>
  );
};
