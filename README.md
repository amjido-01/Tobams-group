# Tobams Group Landing Page

A professional, responsive landing page for Tobams Group, built with Next.js, Tailwind CSS, and Lucide React.

## 🚀 Project Links
- **Live Demo**: [https://tobams-group-rust.vercel.app/](https://tobams-group-rust.vercel.app/)
- **Design Reference (Figma)**: [Figma Design Link](https://www.figma.com/design/wuqCLkK1feTgB6xxSRRwZu/Frontend-Intern-Assessment?node-id=1-1805&t=KQPHqvjFtBG316SR-0)

## 🛠 Tech Stack
- **Framework**: Next.js 15+ (App Router)
- **Styling**: Tailwind CSS
- **Icons**: Lucide React / Custom SVG
- **Deployment**: Vercel

## ⚙️ Getting Started

First, install the dependencies:
```bash
npm install
```

Then, run the development server:
```bash
npm run dev
```
- **Framework**: [Next.js 15+](https://nextjs.org/) (App Router)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) (Utility-first CSS)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Fonts**: [Next/font](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) (Nunito & Nunito Sans)
- **Deployment**: [Vercel](https://vercel.com/)

## 🎨 Design Decisions & Technical Assumptions
- **Custom Swiper Logic**: Implemented a responsive testimonial carousel using pure CSS variables (`--items`) and Tailwind prefixes. This avoids heavy external dependencies while maintaining the "3.5 cards visible" requirement on larger screens.
- **Breakpoint Configuration**: Aligned with the assessment spec in `globals.css`:
  - `sm`: 425px (Mobile)
  - `md`: 768px (Tablet)
  - `lg`: 1280px (Desktop)
- **Component Architecture**: Broke the page into 10+ modular components located in `@/components` to ensure maintainability and clean code structure.
- **Accessibility (A11y)**: 
  - Used semantic HTML5 elements (`<nav>`, `<main>`, `<section>`, `<footer>`).
  - Ensured all interactive elements have `aria-label` or descriptive text for screen readers.
  - Implemented keyboard-navigable focus states for buttons and links.
- **Image Optimization**: All images utilize `next/image` with appropriate `sizes` attributes to ensure optimal loading performance across all device types.

## ⚙️ Setup Instructions

1. **Clone the repository**:
   ```bash
   git clone [your-repo-url]
   cd tobams
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   ```

4. **Build for production**:
   ```bash
   npm run build
   ```

---
*Developed by Tobams Group Frontend Intern Candidate.*
