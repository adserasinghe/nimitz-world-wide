
import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster"
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { cn } from '@/lib/utils';
import ScrollToTopButton from '@/components/layout/ScrollToTopButton';
import Preloader from '@/components/layout/Preloader';
import AccessibilityWidget from '@/components/layout/AccessibilityWidget';
import WhatsAppWidget from '@/components/layout/WhatsAppWidget';

export const metadata: Metadata = {
  title: {
    default: 'Nimitz World Wide - Professional Web Development Services',
    template: '%s | Nimitz World Wide',
  },
  description: 'Nimitz World Wide offers professional web development, e-commerce solutions, and SEO services to help your business grow online. Contact us for a free quote.',
  keywords: ['web development', 'web design', 'SEO services', 'e-commerce websites', 'Nimitz World Wide'],
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&family=PT+Sans:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body className={cn("font-body antialiased")}>
        <Preloader />
        <Header />
        <main>{children}</main>
        <Footer />
        <Toaster />
        <AccessibilityWidget />
        <ScrollToTopButton />
        <WhatsAppWidget />
      </body>
    </html>
  );
}
