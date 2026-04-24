import React from "react";
import Link from "next/link";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "dark" | "white" | "ghost-secondary";
  size?: "sm" | "md" | "lg" | "full" | "icon" | "none";
  href?: string;
  asChild?: boolean; // For future extensibility, though simplified here
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", href, ...props }, ref) => {
    const baseStyles = "inline-flex items-center justify-center rounded-md font-semibold transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none";
    
    const variants = {
      primary: "bg-[var(--color-primary)] text-white hover:opacity-90 focus-visible:ring-[var(--color-primary)]",
      secondary: "bg-[var(--color-secondary)] text-white shadow-sm hover:opacity-90 focus-visible:ring-[var(--color-secondary)]",
      outline: "border-2 border-[var(--color-primary)] text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white focus-visible:ring-[var(--color-primary)]",
      ghost: "text-[var(--color-primary)] hover:bg-gray-100 focus-visible:ring-[var(--color-primary)]",
      dark: "bg-[#151515] text-white hover:bg-black focus-visible:ring-gray-800",
      white: "bg-white text-[var(--color-primary)] hover:bg-gray-100 focus-visible:ring-white",
      "ghost-secondary": "bg-[#F043541A] text-[var(--color-secondary)] hover:bg-[var(--color-secondary)] hover:text-white focus-visible:ring-[var(--color-secondary)]"
    };

    const sizes = {
      sm: "px-3 py-1.5 text-sm",
      md: "px-4 py-2.5 text-base",
      lg: "px-6 py-3 text-lg",
      full: "w-full py-3 text-base",
      icon: "h-10 w-10 p-0",
      none: ""
    };

    const combinedClassName = `${baseStyles} ${variant ? variants[variant] : ""} ${size ? sizes[size] : ""} ${className || ""}`.trim();

    if (href) {
      return (
        <Link href={href} className={combinedClassName} id={props.id}>
          {props.children}
        </Link>
      );
    }

    return (
      <button ref={ref} className={combinedClassName} {...props} />
    );
  }
);

Button.displayName = "Button";

export { Button };
