import Image from "next/image";
import Link from "next/link";

export const Hero = () => {
  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="relative w-full overflow-hidden mb-[24px] md:mb-[40px]"
    >
      <Image
        src="/hero.jpg"
        alt="A professional woman working with vibrant data dashboards in a dark tech environment"
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

        <span className="mb-[8px] md:mb-[18px] inline-flex items-center rounded-full border border-white/30 bg-white/10 px-[32px] md:px-[48px] py-[10px] md:py-[12px] text-[12px] md:text-[14px] font-semibold uppercase tracking-[0.18em] text-white backdrop-blur-sm md:text-sm">
          What We Do
        </span>

        <h1
          id="hero-heading"
          className="mb-[12px] md:mb-[15px] font-display text-[24px] font-bold leading-[29px] text-white sm:text-[48px] md:text-[56px] lg:text-[64px]"
          style={{ fontFamily: "var(--font-display, 'Nunito', sans-serif)" }}
        >
          Training and Development
        </h1>

        <p className="mb-[32px] md:mb-[40px] text-[14px] text-[#ffffff] md:text-[18px] lg:text-[20px] font-semibold">
          Our comprehensive range of programs and resources is designed to enhance skills, broaden knowledge, and propel careers forward in today's ever-evolving landscape.
        </p>
        <Link
          href="#consultation"
          id="hero-cta-btn"
          className="inline-flex items-center justify-center rounded-md bg-[var(--color-primary)] px-[22px] py-[9px] text-[14px] md:text-[18px] font-semibold text-white shadow-lg transition-opacity hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-transparent md:px-[24px] md:py-[10px] md:text-base"
        >
          Book a Consultation
        </Link>
      </div>
    </section>
  );
};
