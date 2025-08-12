
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full py-20 md:py-32 lg:py-40 animate-in fade-in-50 duration-500">
       <Image
          src="https://i.postimg.cc/1RFYDyjm/2148821934.jpg"
          alt="Hero background"
          fill
          className="z-0 object-cover"
          data-ai-hint="modern business office"
          priority
        />
        <div className="absolute inset-0 bg-black/50 z-10" />
      <div className="container relative z-20 mx-auto px-4 md:px-6 text-center">
        <div className="max-w-3xl mx-auto space-y-4">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl font-headline text-white">
            Build Your Digital Future
          </h1>
          <p className="text-lg text-gray-300 md:text-xl">
            We build beautiful, responsive, and high-performing websites that drive results for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/services">Our Services</Link>
            </Button>
            <Button size="lg" variant="secondary" asChild>
              <Link href="/portfolio">View Our Work</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
