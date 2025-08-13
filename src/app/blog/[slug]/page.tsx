
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { Metadata } from "next";
import { getPost } from "@/lib/blog-posts";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = await getPost(params.slug);
  if (!post) {
    return {
      title: 'Post Not Found'
    }
  }
  return {
    title: post.title,
    description: post.description,
  };
}


export default async function BlogPostPage({ params }: { params: { slug: string } }) {
    const post = await getPost(params.slug);

    if (!post) {
        notFound();
    }

    return (
        <div className="container mx-auto py-12 px-4 md:px-6 animate-in fade-in-50 duration-500">
            <article className="max-w-4xl mx-auto">
                <div className="space-y-4 text-center mb-12">
                    <Badge variant="outline">{post.category}</Badge>
                    <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl font-headline">
                        {post.title}
                    </h1>
                    <p className="text-muted-foreground">
                        Posted on {post.date} by {post.author || 'Nimitz Staff'}
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
                    dangerouslySetInnerHTML={{ __html: post.content || '' }}
                />
            </article>
        </div>
    )
}
