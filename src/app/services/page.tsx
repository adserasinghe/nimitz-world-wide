
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle, Code, AppWindow, Search, PenSquare, BarChart, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Our Services",
    description: "Discover our comprehensive web services, including custom web design & development, digital marketing, SEO, content writing, and UI/UX design.",
};


const services = [
  {
    icon: <Code className="w-8 h-8 text-primary" />,
    title: "Web Design & Development",
    description: "Custom websites built with modern technologies to meet your specific business needs. Fast, secure, and scalable solutions.",
  },
  {
    icon: <BarChart className="w-8 h-8 text-primary" />,
    title: "Graphic Designing",
    description: "We create stunning visuals for your brand, from logos to marketing materials that will make you stand out.",
  },
  {
    icon: <Search className="w-8 h-8 text-primary" />,
    title: "Digital Marketing",
    description: "We help you reach your target audience through various online channels, including social media, and email marketing.",
  },
  {
    icon: <PenSquare className="w-8 h-8 text-primary" />,
    title: "SEO & Content Writing",
    description: "Improve your online visibility and rank higher on search engines. We drive organic traffic to your site through proven SEO strategies.",
  },
  {
    icon: <Users className="w-8 h-8 text-primary" />,
    title: "Social Media Marketing",
 description: "Boost your brand's presence and engage with your audience through strategic social media campaigns across popular platforms.",
  },
];

const solutions = [
    {
      icon: <Code className="w-8 h-8 text-primary" />,
      title: "App/Web Development",
    },
    {
      icon: <BarChart className="w-8 h-8 text-primary" />,
      title: "Digital Marketing",
    },
    {
      icon: <Search className="w-8 h-8 text-primary" />,
      title: "SEO Services",
    },
    {
      icon: <PenSquare className="w-8 h-8 text-primary" />,
      title: "UI/UX Designing",
    },
];

export default function ServicesPage() {
  return (
    <div className="animate-in fade-in-50 duration-500">
      <section className="relative w-full py-20 md:py-32 lg:py-40 bg-card">
          <Image
              src="https://placehold.co/1920x1080.png"
              alt="Our Services"
              fill
              className="z-0 object-cover"
              data-ai-hint="office background"
          />
          <div className="absolute inset-0 bg-black/50 z-10" />
          <div className="container relative z-20 mx-auto px-4 md:px-6 text-center">
              <div className="max-w-3xl mx-auto space-y-4">
                  <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl font-headline">
                      Our Services
                  </h1>
                  <p className="text-lg text-gray-300 md:text-xl">
                      Home / Services
                  </p>
              </div>
          </div>
      </section>

      <section className="py-12 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <Card key={service.title} className="p-6 text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="mb-4 inline-block rounded-full bg-primary/10 p-4">
                  {service.icon}
                </div>
                <CardTitle className="font-headline text-2xl mb-2">{service.title}</CardTitle>
                <CardContent>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-24 lg:py-32 bg-gray-900 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">
              We Shape The Perfect Solutions
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-400 md:text-xl">
              We are committed to providing the best solutions for your business.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {solutions.map((solution) => (
                <div key={solution.title} className="flex flex-col items-center p-6 border border-gray-700 rounded-lg">
                    <div className="mb-4">
                        {solution.icon}
                    </div>
                    <h3 className="text-xl font-bold font-headline">{solution.title}</h3>
                </div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">
              We Work With Industries
            </h2>
          </div>
          <Tabs defaultValue="technology" className="w-full max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="technology">Latest Technology</TabsTrigger>
              <TabsTrigger value="support">Awesome Support</TabsTrigger>
              <TabsTrigger value="quality">Quality Service</TabsTrigger>
            </TabsList>
            <TabsContent value="technology" className="pt-6">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <Image src="https://placehold.co/800x600.png" alt="Laptop with code" width={800} height={600} className="rounded-lg shadow-lg" data-ai-hint="laptop code"/>
                <div>
                  <p className="text-muted-foreground mb-4">
                    We leverage the latest and greatest technologies to build cutting-edge solutions for our clients. Our team is always learning and adapting to stay ahead of the curve.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-primary"/><span>Modern JavaScript Frameworks (React, Next.js)</span></li>
                    <li className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-primary"/><span>Headless CMS and E-commerce</span></li>
                    <li className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-primary"/><span>Scalable Cloud Infrastructure</span></li>
                    <li className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-primary"/><span>AI-powered tools and integrations</span></li>
                  </ul>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="support" className="pt-6">
                 <div className="grid md:grid-cols-2 gap-8 items-center">
                    <Image src="https://placehold.co/800x600.png" alt="Support team" width={800} height={600} className="rounded-lg shadow-lg" data-ai-hint="customer support"/>
                    <div>
                        <p className="text-muted-foreground mb-4">
                        Our clients are our top priority. We provide dedicated support to ensure your project is a success from start to finish and beyond.
                        </p>
                        <ul className="space-y-2">
                        <li className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-primary"/><span>24/7 Monitoring and Support</span></li>
                        <li className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-primary"/><span>Dedicated Account Manager</span></li>
                        <li className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-primary"/><span>Regular Progress Updates</span></li>
                        <li className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-primary"/><span>Post-launch Maintenance Plans</span></li>
                        </ul>
                    </div>
                </div>
            </TabsContent>
            <TabsContent value="quality" className="pt-6">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                    <Image src="https://placehold.co/800x600.png" alt="Quality check" width={800} height={600} className="rounded-lg shadow-lg" data-ai-hint="quality assurance"/>
                    <div>
                        <p className="text-muted-foreground mb-4">
                        We are committed to delivering high-quality work that exceeds expectations. Our rigorous quality assurance process ensures your project is bug-free and performant.
                        </p>
                        <ul className="space-y-2">
                        <li className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-primary"/><span>Thorough Code Reviews</span></li>
                        <li className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-primary"/><span>Comprehensive Testing (Unit, Integration, E2E)</span></li>
                        <li className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-primary"/><span>Performance and Security Audits</span></li>
                        <li className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-primary"/><span>User Acceptance Testing (UAT)</span></li>
                        </ul>
                    </div>
                </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline mb-6">
            We're Ready to Bring Quality Professional Web Design
          </h2>
          <Button asChild size="lg" variant="secondary">
            <Link href="/contact">Request a Quote</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
