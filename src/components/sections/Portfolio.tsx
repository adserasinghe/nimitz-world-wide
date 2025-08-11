import Image from "next/image";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "../ui/button";
import Link from "next/link";

export default function Portfolio() {
  const projects = [
    {
      title: "Corporate Website Redesign",
      description: "A complete overhaul of a B2B tech company's website, focusing on modern UI/UX and lead generation.",
      image: "https://placehold.co/600x400.png",
      tags: ["Web Development", "UI/UX"],
      hint: "corporate office",
    },
    {
      title: "Fashion E-commerce Store",
      description: "A stylish and performant e-commerce platform for an independent fashion brand, with custom features.",
      image: "https://placehold.co/600x400.png",
      tags: ["E-commerce", "Shopify"],
      hint: "fashion retail",
    },
    {
      title: "Local Business SEO Campaign",
      description: "Increased organic traffic by 200% for a local service business through targeted SEO and content marketing.",
      image: "https://placehold.co/600x400.png",
      tags: ["SEO", "Marketing"],
      hint: "local business",
    },
    {
      title: "SaaS Platform Dashboard",
      description: "Designed and developed a user-friendly and data-rich dashboard for a growing SaaS company.",
      image: "https://placehold.co/600x400.png",
      tags: ["Web App", "React"],
      hint: "dashboard data",
    },
  ];

  return (
    <section id="portfolio" className="w-full py-12 md:py-24 lg:py-32 bg-card animate-in fade-in-50 duration-500">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">
            Our Portfolio
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
            Check out some of our recent projects that have delighted our clients and delivered results.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
          {projects.map((project) => (
            <Card key={project.title} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group">
              <CardContent className="p-0">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover aspect-video group-hover:scale-105 transition-transform duration-300"
                  data-ai-hint={project.hint}
                />
                <div className="p-6">
                  <CardTitle className="font-headline text-2xl mb-2">{project.title}</CardTitle>
                  <CardDescription className="mb-4">{project.description}</CardDescription>
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
        <div className="mt-12 text-center">
            <Button asChild variant="outline">
                <Link href="/portfolio">View Full Portfolio</Link>
            </Button>
        </div>
      </div>
    </section>
  );
}
