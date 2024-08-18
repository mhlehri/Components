'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function NavMenu() {
    const path = usePathname();
    return (
        <ul className="hidden items-center justify-center gap-2 justify-self-end text-slate-500 sm:gap-6 sm:text-base lg:flex dark:text-zinc-200">
            <li className={`${path.includes('components') ? 'font-medium text-zinc-900 dark:text-zinc-400' : ''}`}>
                <Link href="/components/accordion" className="text-sm">
                    Components
                </Link>
            </li>
            <li className={`${path.includes('block') ? 'font-medium text-zinc-900 dark:text-zinc-400' : ''}`}>
                <Link href="/blocks/hero" className="text-sm">
                    Blocks
                </Link>
            </li>
            <li className={`${path.includes('bookmarks') ? 'font-medium text-zinc-900 dark:text-zinc-400' : ''}`}>
                <Link href="/bookmarks" className="text-sm">
                    Bookmarks
                </Link>
            </li>
        </ul>
    );
}
