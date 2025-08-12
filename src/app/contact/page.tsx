
import { ContactForm } from '@/components/sections/ContactForm';
import Image from 'next/image';
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact Us",
    description: "Get in touch with Nimitz World Wide for a free consultation. Contact us about your web development, e-commerce, or SEO project today.",
};


export default function ContactPage() {
  return (
    <div className="animate-in fade-in-50 duration-500">
      <section className="relative w-full py-20 md:py-32 lg:py-40 bg-card">
        <Image
          src="https://placehold.co/1920x1080.png"
          alt="Contact Us"
          fill
          className="z-0 object-cover"
          data-ai-hint="contact communication"
        />
        <div className="absolute inset-0 bg-black/50 z-10" />
        <div className="container relative z-20 mx-auto px-4 md:px-6 text-center">
          <div className="max-w-3xl mx-auto space-y-4">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl font-headline">
              Contact Us
            </h1>
            <p className="text-lg text-gray-300 md:text-xl">
              Home / Contact
            </p>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-12 md:grid-cols-2 md:gap-16">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">
                Get in Touch
              </h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Have a project in mind or just want to say hello? We'd love to hear from you. Fill out the form, and we'll get back to you as soon as possible.
              </p>
              <div className="space-y-2 pt-4">
                <h3 className="font-headline font-semibold text-xl">Contact Information</h3>
                <p className="text-muted-foreground">Email: contact@nimitz.lk</p>
                <p className="text-muted-foreground">Phone: +94777707310</p>
                <p className="text-muted-foreground">Address: #2/116, Charlesweak State, Mahamawatha, Kekanadura, Matara 81000</p>
              </div>
            </div>
            <div className="w-full max-w-md p-8 rounded-lg shadow-lg bg-card">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
