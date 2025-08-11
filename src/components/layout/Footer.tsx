'use client';

import { Logo } from "@/components/logo";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Footer() {
  const [currentYear, setCurrentYear] = useState<number | null>(null);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);


  return (
    <footer className="bg-muted py-8 px-4 md:px-6">
      <div className="container mx-auto grid grid-cols-1 gap-8 md:grid-cols-3">
        <div className="flex flex-col gap-4">
          <Logo />
          <p className="text-muted-foreground">
            Crafting exceptional web experiences for businesses worldwide.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4 md:col-span-2 md:grid-cols-4">
          <div className="grid gap-2">
            <h4 className="font-headline font-semibold">Services</h4>
            <Link href="/services" className="text-muted-foreground hover:text-foreground" prefetch={false}>
              Web Development
            </Link>
            <Link href="/services" className="text-muted-foreground hover:text-foreground" prefetch={false}>
              E-commerce
            </Link>
            <Link href="/services" className="text-muted-foreground hover:text-foreground" prefetch={false}>
              SEO
            </Link>
          </div>
          <div className="grid gap-2">
            <h4 className="font-headline font-semibold">Company</h4>
            <Link href="/about" className="text-muted-foreground hover:text-foreground" prefetch={false}>
              About Us
            </Link>
            <Link href="/blog" className="text-muted-foreground hover:text-foreground" prefetch={false}>
              Blog
            </Link>
            <Link href="/portfolio" className="text-muted-foreground hover:text-foreground" prefetch={false}>
              Portfolio
            </Link>
             <Link href="/contact" className="text-muted-foreground hover:text-foreground" prefetch={false}>
              Contact Us
            </Link>
          </div>
          <div className="grid gap-2">
            <h4 className="font-headline font-semibold">Legal</h4>
            <Link href="#" className="text-muted-foreground hover:text-foreground" prefetch={false}>
              Privacy Policy
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground" prefetch={false}>
              Terms of Service
            </Link>
          </div>
          <div className="grid gap-2">
            <h4 className="font-headline font-semibold">Connect</h4>
            <Link href="#" className="text-muted-foreground hover:text-foreground" prefetch={false}>
              Facebook
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground" prefetch={false}>
              Twitter
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground" prefetch={false}>
              LinkedIn
            </Link>
          </div>
        </div>
      </div>
      <div className="container mx-auto mt-8 border-t pt-4 text-center text-sm text-muted-foreground">
        &copy; {currentYear} Nimitz World Wide. All rights reserved.
      </div>
    </footer>
  );
}
