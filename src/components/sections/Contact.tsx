import { ContactForm } from './ContactForm';

export default function Contact() {
  return (
    <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-12 md:grid-cols-2 md:gap-16">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">
              Let's Build Something Great
            </h2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl">
              Have a project in mind? We'd love to hear about it. Fill out the form, and we'll get back to you as soon as possible.
            </p>
            <div className="space-y-2">
              <h3 className="font-headline font-semibold text-lg">Contact Information</h3>
              <p className="text-muted-foreground">Email: contact@nimitz.world</p>
              <p className="text-muted-foreground">Phone: +1 (555) 123-4567</p>
            </div>
          </div>
          <div className="w-full max-w-md">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
