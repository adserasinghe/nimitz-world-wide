
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Portfolio",
    description: "Explore our portfolio of recent projects, including custom web development, e-commerce stores, app development, and successful digital marketing campaigns.",
};


const projects = [
  {
    title: "Innovate Corp Website",
    description: "A complete redesign of a leading tech firm's corporate website, focusing on a clean, modern aesthetic and improved user engagement. Built with Next.js for optimal performance.",
    image: "https://placehold.co/800x600.png",
    hint: "corporate tech",
    tags: ["Web Development", "UI/UX", "Next.js"],
    category: "web",
  },
  {
    title: "Luxe Fashion E-commerce",
    description: "A high-end e-commerce platform for a luxury fashion brand. Features a seamless checkout experience, and a custom content management system.",
    image: "https://placehold.co/800x600.png",
    hint: "fashion store",
    tags: ["E-commerce", "React", "Node.js"],
    category: "ecommerce",
  },
  {
    title: "HealthWell Mobile App",
    description: "A cross-platform mobile application for a health and wellness startup, helping users track their fitness goals and connect with trainers.",
    image: "https://placehold.co/800x600.png",
    hint: "fitness app",
    tags: ["App Development", "React Native"],
    category: "app",
  },
  {
    title: "DataViz SaaS Platform",
    description: "A powerful data visualization dashboard for a SaaS product. We designed and developed an intuitive interface to handle complex data sets.",
    image: "https://placehold.co/800x600.png",
    hint: "data dashboard",
    tags: ["Web App", "React", "Data Visualization"],
    category: "web",
  },
  {
    title: "LocalEats SEO Overhaul",
    description: "Dramatically improved search engine rankings and local visibility for a restaurant chain through a comprehensive SEO and content strategy.",
    image: "https://placehold.co/800x600.png",
    hint: "restaurant food",
    tags: ["SEO", "Content Marketing"],
    category: "marketing",
  },
  {
    title: "Artisan Coffee Shopify Store",
    description: "A beautifully crafted Shopify theme and setup for a specialty coffee roaster, resulting in a 60% increase in online sales.",
    image: "https://placehold.co/800x600.png",
    hint: "coffee shop",
    tags: ["E-commerce", "Shopify", "UI/UX"],
    category: "ecommerce",
  },
];

const categories = ["all", "web", "ecommerce", "app", "marketing"];

export default function PortfolioPage() {
  const getCategoryName = (slug: string) => {
    switch (slug) {
      case "web": return "Web Development";
      case "ecommerce": return "E-commerce";
      case "app": return "App Development";
      case "marketing": return "Marketing";
      default: return "All";
    }
  }

  return (
    <div className="animate-in fade-in-50 duration-500">
      <section className="relative w-full py-20 md:py-32 lg:py-40 bg-card">
        <Image
          src="https://placehold.co/1920x1080.png"
          alt="Our Portfolio"
          fill
          className="z-0 object-cover"
          data-ai-hint="creative workspace"
        />
        <div className="absolute inset-0 bg-black/50 z-10" />
        <div className="container relative z-20 mx-auto px-4 md:px-6 text-center">
          <div className="max-w-3xl mx-auto space-y-4">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl font-headline">
              Our Portfolio
            </h1>
            <p className="text-lg text-gray-300 md:text-xl">
              Home / Portfolio
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <Tabs defaultValue="all" className="w-full">
            <div className="flex justify-center mb-12">
              <TabsList className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5">
                {categories.map(category => (
                  <TabsTrigger key={category} value={category}>{getCategoryName(category)}</TabsTrigger>
                ))}
              </TabsList>
            </div>
            
            {categories.map(category => (
              <TabsContent key={category} value={category}>
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                  {projects
                    .filter(p => category === 'all' || p.category === category)
                    .map((project) => (
                      <Card key={project.title} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group">
                        <CardContent className="p-0">
                          <div className="relative overflow-hidden">
                              <Image
                                src={project.image}
                                alt={project.title}
                                width={800}
                                height={600}
                                className="w-full h-auto object-cover aspect-video group-hover:scale-105 transition-transform duration-300"
                                data-ai-hint={project.hint}
                              />
                          </div>
                          <div className="p-6">
                            <h3 className="font-headline text-2xl mb-2 font-bold">{project.title}</h3>
                            <p className="text-muted-foreground mb-4">{project.description}</p>
                            <div className="flex flex-wrap gap-2">
                              {project.tags.map((tag) => (
                                <Badge key={tag} variant="secondary">{tag}</Badge>
                              ))}
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline mb-4">
            Have a project in mind?
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-primary-foreground/80 mb-8">
            Let's discuss how we can help you achieve your goals. We are here to turn your ideas into reality.
          </p>
          <Button asChild size="lg" variant="secondary">
            <Link href="/contact">Get a Free Quote</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
