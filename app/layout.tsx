import type {Metadata} from 'next';
import {Inter, JetBrains_Mono, Manrope} from 'next/font/google';
import './globals.css';
import {buildPageMetadata, buildWebsiteJsonLd, getSiteUrl} from '@/lib/seo';
import {VERIFIED_PHOTOGRAPHY_INVENTORY} from '@/lib/photography-inventory';
import {InteractiveBackground} from '@/components/layout/interactive-background';
import {MotionProvider, MotionControls} from '@/components/motion';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-inter',
  display: 'swap',
});

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['500', '600', '700', '800'],
  variable: '--font-manrope',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  ...buildPageMetadata({
    title: 'Genustride Learn — Concept-Driven Practical Learning Platform',
    description:
      'Move beyond rote memorization. Explore mathematics, physics, chemistry, biology, technology, and engineering through real-world understanding and experiments.',
    path: '/',
    imageUrl: VERIFIED_PHOTOGRAPHY_INVENTORY.homeHero.url,
    imageAlt: VERIFIED_PHOTOGRAPHY_INVENTORY.homeHero.alt,
    type: 'website',
  }),
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  const websiteJsonLd = buildWebsiteJsonLd();

  return (
    <html
      lang="en"
      className={`${inter.variable} ${manrope.variable} ${jetbrainsMono.variable}`}
    >
      <body
        suppressHydrationWarning
        className="relative min-h-screen bg-transparent text-[#17243B] antialiased selection:bg-[#315BE8]/15 selection:text-[#17243B]"
      >
        <MotionProvider>
          <InteractiveBackground />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{__html: JSON.stringify(websiteJsonLd)}}
          />
          <MotionControls />
          {children}
        </MotionProvider>
      </body>
    </html>
  );
}
