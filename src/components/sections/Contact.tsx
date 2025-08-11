import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Contact() {
  return (
    <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground animate-in fade-in-50 duration-500">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline mb-4">
                Ready to Start Your Project?
            </h2>
            <p className="max-w-2xl mx-auto text-lg text-primary-foreground/80 mb-8">
                We're here to help you achieve your business goals. Reach out to us for a free consultation and let's discuss how we can bring your vision to life.
            </p>
            <Button asChild size="lg" variant="secondary">
                <Link href="/contact">Get in Touch</Link>
            </Button>
        </div>
      </div>
    </section>
  );
}
