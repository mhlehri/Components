'use client';
import { useTheme } from 'next-themes';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { FaAngleRight, FaBookmark, FaGear, FaGreaterThan } from 'react-icons/fa6';
import { FiMoon, FiSun } from 'react-icons/fi';
export function NavMenu() {
    const path = usePathname();
    return (
        <ul className="hidden items-center justify-center gap-2 font-mono sm:gap-10 sm:text-base lg:flex">
            <li className={`${path.includes('components') ? 'font-bold text-sky-700 dark:text-sky-400' : ''}`}>
                <Link href="/components/accordion" className="text-sm">
                    Components
                </Link>
            </li>
            <li className={`${path.includes('block') ? 'font-semibold text-sky-800 dark:text-sky-400' : ''}`}>
                <Link href="/blocks" className="text-sm">
                    Blocks
                </Link>
            </li>
        </ul>
    );
}

export default function ThemeSwitch() {
    const [mounted, setMounted] = useState(false);
    const { setTheme, resolvedTheme } = useTheme();

    useEffect(() => setMounted(true), []);

    if (!mounted) return;

    if (resolvedTheme === 'dark') {
        return <FiSun onClick={() => setTheme('light')} className="size-5 cursor-pointer select-none" />;
    }

    if (resolvedTheme === 'light') {
        return <FiMoon onClick={() => setTheme('dark')} className="size-5 cursor-pointer select-none" />;
    }
}

let bookmarks = { components: [], blocks: [] };

function loadBookmarks() {
    try {
        const storedBookmarks = localStorage.getItem('nui_bookmarks');
        if (storedBookmarks) bookmarks = JSON.parse(storedBookmarks);
    } catch (error) {
        console.error('Error parsing bookmarks:', error);
    }
}

function saveBookmarks() {
    localStorage.setItem('nui_bookmarks', JSON.stringify(bookmarks));
}

export function addBookmark(category, bookmark) {
    bookmarks[category].push(bookmark);
    saveBookmarks();
}

export function getBookmarks() {
    loadBookmarks();
    return bookmarks;
}

export function getBookmarksByCategory(category) {
    loadBookmarks();
    return bookmarks[category] || [];
}

export function getBookmarkById(category, name) {
    loadBookmarks();
    const categoryBookmarks = bookmarks[category] || [];
    return categoryBookmarks.find((bookmark) => bookmark.name === name) || null;
}

export function removeBookmark(category, name) {
    loadBookmarks();
    const categoryBookmarks = bookmarks[category] || [];
    const index = categoryBookmarks.findIndex((bookmark) => bookmark.name === name);
    if (index !== -1) categoryBookmarks.splice(index, 1);
    saveBookmarks();
}

export function BookmarkDrawer() {
    return (
        <Link href="/bookmarks">
            <FaBookmark size={20} />
        </Link>
    );
}

export function Breadcrumb() {
    const path = usePathname();
    const regex = /^\/([^\/]+)\/([^\/]+)$/;
    const match = path.match(regex);

    if (!match) {
        return null;
    }
    // console.log(match);

    const [, firstSegment, secondSegment] = match;

    return (
        <h6 className="mb-5 text-sm capitalize">
            <span className="text-zinc-500 dark:text-zinc-400">{firstSegment}</span>
            <FaAngleRight className="mx-1 inline-block size-3" />
            <span className="font-semibold">{secondSegment}</span>
        </h6>
    );
}

export function Gear() {
    const [clicked, setClicked] = useState(false);
    const gear = useRef(null);
    // useEffect(() => {
    //     const close = (e) => {
    //         if (gear.current && !gear.current.contains(e.target)) setClicked(false);
    //     };
    //     document.addEventListener('mousedown', close);
    //     return () => document.removeEventListener('mousedown', close);
    // }, []);
    return (
        <div className="fixed right-0 top-1/2 flex items-center justify-center rounded-l-lg bg-sky-400 p-2 text-xl text-white" ref={gear}>
            <FaGear onClick={() => setClicked((prevState) => !prevState)} className={`${clicked ? 'rotate-180' : ''} duration-200`} />
            <div className={`${clicked ? 'visible' : 'invisible'} absolute bottom-10 space-y-2 rounded-l-lg bg-sky-400 p-2 text-white`}>
                <ThemeSwitch />
                <FaBookmark />
            </div>
        </div>
    );
}
