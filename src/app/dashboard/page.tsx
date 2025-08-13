

import { BlogGenerator } from "@/components/dashboard/BlogGenerator";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "AI Blog Generator",
    description: "Use our powerful AI tool to generate high-quality blog post drafts on any topic. Streamline your content creation process.",
    robots: {
      index: false,
      follow: false,
    }
};

export default function DashboardPage() {
    return (
      <div className="animate-in fade-in-50 duration-500">
        <div className="max-w-4xl mx-auto">
            <div className="text-center space-y-4 mb-12">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl font-headline">
                    Blog Content Generator
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                    Use our AI-powered tool to generate a draft for your next blog post. Enter a topic and let the magic happen.
                </p>
            </div>
            <BlogGenerator />
        </div>
      </div>
    );
}
