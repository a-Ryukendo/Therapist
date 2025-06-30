# Therapist Website

This is a single-page marketing website for a fictional clinical psychologist, Dr. Serena Blake, PsyD. The project was built using Next.js, TypeScript, and Tailwind CSS, and it features a modern, responsive design with several interactive components.

## Features

*   **Responsive Design**: Fully responsive layout that works on desktops, tablets, and mobile devices.
*   **Interactive Components**:
    *   **Collapsible Menu**: A full-screen mobile menu built with Headless UI.
    *   **Animated FAQ**: An accordion-style FAQ section powered by Framer Motion.
    *   **Testimonials Carousel**: A touch-friendly slider for testimonials, built with Swiper.js.
*   **Contact Form**: A functional contact form with client-side validation using React Hook Form.
*   **Modern Tooling**: Developed with the Next.js App Router and TypeScript for type safety.

## Tech Stack

*   **Framework**: [Next.js](https://nextjs.org/)
*   **Language**: [TypeScript](https://www.typescriptlang.org/)
*   **Styling**: [Tailwind CSS](https://tailwindcss.com/)
*   **UI/Animation**:
    *   [Headless UI](https://headlessui.com/)
    *   [Framer Motion](https://www.framer.com/motion/)
    *   [Swiper.js](https://swiperjs.com/)
    *   [Lucide React](https://lucide.dev/) (for icons)
*   **Forms**: [React Hook Form](https://react-hook-form.com/)

## Getting Started

Follow these steps to get the development environment running.

### Prerequisites

You need to have [Node.js](https://nodejs.org/en/) (v20 or later) and npm installed on your machine.

### Installation

1.  Clone the repository:
    ```sh
    git clone <repository-url>
    ```
2.  Navigate to the project directory:
    ```sh
    cd therapist-website
    ```
3.  Install the dependencies:
    ```sh
    npm install
    ```

### Running the Development Server

To start the development server, run:

```sh
npm run dev
```

The site will be available at [http://localhost:3000](http://localhost:3000).

## Available Scripts

*   `npm run dev`: Starts the development server with Turbopack.
*   `npm run build`: Creates a production-ready build.
*   `npm run start`: Starts the production server.
*   `npm run lint`: Lints the code using ESLint.

## Customization

- **Text and Content**: All text, including names, bios, services, and testimonials, are placeholders. You can edit the content directly in each component file located in `src/components/`.
- **Styling and Colors**: Custom colors and theme settings can be adjusted in the `tailwind.config.ts` file.
- **Contact Form**: The contact form API endpoint is located at `src/app/api/contact/route.ts`. You will need to add your own email-sending logic (e.g., using SendGrid, Resend, or Nodemailer) to make it fully functional.
- **Calendly Link**: The "Schedule a Consultation" button in the `ContactSection` component links to a placeholder. Update the `href` with your personal Calendly link.
- **Social Media Links**: Update the social media links in the `Footer` component.
