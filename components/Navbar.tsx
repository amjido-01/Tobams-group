"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Menu, User, X } from "lucide-react";
import { Button } from "./ui/Button";

interface NavItem {
  label: string;
  href: string;
  hasDropdown?: boolean;
}

const NAV_ITEMS: NavItem[] = [
  { label: "About", href: "#about", hasDropdown: true },
  { label: "What We Do", href: "#what-we-do", hasDropdown: true },
  { label: "Jobs", href: "#jobs", hasDropdown: true },
  { label: "Projects", href: "#projects" },
  { label: "TG Academy", href: "#academy" },
  { label: "Strategic Partnership", href: "#partnership" },
  { label: "Pricing", href: "#pricing" },
  { label: "Book a Consultation", href: "#consultation" },
];

export const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav
      className="w-full bg-white shadow-sm"
      aria-label="Main navigation"
      role="navigation"
    >
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10">
        <div className="flex h-16 items-center justify-between py-10 md:h-12">
          <Link
            href="/"
            className="flex flex-shrink-0 items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] focus-visible:ring-offset-2 rounded-sm"
            aria-label="Tobams Group – Home"
          >
            <Image
              src="/tobams.png"
              alt="Tobams Group logo"
              width={140}
              height={48}
              priority
              className="h-10 w-auto object-contain md:h-12"
            />
          </Link>

          <div className="hidden items-center gap-3 md:flex">
            <Button
              id="account-btn"
              aria-label="Account menu"
              aria-haspopup="true"
              variant="primary"
              size="md"
              className="gap-2 text-lg"
            >
              <User className="h-6 w-6 rounded-full border bg-[#DDD0DA] p-1 text-[var(--color-primary)]" />
              <span className="pl-2">Account</span>
              <ChevronDown className="h-5 w-5" />
            </Button>

            <Button
              id="take-assessment-btn"
              variant="secondary"
              size="md"
              className="px-5 text-lg"
            >
              Take Assessment
            </Button>
          </div>

          <Button
            id="mobile-menu-toggle"
            variant="dark"
            size="md"
            className="border-[#F9FAFB] px-2 py-2.5 md:hidden"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
          >
            {mobileOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </Button>
        </div>
      </div>

      <div className="hidden border-t">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10">
          <ul
            className="flex items-center justify-center gap-1 border-b border-[#DDD0DA] py-2.5"
            role="list"
          >
            {NAV_ITEMS.map((item, index) => (
              <li key={item.label} role="none">
                <Link
                  href={item.href}
                  id={`nav-item-${index}`}
                  className={`
                    group relative flex cursor-pointer items-center whitespace-nowrap px-3 py-2.5 text-lg font-regular
                    text-[var(--color-nav-text)] transition-colors hover:text-[var(--color-main-text)]
                    focus:outline-none focus-visible:rounded focus-visible:ring-2 focus-visible:ring-[var(--color-primary)]
                    ${index === 0 ? "text-[var(--color-primary)]" : ""}
                  `}
                  aria-current={index === 0 ? "page" : undefined}
                >
                  {item.label}
                  {item.hasDropdown && <ChevronDown className="ml-1 h-5 w-5 text-[var(--color-primary)]" />}
                  <span
                    className={`
                      absolute bottom-0 left-3 right-3 h-0.5 rounded-full bg-[var(--color-primary)]
                      transition-transform duration-200
                      ${index === 0 ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}
                    `}
                    aria-hidden="true"
                  />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div
        id="mobile-menu"
        role="region"
        aria-label="Mobile navigation"
        className={`border-t border-gray-100 bg-white md:hidden ${
          mobileOpen ? "block" : "hidden"
        }`}
      >
        <ul className="divide-y divide-gray-50 px-4 py-2" role="list">
          {NAV_ITEMS.map((item) => (
            <li key={item.label} role="none">
              <Link
                href={item.href}
                className="flex items-center justify-between py-3 text-sm font-medium text-[var(--color-nav-text)] hover:text-[var(--color-primary)] focus:outline-none focus-visible:text-[var(--color-primary)]"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
                {item.hasDropdown && <ChevronDown className="h-4 w-4" />}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex flex-col gap-3 border-t border-gray-100 px-4 py-4">
          <Button
            id="mobile-account-btn"
            variant="primary"
            size="full"
            className="gap-2"
          >
            <User className="h-5 w-5" aria-hidden="true" />
            Account
            <ChevronDown className="h-4 w-4" />
          </Button>
          <Button
            id="mobile-take-assessment-btn"
            variant="secondary"
            size="full"
          >
            Take Assessment
          </Button>
        </div>
      </div>
    </nav>
  );
};
