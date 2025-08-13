
'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Book, Edit } from 'lucide-react';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const navLinks = [
    { href: '/dashboard', label: 'Generate Post', icon: <Book className="mr-2 h-4 w-4" /> },
    { href: '/dashboard/update-blog', label: 'Update Post', icon: <Edit className="mr-2 h-4 w-4" /> },
  ];

  return (
    <div className="container mx-auto py-12 px-4 md:px-6">
      <div className="flex flex-col md:flex-row gap-8">
        <aside className="w-full md:w-1/4 lg:w-1/5">
          <nav className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <Button
                key={link.href}
                asChild
                variant={pathname === link.href ? 'default' : 'ghost'}
                className="justify-start"
              >
                <Link href={link.href}>
                  {link.icon}
                  {link.label}
                </Link>
              </Button>
            ))}
          </nav>
        </aside>
        <main className="w-full md:w-3/4 lg:w-4/5">{children}</main>
      </div>
    </div>
  );
}
