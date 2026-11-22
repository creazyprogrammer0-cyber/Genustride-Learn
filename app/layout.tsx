import type {Metadata} from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Genustride Learn — Concept-Driven Practical Learning Platform',
  description:
    'A modern, practical, concept-driven online learning platform connecting academic knowledge with real-world understanding, experiments, and creation.',
  openGraph: {
    title: 'Genustride Learn — Concept-Driven Practical Learning Platform',
    description:
      'A modern, practical, concept-driven online learning platform connecting academic knowledge with real-world understanding, experiments, and creation.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Genustride Learn — Concept-Driven Practical Learning Platform',
    description:
      'A modern, practical, concept-driven online learning platform connecting academic knowledge with real-world understanding, experiments, and creation.',
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500;600&family=Manrope:wght@500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        suppressHydrationWarning
        className="min-h-screen bg-[#FFFFFF] text-[#17243B] antialiased selection:bg-[#315BE8]/15 selection:text-[#17243B]"
      >
        {children}
      </body>
    </html>
  );
}
