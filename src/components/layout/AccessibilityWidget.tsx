'use client';

import { useState, useEffect } from 'react';
import { Accessibility, Plus, Minus, SunMoon, Type, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';

export default function AccessibilityWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    // On mount, check for saved settings in localStorage
    const highContrast = localStorage.getItem('high-contrast') === 'true';
    if(highContrast) document.body.classList.add('high-contrast');

    const readableFont = localStorage.getItem('readable-font') === 'true';
    if(readableFont) document.body.classList.add('font-readable');

    const fontSize = localStorage.getItem('font-size');
    if(fontSize) document.documentElement.style.fontSize = fontSize;

  }, []);

  if (!isMounted) {
    return null;
  }

  const toggleWidget = () => setIsOpen(!isOpen);

  const adjustFontSize = (adjustment: number) => {
    const currentSize = parseFloat(getComputedStyle(document.documentElement).fontSize);
    const newSize = currentSize + adjustment;
    document.documentElement.style.fontSize = `${newSize}px`;
    localStorage.setItem('font-size', `${newSize}px`);
  };

  const toggleHighContrast = () => {
    const isEnabled = document.body.classList.toggle('high-contrast');
    localStorage.setItem('high-contrast', String(isEnabled));
  };
  
  const toggleReadableFont = () => {
    const isEnabled = document.body.classList.toggle('font-readable');
    localStorage.setItem('readable-font', String(isEnabled));
  };

  return (
    <div className="fixed bottom-8 right-8 z-[60]">
      {isOpen && (
        <Card className="w-64 mb-4 shadow-2xl animate-in fade-in-20 slide-in-from-bottom-5 duration-300">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-base font-headline">Accessibility</CardTitle>
            <Button variant="ghost" size="icon" onClick={toggleWidget} className="h-6 w-6">
                <X className="h-4 w-4" />
                <span className="sr-only">Close</span>
            </Button>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className='space-y-2'>
                <p className='text-sm font-medium'>Font Size</p>
                <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm" onClick={() => adjustFontSize(-1)}>
                        <Minus className="h-4 w-4" />
                    </Button>
                    <span className="flex-grow text-center text-sm">Adjust</span>
                    <Button variant="outline" size="sm" onClick={() => adjustFontSize(1)}>
                        <Plus className="h-4 w-4" />
                    </Button>
                </div>
            </div>
             <div className='space-y-2'>
                <p className='text-sm font-medium'>Contrast</p>
                <Button variant="outline" className="w-full justify-start gap-2" onClick={toggleHighContrast}>
                    <SunMoon className="h-4 w-4" />
                    <span>High Contrast</span>
                </Button>
            </div>
             <div className='space-y-2'>
                <p className='text-sm font-medium'>Text Style</p>
                 <Button variant="outline" className="w-full justify-start gap-2" onClick={toggleReadableFont}>
                    <Type className="h-4 w-4" />
                    <span>Readable Font</span>
                </Button>
            </div>
          </CardContent>
        </Card>
      )}
      <Button
        size="icon"
        className="rounded-full h-14 w-14 shadow-lg"
        onClick={toggleWidget}
        aria-label="Toggle Accessibility Menu"
      >
        <Accessibility className="h-7 w-7" />
      </Button>
    </div>
  );
}
