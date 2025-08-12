'use client';

import { Logo } from "@/components/logo";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Facebook, Linkedin } from "lucide-react";
import Image from "next/image";

const XIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 1200 1227" fill="none" aria-hidden="true" {...props}>
        <path
            d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.163 519.284ZM569.165 687.828L521.697 619.934L144.011 79.6904H306.615L611.412 515.685L658.88 583.579L1055.08 1150.31H892.476L569.165 687.828Z"
            fill="currentColor"
        />
    </svg>
);


export default function Footer() {
  const [currentYear, setCurrentYear] = useState<number | null>(null);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);


  return (
    <footer className="bg-muted py-8 px-4 md:px-6">
      <div className="container mx-auto grid grid-cols-1 gap-8 md:grid-cols-3">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <Link href="/" prefetch={false}>
              <Image src="https://i.postimg.cc/cCZdYkTc/471153132-122109371366653918-3126876278288396208-n-removebg-preview.png" alt="Nimitz World Wide Logo" width={64} height={64} className="h-16 w-16" />
            </Link>
            <span className="font-headline text-lg font-semibold">Excellence Of Creativity</span>
          </div>
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
            <Link href="https://facebook.com/profile.php?id=61569617552859" className="flex items-center gap-2 text-muted-foreground hover:text-foreground" prefetch={false}>
              <Facebook className="h-4 w-4" />
              Facebook
            </Link>
            <Link href="/" className="flex items-center gap-2 text-muted-foreground hover:text-foreground" prefetch={false}>
              <XIcon className="h-4 w-4" />
              X
            </Link>
            <Link href="https://www.linkedin.com/company/nimitz-world-wide/" className="flex items-center gap-2 text-muted-foreground hover:text-foreground" prefetch={false}>
              <Linkedin className="h-4 w-4" />
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
