# MyHarmony Dashboard

This is a dashboard application built with Next.js, shadcn/ui, and TypeScript. It provides a user-friendly interface to manage and visualize staff and team data for an organization.

## Features

  * **Authentication:** Secure user login and sign-up functionality.
  * **Dashboard:** A central hub with an overview of staff and team statistics.
  * **Staff Management:**
      * View total number of staff and currently present staff.
      * Recognize a "Staff of the Month".
      * Visualize employee work location trends (Work from home vs. Office).
      * A paginated and searchable table of all staff members.
  * **Team Management:**
      * View the total number of teams.
      * See a list of team leaders with avatars and tooltips.
      * Visualize team distribution with a pie chart.
      * Track support tickets resolved by different teams with a line chart.
  * **Responsive Design:** A mobile-friendly layout with a drawer-based navigation for smaller screens.
  * **Theming:** Switch between light and dark modes.

## Tech Stack

  * **Framework:** [Next.js](https://nextjs.org/)
  * **UI Components:** [shadcn/ui](https://ui.shadcn.com/)
  * **Styling:** [Tailwind CSS](https://tailwindcss.com/)
  * **Language:** [TypeScript](https://www.typescriptlang.org/)
  * **Charting:** [Recharts](https://recharts.org/)
  * **Forms:** [React Hook Form](https://react-hook-form.com/) & [Zod](https://zod.dev/)
  * **API Client:** Client-side API generated from an OpenAPI specification using [@hey-api/openapi-ts](https://www.google.com/search?q=https://hey-api.com/).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](https://www.google.com/search?q=http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://www.google.com/search?q=%5Bhttps://nextjs.org/docs/app/building-your-application/optimizing/fonts%5D\(https://nextjs.org/docs/app/building-your-application/optimizing/fonts\)) to automatically optimize and load [Poppins](https://fonts.google.com/specimen/Poppins).

## Folder Structure

```
.
├── app
│   ├── (logged-out)      # Layout and pages for unauthenticated users (landing, login, sign-up)
│   ├── dashboard         # Layout and pages for authenticated users
│   ├── openapi-client    # Auto-generated API client from OpenAPI spec
│   ├── globals.css       # Global styles
│   └── layout.tsx        # Root layout
├── components
│   ├── actions           # Server actions (e.g., login-action.ts)
│   └── ui                # Reusable UI components from shadcn/ui
├── hooks                 # Custom React hooks (e.g., use-media-query.tsx)
├── lib                   # Utility functions and type definitions
├── public                # Static assets like images and SVGs
└── ...
```

## Learn More

To learn more about Next.js, take a look at the following resources:

  - [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
  - [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome\!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
