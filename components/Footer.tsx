import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { Button } from "./ui/Button";

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const MailIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
    <polyline points="22,6 12,13 2,6"></polyline>
  </svg>
);

const PhoneIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l2.27-2.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
  </svg>
);

const XIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="w-full bg-[#1a0b16] text-white">
      <div className="border-b border-white/10 py-10 bg-[#1D0617]">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div className="text-center md:text-left">
              <p className="md:text-[18px] text-[14px] font-regular opacity-80">Ready to be a part of something extraordinary?</p>
              <h2 className="mt-1 text-[20px] font-semibold md:text-[32px] leading-[130%]">Let&apos;s work together to create a difference</h2>
            </div>
            <Button
              href="#contact"
              variant="primary"
              size="md"
              className="px-8 py-3"
            >
              Get In Touch
            </Button>
          </div>
        </div>
      </div>

      <div className="py-16 lg:py-20">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
            
            <div className="flex flex-col gap-8">
              <Link href="/" className="md:mb-[24px]">
                <Image src="/tobams.png" alt="Tobams Group" width={160} height={50} style={{ height: "auto" }} className="" />
              </Link>
              <p className="text-[14px] md:text-[16px] leading-[150%] text-[#F8F8F8] font-regular mb-[24px]">
                Tobams Group is an innovative consultancy firm reshaping the future of tech talent 
                development in Africa, specializing in talent acquisition, internships, and skill 
                development with a global perspective.
              </p>
              <div className="flex gap-4">
                <Link href="#" className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#1a0b16] transition-transform hover:scale-110">
                  <LinkedinIcon className="h-5 w-5" />
                </Link>
                <Link href="#" className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#1a0b16] transition-transform hover:scale-110">
                  <InstagramIcon className="h-5 w-5" />
                </Link>
                <Link href="#" className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#1a0b16] transition-transform hover:scale-110">
                  <XIcon className="h-5 w-5" />
                </Link>
              </div>
            </div>

            <div>
              <h3 className="mb-[16px] text-[20px] font-bold">What We Do</h3>
              <ul className="space-y-2 text-[16px] opacity-70">
                <li><Link href="#" className="hover:opacity-100">Sustainability Services</Link></li>
                <li><Link href="#" className="hover:opacity-100">Strategy Planning and Implementation</Link></li>
                <li><Link href="#" className="hover:opacity-100">Tech Talent Solutions</Link></li>
                <li><Link href="#" className="hover:opacity-100">Training and Development</Link></li>
                <li><Link href="#" className="hover:opacity-100">IT Consulting Services</Link></li>
                <li><Link href="#" className="hover:opacity-100">Social Impact</Link></li>
                <li><Link href="#" className="hover:opacity-100">Talent Recruitment</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="mb-[16px] text-[20px] font-bold">Company</h3>
              <ul className="space-y-4 text-[16px] text-white">
                <li><Link href="#" className="hover:opacity-100">About</Link></li>
                <li><Link href="#" className="hover:opacity-100">Jobs</Link></li>
                <li><Link href="#" className="hover:opacity-100">Projects</Link></li>
                <li><Link href="#" className="hover:opacity-100">Our Founder</Link></li>
                <li><Link href="#" className="hover:opacity-100">Business Model</Link></li>
                <li><Link href="#" className="hover:opacity-100">The Team</Link></li>
                <li><Link href="#" className="hover:opacity-100">Contact Us</Link></li>
                <li><Link href="#" className="hover:opacity-100">Blog</Link></li>
                <li><Link href="#" className="hover:opacity-100">FAQs</Link></li>
                <li><Link href="#" className="hover:opacity-100">Testimonials</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="mb-[16px] text-[20px] font-bold">Solution</h3>
              <ul className="space-y-4 text-[16px] text-white">
                <li><Link href="#" className="hover:opacity-100">Tobams Group Academy</Link></li>
                <li><Link href="#" className="hover:opacity-100">Help a Tech Talent</Link></li>
                <li><Link href="#" className="hover:opacity-100">Campus Ambassadors Program</Link></li>
                <li><Link href="#" className="hover:opacity-100">Join Our Platform</Link></li>
                <li><Link href="#" className="hover:opacity-100">Pricing</Link></li>
                <li><Link href="#" className="hover:opacity-100">Book a Consultation</Link></li>
                <li><Link href="#" className="hover:opacity-100">Join Our Slack Community</Link></li>
              </ul>
            </div>
          </div>

          <div className="mt-16 rounded-[16px] bg-[#1D0617] md:p-10">
            <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
              
              {/* Column 1: United Kingdom (Desktop: 1, Mobile: 2) */}
              <div className="order-2 md:order-1 md:border-r md:border-white/10 md:pr-12">
                <h3 className="mb-6 text-[20px] font-bold text-white">Registered Offices</h3>
                <h4 className="mb-3 text-[16px] font-bold text-[var(--color-secondary)]">United Kingdom</h4>
                <p className="text-[14px] md:text-[16px] leading-[150%] text-[#F8F8F8] opacity-90 font-regular">
                  07451196 (Registered by Company House) <br />
                  Vine Cottages, 215 North Street, Romford, <br />
                  Essex, United Kingdom, RM1 4QA
                </p>
              </div>

              {/* Column 2: Nigeria (Desktop: 2, Mobile: 3) */}
              <div className="order-3 md:order-2 md:border-r md:border-white/10 md:pr-12">
                <div className="hidden lg:block h-[30px] mb-6"></div> {/* Spacer for alignment */}
                <h4 className="mb-3 text-[16px] font-bold text-[var(--color-secondary)]">Nigeria</h4>
                <p className="text-[14px] md:text-[16px] leading-[150%] text-[#F8F8F8] opacity-90 font-regular">
                  RC 1048722 (Registered by the Corporate Affairs Commission) <br />
                  4, Muaz Close, Angwari-Rimi
                </p>
              </div>

              {/* Column 3: Contact Information (Desktop: 3, Mobile: 1) */}
              <div className="order-1 md:order-3 md:pl-12">
                <h3 className="mb-6 text-[20px] font-bold text-white">Contact Information</h3>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3">
                    <MailIcon className="h-5 w-5 text-[var(--color-secondary)] flex-shrink-0" />
                    <span className="text-[14px] md:text-[16px] text-[#F8F8F8] opacity-90">theteam@tobamsgroup.com</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <PhoneIcon className="h-5 w-5 text-[var(--color-secondary)] flex-shrink-0" />
                    <span className="text-[14px] md:text-[16px] text-[#F8F8F8] opacity-90">+447886600748</span>
                  </li>
                </ul>
              </div>

            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 py-8">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <p className="text-[14px] font-light leading-[24px] md:text-[16px]">
              Copyright © Tobams Group, {currentYear}. All rights reserved.
            </p>
            <div className="flex gap-8 text-sm opacity-50">
              <Link href="#" className="hover:opacity-100 underline">Terms and Conditions</Link>
              <Link href="#" className="hover:opacity-100 underline">Privacy Policy</Link>
              <Link href="#" className="hover:opacity-100 underline">Cookies Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
