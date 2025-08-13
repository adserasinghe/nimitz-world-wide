
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Metadata } from "next";
import { getPosts } from "@/lib/blog-posts";

export const metadata: Metadata = {
    title: "Blog",
    description: "Read the latest articles, tutorials, and insights on web development, SEO, and digital marketing from the experts at Nimitz World Wide.",
};

export default async function BlogPage() {
    const posts = await getPosts();
    
    return (
        <div className="container mx-auto py-12 px-4 md:px-6 animate-in fade-in-50 duration-500">
            <div className="text-center space-y-4 mb-12">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl font-headline">
                    The Nimitz Blog
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                    Your source for web development trends, tips, and insights.
                </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {posts.map((post) => (
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
        </div>
    );
}
