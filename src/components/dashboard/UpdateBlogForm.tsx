
'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogClose,
} from '@/components/ui/dialog';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Edit, Loader2 } from 'lucide-react';

const mockPosts = [
    {
      slug: "demystifying-react-hooks",
      title: "Demystifying React Hooks",
      description: "A deep dive into useState, useEffect, and custom hooks to level up your React skills.",
      content: "Full content of Demystifying React Hooks...",
    },
    {
      slug: "the-ultimate-guide-to-core-web-vitals",
      title: "The Ultimate Guide to Core Web Vitals",
      description: "Learn how to optimize your site's performance for a better user experience and improved SEO rankings.",
      content: "Full content of The Ultimate Guide to Core Web Vitals...",
    },
    {
      slug: "headless-commerce-is-it-right-for-you",
      title: "Headless Commerce: Is It Right for You?",
      description: "Exploring the pros and cons of headless architecture for your next e-commerce project.",
      content: "Full content of Headless Commerce: Is It Right for You?...",
    },
    {
      slug: "5-common-mistakes-in-website-design",
      title: "5 Common Mistakes in Website Design",
      description: "Avoid these common pitfalls to create a website that is both beautiful and functional.",
      content: "Full content of 5 Common Mistakes in Website Design...",
    },
];

const formSchema = z.object({
  title: z.string().min(5, 'Title must be at least 5 characters long.'),
  content: z.string().min(20, 'Content must be at least 20 characters long.'),
});

type Post = typeof mockPosts[0];

export function UpdateBlogForm() {
  const [posts, setPosts] = useState(mockPosts);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  const handleEditClick = (post: Post) => {
    form.reset({
      title: post.title,
      content: post.content,
    });
  };

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    // Simulate API call to update the post
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log('Updated post:', values);
    toast({
      title: 'Success!',
      description: 'Blog post updated successfully.',
    });
    setIsSubmitting(false);
    setIsDialogOpen(false);
  };

  return (
    <div className="space-y-4">
      {posts.map((post) => (
        <Dialog key={post.slug} open={isDialogOpen && form.getValues('title') === post.title} onOpenChange={(open) => {
          if (!open) setIsDialogOpen(false);
        }}>
          <Card>
            <CardHeader>
              <CardTitle>{post.title}</CardTitle>
              <CardDescription>{post.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <DialogTrigger asChild>
                <Button variant="outline" onClick={() => { handleEditClick(post); setIsDialogOpen(true); }}>
                  <Edit className="mr-2 h-4 w-4" />
                  Edit Post
                </Button>
              </DialogTrigger>
            </CardContent>
          </Card>
          <DialogContent className="sm:max-w-[625px]">
            <DialogHeader>
              <DialogTitle>Edit Post</DialogTitle>
            </DialogHeader>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                  control={form.control}
                  name="title"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Title</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="content"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Content</FormLabel>
                      <FormControl>
                        <Textarea rows={10} {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <DialogFooter>
                  <DialogClose asChild>
                    <Button type="button" variant="secondary">
                      Cancel
                    </Button>
                  </DialogClose>
                  <Button type="submit" disabled={isSubmitting}>
                    {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                    Save Changes
                  </Button>
                </DialogFooter>
              </form>
            </Form>
          </DialogContent>
        </Dialog>
      ))}
    </div>
  );
}
