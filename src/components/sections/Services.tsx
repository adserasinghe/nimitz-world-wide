import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Code, ShoppingCart, Search } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";

export default function Services() {
  const services = [
    {
      icon: <Code className="w-12 h-12 text-primary" />,
      title: "Web Development",
      description: "Custom websites built with modern technologies to meet your specific business needs. Fast, secure, and scalable solutions.",
    },
    {
      icon: <ShoppingCart className="w-12 h-12 text-primary" />,
      title: "E-commerce Websites",
      description: "Powerful e-commerce platforms that provide a seamless shopping experience for your customers and are easy for you to manage.",
    },
    {
      icon: <Search className="w-12 h-12 text-primary" />,
      title: "Search Engine Optimization",
      description: "Improve your online visibility and rank higher on search engines. We drive organic traffic to your site through proven SEO strategies.",
    },
  ];

  return (
    <section id="services" className="w-full py-12 md:py-24 lg:py-32 animate-in fade-in-50 duration-500">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">
            Our Services
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
            From custom web applications to targeted SEO campaigns, we provide the tools you need to succeed online.
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Card key={service.title} className="flex flex-col items-center text-center p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="mb-4 rounded-full bg-primary/10 p-4">
                {service.icon}
              </div>
              <CardHeader>
                <CardTitle className="font-headline text-2xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
         <div className="mt-12 text-center">
            <Button asChild variant="outline">
                <Link href="/services">See More Our Services</Link>
            </Button>
        </div>
      </div>
    </section>
  );
}
