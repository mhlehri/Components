'use client';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { FaBookmark, FaGear } from 'react-icons/fa6';
import { FiMoon, FiSun } from 'react-icons/fi';

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

export function Logo() {
    // const [mounted, setMounted] = useState(false);
    // const { setTheme, resolvedTheme } = useTheme();
    // useEffect(() => setMounted(true), []);
    // if (!mounted) return <Image src="/logoDark.svg" className="h-6 w-[25px]" width={25} height={24} alt="navigate ui logo" />;
    // if (resolvedTheme === 'dark') {
    //     return <Image src="/logoDark.svg" className="h-6 w-[25px]" width={25} height={24} alt="navigate ui logo" />;
    // }
    // if (resolvedTheme === 'light') {
    //     return <Image src="/logo.svg" className="h-6 w-[25px]" width={25} height={24} alt="navigate ui logo" />;
    // }
    return <Image src="/RedLogo.svg" className="h-6 w-[25px]" width={25} height={24} alt="navigate ui logo" />;
}
