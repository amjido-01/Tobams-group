import Image from "next/image";
import { Button } from "./ui/Button";

export const Hero = () => {
  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="relative w-full overflow-hidden mb-6 md:mb-10"
    >
      <Image
        src="/hero.jpg"
        alt="Collaborative team working together on the TG Academy platform"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />

      <div
        className="absolute inset-0 bg-black/60"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto flex min-h-[420px] max-w-5xl flex-col items-center justify-center px-6 py-20 text-center md:min-h-[520px] lg:min-h-[580px] lg:px-8">

        <span className="mb-2 md:mb-[18px] inline-flex items-center rounded-full bg-white/10 px-8 md:px-12 py-2.5 md:py-3 text-xs md:text-sm font-semibold uppercase tracking-[0.18em] text-white backdrop-blur-sm">
          What We Do
        </span>

        <h1
          id="hero-heading"
          className="mb-3 md:mb-[15px] font-display text-[28px] font-bold leading-[1.2] text-white md:text-5xl lg:text-[64px]"
          style={{ fontFamily: "var(--font-display, 'Nunito', sans-serif)" }}
        >
          Training and Development
        </h1>

        <p className="mb-8 md:mb-10 text-base text-[#ffffff] md:text-lg lg:text-xl font-semibold opacity-90">
          Our comprehensive range of programs and resources is designed to enhance skills, broaden knowledge, and propel careers forward in today's ever-evolving landscape.
        </p>
        <Button
          href="#consultation"
          id="hero-cta-btn"
          variant="primary"
          size="lg"
          className="px-[22px] py-[9px] md:px-6 md:py-2.5"
        >
          Book a Consultation
        </Button>
      </div>
    </section>
  );
};
