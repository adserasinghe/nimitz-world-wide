# Nimitz World Wide - Professional Web Services

This repository contains the source code for the Nimitz World Wide corporate website, a modern, feature-rich web application built with Next.js and Firebase. The site showcases the company's services, portfolio, and blog, and includes AI-powered content generation tools.

## Tech Stack

- **Framework:** [Next.js](https://nextjs.org/) (App Router)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) with [ShadCN UI](https://ui.shadcn.com/) for components
- **AI/Generative Features:** [Firebase Genkit](https://firebase.google.com/docs/genkit)
- **Deployment:** Firebase App Hosting
- **Language:** [TypeScript](https://www.typescriptlang.org/)

## Key Features

- **Responsive Design:** Fully responsive layout that looks great on all devices.
- **AI Blog Generator:** A dashboard tool that uses generative AI to create blog post drafts on any topic.
- **Dynamic Content:** A blog, portfolio, and services section to showcase company work and expertise.
- **Modern UI:** A clean and professional user interface built with reusable components.
- **Performance Optimized:** Built with Next.js App Router for fast page loads and a smooth user experience.

## Getting Started

To run the project locally, follow these steps:

1.  **Clone the repository:**
    ```bash
    git clone <repository-url>
    cd <repository-directory>
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Set up environment variables:**
    Create a `.env` file in the root of the project and add any necessary environment variables (e.g., for Firebase or Genkit).

4.  **Run the development server:**
    ```bash
    npm run dev
    ```

5.  Open [http://localhost:9002](http://localhost:9002) in your browser to see the result.

## Project Structure

- `src/app/`: Contains the main pages of the application, following the Next.js App Router structure.
- `src/components/`: Reusable React components used throughout the site (UI elements, layout, sections).
- `src/ai/`: Home for all Genkit-related code, including AI flows for content generation.
- `src/lib/`: Utility functions and libraries.
- `public/`: Static assets like images and fonts.
