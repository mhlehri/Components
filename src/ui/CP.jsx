'use client';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { RiBookmark2Fill, RiBookmark2Line } from 'react-icons/ri';
import { addBookmark, getBookmarkById, removeBookmark } from './Client';
import Highlighter from './CodeSnippet';

export default function CP({ children, code, i }) {
    const [tabNum, setTabNum] = useState(0);
    const [bookmarked, setBookmarked] = useState(false);
    const url = usePathname();
    const ref = useRef(null);
    const cat = url?.includes('components') ? 'components' : 'blocks';

    const info = {
        name: i?.name,
        url: `${url}#${i?.id}`
    };

    const totalConfig = [
        {
            item: 0,
            name: 'Preview',
            component: (
                <div ref={ref} className="min-w-80 rounded-sm border border-zinc-200 p-5 lg:p-10 dark:border-zinc-800">
                    {children}
                </div>
            )
        },
        {
            item: 1,
            name: 'Code',
            component: <Highlighter code={code} />
        }
    ];
    useEffect(() => {
        const bookmarkInfo = getBookmarkById(cat, i?.name);
        if (bookmarkInfo) {
            setBookmarked(bookmarkInfo?.name === i?.name);
        }
    }, [cat, i]);

    return (
        <div className="my-5 h-fit w-full min-w-80 max-w-5xl">
            <div className="item-center mb-2 flex justify-between gap-2">
                <div className="flex w-full items-center justify-between">
                    <div
                        className={`item-center shadow-inner ${tabNum === 1 ? 'border-red-600' : 'border-zinc-200 dark:border-zinc-800'} relative flex overflow-hidden rounded-sm border duration-300`}
                    >
                        <div
                            className={`absolute z-30 flex h-9 w-20 items-center ${tabNum === 1 ? 'bg-red-600' : 'bg-zinc-200 dark:bg-zinc-800'} duration-300`}
                            style={{ transform: `translateX(${tabNum * 101}%)` }}
                        ></div>

                        <button
                            onClick={() => setTabNum(0)}
                            className={`z-40 w-20 cursor-pointer select-none px-3 py-2 text-center text-sm ${tabNum === 0 ? 'text-whie' : 'text-black dark:text-white'} `}
                        >
                            Preview
                        </button>
                        <button onClick={() => setTabNum(1)} className={`z-40 w-20 cursor-pointer select-none px-3 py-2 text-sm ${tabNum === 1 ? 'text-white' : 'text-black dark:text-white'} `}>
                            Code
                        </button>
                    </div>
                    {i && (
                        <div className="cursor-pointer text-xl">
                            {bookmarked ? (
                                <RiBookmark2Fill
                                    className="text-zinc-800 dark:text-zinc-200"
                                    onClick={() => {
                                        removeBookmark(cat, i?.name);
                                        setBookmarked(!bookmarked);
                                    }}
                                />
                            ) : (
                                <RiBookmark2Line
                                    className="text-zinc-500"
                                    onClick={() => {
                                        addBookmark(cat, info);
                                        setBookmarked(!bookmarked);
                                    }}
                                />
                            )}
                        </div>
                    )}
                </div>
            </div>

            <div className={`mb-20 rounded-sm`}>{totalConfig[tabNum].component}</div>
        </div>
    );
}
