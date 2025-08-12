
'use client';

import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;

    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); 

    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMounted]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!isMounted) {
    return null;
  }

  return (
    <Button
        variant="secondary"
        size="icon"
        className={cn(
            'fixed bottom-8 right-8 z-50 rounded-full shadow-lg transition-opacity duration-300',
            isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
        )}
        onClick={scrollToTop}
        aria-label="Scroll to top"
    >
        <ArrowUp className="h-6 w-6" />
    </Button>
  );
}
