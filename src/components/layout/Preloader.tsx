'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (isMounted) {
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 1500); 

      return () => clearTimeout(timer);
    }
  }, [isMounted]);

  if (!isMounted) {
      return null;
  }

  return (
    <div
      className={cn(
        'fixed inset-0 z-[200] flex items-center justify-center bg-background transition-opacity duration-500',
        isLoading ? 'opacity-100' : 'opacity-0 pointer-events-none'
      )}
    >
      <Image
        src="https://i.postimg.cc/cCZdYkTc/471153132-122109371366653918-3126876278288396208-n-removebg-preview.png"
        alt="Nimitz World Wide Logo"
        width={100}
        height={100}
        className="animate-pulse"
        priority
      />
    </div>
  );
}
