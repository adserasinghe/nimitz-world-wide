import { Badge } from "@/components/ui/badge";
import Image from "next/image";

export default function BlogPostPage({ params }: { params: { slug: string } }) {
    const post = {
      slug: params.slug,
      title: "The Ultimate Guide to Core Web Vitals",
      description: "Learn how to optimize your site's performance for a better user experience and improved SEO rankings.",
      image: "https://placehold.co/1280x720.png",
      hint: "speed performance",
      date: "May 15, 2024",
      category: "SEO",
      author: "Jane Smith",
      content: `
<p class="mb-4">In today's fast-paced digital world, user experience is paramount. A slow, clunky website can drive visitors away in seconds. That's where Google's Core Web Vitals come in. These are a set of specific factors that Google considers important in a webpage's overall user experience.</p>
<p class="mb-4">Understanding and optimizing for these metrics is crucial not only for keeping your users happy but also for improving your search engine rankings. Let's break them down.</p>
<h3 class="font-headline text-2xl font-bold my-4">What are the Core Web Vitals?</h3>
<p class="mb-4">The three main components of Core Web Vitals are:</p>
<ul class="list-disc list-inside my-4 space-y-2">
  <li><strong>Largest Contentful Paint (LCP):</strong> Measures loading performance. To provide a good user experience, LCP should occur within 2.5 seconds of when the page first starts loading.</li>
  <li><strong>First Input Delay (FID):</strong> Measures interactivity. For a good user experience, pages should have an FID of 100 milliseconds or less.</li>
  <li><strong>Cumulative Layout Shift (CLS):</strong> Measures visual stability. To provide a good user experience, pages should maintain a CLS of 0.1. or less.</li>
</ul>
<h3 class="font-headline text-2xl font-bold my-4">How to Improve Your Scores</h3>
<p class="mb-4">Improving your Core Web Vitals involves a combination of technical optimizations. For LCP, focus on optimizing your server response times, reducing render-blocking JavaScript and CSS, and optimizing your images. For FID, breaking up long tasks and using a web worker can help. To improve CLS, make sure to include size attributes on your images and video elements, and never insert content above existing content, except in response to a user interaction.</p>
<p class="mb-4">By focusing on these key areas, you can significantly improve your website's performance, leading to happier users and better SEO outcomes.</p>
`
    };

    return (
        <div className="container mx-auto py-12 px-4 md:px-6 animate-in fade-in-50 duration-500">
            <article className="max-w-4xl mx-auto">
                <div className="space-y-4 text-center mb-12">
                    <Badge variant="outline">{post.category}</Badge>
                    <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl font-headline">
                        {post.title}
                    </h1>
                    <p className="text-muted-foreground">
                        Posted on {post.date} by {post.author}
                    </p>
                </div>
                <Image
                    src={post.image}
                    alt={post.title}
                    width={1280}
                    height={720}
                    className="w-full aspect-video object-cover rounded-lg mb-8 shadow-lg"
                    data-ai-hint={post.hint}
                />
                <div
                    className="text-lg text-foreground/80 space-y-4"
                    dangerouslySetInnerHTML={{ __html: post.content }}
                />
            </article>
        </div>
    )
}
