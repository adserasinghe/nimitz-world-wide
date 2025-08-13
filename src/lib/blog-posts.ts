
import { slugify } from "./utils";

export type Post = {
    slug: string;
    title: string;
    description: string;
    image: string;
    hint: string;
    date: string;
    category: string;
    author?: string;
    content?: string;
};

const defaultPosts: Post[] = [
    {
      slug: "demystifying-react-hooks",
      title: "Demystifying React Hooks",
      description: "A deep dive into useState, useEffect, and custom hooks to level up your React skills.",
      image: "https://placehold.co/800x600.png",
      hint: "code abstract",
      date: "May 20, 2024",
      category: "Web Development",
      content: "Full content of Demystifying React Hooks...",
      author: "Jane Smith",
    },
    {
      slug: "the-ultimate-guide-to-core-web-vitals",
      title: "The Ultimate Guide to Core Web Vitals",
      description: "Learn how to optimize your site's performance for a better user experience and improved SEO rankings.",
      image: "https://placehold.co/800x600.png",
      hint: "speed performance",
      date: "May 15, 2024",
      category: "SEO",
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
`,
      author: "Jane Smith",
    },
    {
      slug: "headless-commerce-is-it-right-for-you",
      title: "Headless Commerce: Is It Right for You?",
      description: "Exploring the pros and cons of headless architecture for your next e-commerce project.",
      image: "https://placehold.co/800x600.png",
      hint: "commerce architecture",
      date: "May 10, 2024",
      category: "E-commerce",
      content: "Full content of Headless Commerce: Is It Right for You?...",
      author: "Jane Smith",
    },
    {
      slug: "5-common-mistakes-in-website-design",
      title: "5 Common Mistakes in Website Design",
      description: "Avoid these common pitfalls to create a website that is both beautiful and functional.",
      image: "https://placehold.co/800x600.png",
      hint: "design mistakes",
      date: "May 5, 2024",
      category: "UI/UX",
      content: "Full content of 5 Common Mistakes in Website Design...",
      author: "Jane Smith",
    },
];

// In a real app, this would be a database.
let posts: Post[] = [...defaultPosts];

export async function getPosts(): Promise<Post[]> {
  // Simulate fetching from a database
  return Promise.resolve(posts);
}

export async function getPost(slug: string): Promise<Post | undefined> {
  // Simulate fetching from a database
  return Promise.resolve(posts.find((p) => p.slug === slug));
}

export async function addPost(post: Omit<Post, 'slug' | 'date' | 'description'> & {topic: string}): Promise<Post> {
  const newPost: Post = {
    ...post,
    slug: slugify(post.title),
    date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
    description: post.content.substring(0, 100) + '...',
  };
  posts = [newPost, ...posts];
  return Promise.resolve(newPost);
}

export function getMockPostsForUpdate() {
    return defaultPosts.map(p => ({
        slug: p.slug,
        title: p.title,
        description: p.description,
        content: p.content || `Full content of ${p.title}...`,
    }));
}
