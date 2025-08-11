import { Button } from "@/components/ui/button";
import { SearchX } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-8rem)] text-center px-4 md:px-6 animate-in fade-in-50 duration-500">
      <div className="max-w-md space-y-4">
        <SearchX className="w-24 h-24 mx-auto text-primary" />
        <h1 className="text-8xl font-bold font-headline tracking-tighter text-primary">404</h1>
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">
            Page Not Found
        </h2>
        <p className="text-muted-foreground md:text-xl">
            Sorry, we couldn't find the page you're looking for. It might have been moved, deleted, or maybe you just mistyped the URL.
        </p>
        <Button asChild size="lg">
          <Link href="/">Return to Homepage</Link>
        </Button>
      </div>
    </div>
  );
}
