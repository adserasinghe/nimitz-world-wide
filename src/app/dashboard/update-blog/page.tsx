
import { Metadata } from 'next';
import { UpdateBlogForm } from '@/components/dashboard/UpdateBlogForm';

export const metadata: Metadata = {
  title: 'Update Blog Posts',
  description: 'Update existing blog posts in the dashboard.',
  robots: {
    index: false,
    follow: false,
  },
};

export default function UpdateBlogPage() {
  return (
    <div className="animate-in fade-in-50 duration-500">
      <div className="max-w-4xl mx-auto">
        <div className="text-center space-y-4 mb-12">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl font-headline">
            Update Blog Posts
          </h1>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
            Select a post to edit and update its content.
          </p>
        </div>
        <UpdateBlogForm />
      </div>
    </div>
  );
}
