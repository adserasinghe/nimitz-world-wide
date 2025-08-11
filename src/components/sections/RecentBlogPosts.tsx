import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";

const mockPosts = [
    {
      slug: "demystifying-react-hooks",
      title: "Demystifying React Hooks",
      description: "A deep dive into useState, useEffect, and custom hooks to level up your React skills.",
      image: "https://placehold.co/800x600.png",
      hint: "code abstract",
      date: "May 20, 2024",
      category: "Web Development"
    },
    {
      slug: "the-ultimate-guide-to-core-web-vitals",
      title: "The Ultimate Guide to Core Web Vitals",
      description: "Learn how to optimize your site's performance for a better user experience and improved SEO rankings.",
      image: "https://placehold.co/800x600.png",
      hint: "speed performance",
      date: "May 15, 2024",
      category: "SEO"
    },
    {
      slug: "headless-commerce-is-it-right-for-you",
      title: "Headless Commerce: Is It Right for You?",
      description: "Exploring the pros and cons of headless architecture for your next e-commerce project.",
      image: "https://placehold.co/800x600.png",
      hint: "commerce architecture",
      date: "May 10, 2024",
      category: "E-commerce"
    },
];

export default function RecentBlogPosts() {
  return (
    <section id="blog" className="w-full py-12 md:py-24 lg:py-32 animate-in fade-in-50 duration-500">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">
            From Our Blog
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
            Insights, tutorials, and news from the world of web development.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {mockPosts.map((post) => (
            <Card key={post.slug} className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <Link href={`/blog/${post.slug}`} className="block">
                    <Image
                        src={post.image}
                        alt={post.title}
                        width={800}
                        height={600}
                        className="w-full h-48 object-cover"
                        data-ai-hint={post.hint}
                    />
                </Link>
                <CardHeader>
                    <Badge variant="outline" className="w-fit mb-2">{post.category}</Badge>
                    <CardTitle className="font-headline text-xl">
                      <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                    </CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                    <CardDescription>{post.description}</CardDescription>
                </CardContent>
                <div className="p-6 pt-0">
                    <p className="text-sm text-muted-foreground">{post.date}</p>
                </div>
            </Card>
          ))}
        </div>
        <div className="mt-12 text-center">
            <Button asChild variant="outline">
                <Link href="/blog">View All Posts</Link>
            </Button>
        </div>
      </div>
    </section>
  );
}
