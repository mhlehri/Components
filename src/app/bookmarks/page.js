'use client';
import { getBookmarks } from '@/ui/Client';
import Link from 'next/link';
import { useEffect, useState } from 'react';
export default function BookmarkPage() {
    const categories = ['components', 'blocks'];
    const [b, setB] = useState([]);

    useEffect(() => {
        const books = getBookmarks();
        setB(books);
    }, []);
    // console.log(b);
    return (
        <div className="mx-auto mt-10 w-full backdrop-blur-sm">
            <h1 className="mb-3 text-center text-4xl font-semibold text-black dark:text-white">Bookmarks</h1>
            <div className="flex list-inside list-decimal flex-wrap justify-center gap-3">
                {categories.map((category) => (
                    <ol key={category} className="h-fit w-full max-w-md space-y-1 rounded-md bg-black p-5 dark:bg-white">
                        <h1 className="fon:t-black mb-3 text-white dark:text-black">{category.toUpperCase()}</h1>
                        {b?.[category]?.length ? (
                            b[category].map((bookmark, i) => (
                                <Link key={`bookmark_${category}_${i}`} href={`${bookmark.url}`} className="block font-bold">
                                    <li className="rounded-md bg-fuchsia-100 p-2.5 text-fuchsia-700">{bookmark.name}</li>
                                </Link>
                            ))
                        ) : (
                            <>
                                <span className="inline-block rounded-md bg-zinc-300 p-2.5 text-black">Empty</span>
                                {category === 'animated' || category === 'blocks' ? <span className="ml-2 inline-block rounded-md bg-fuchsia-100 p-2.5 text-fuchsia-600">coming soon</span> : null}
                            </>
                        )}
                    </ol>
                ))}
            </div>
        </div>
    );
}
