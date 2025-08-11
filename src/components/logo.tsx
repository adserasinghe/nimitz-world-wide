import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/utils';

export function Logo({className}: {className?: string}) {
  return (
    <Link href="/" className={cn("flex items-center gap-2", className)} prefetch={false}>
      <Image src="https://i.postimg.cc/vHgV3cvx/471153132-122109371366653918-3126876278288396208-n.jpg" alt="Nimitz World Wide Logo" width={32} height={32} className="h-8 w-8 rounded-full" />
      <span className="text-lg font-semibold font-headline">Nimitz World Wide</span>
    </Link>
  );
}
