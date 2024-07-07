'use client';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { RiBookmark2Fill, RiBookmark2Line } from 'react-icons/ri';
import { addBookmark, getBookmarkById, removeBookmark } from './Client';
import Highlighter from './Highlighter';

export default function CP({ children, code, i }) {
    const [tabNum, setTabNum] = useState(0);
    const [bookmarked, setBookmarked] = useState(false);
    // const ref = useRef();
    const url = usePathname();
    const cat = url?.includes('components') ? 'components' : 'blocks';

    const info = {
        name: i?.name,
        url: `${url}#${i?.id}`
    };

    const totalConfig = [
        {
            item: 0,
            name: 'Preview',
            component: <div className="min-w-80 p-5 lg:p-10">{children}</div>
        },
        {
            item: 1,
            name: 'React',
            component: <Highlighter code={code} />
        }
    ];
    useEffect(() => {
        const bookmarkInfo = getBookmarkById(cat, i?.name);
        // console.log(bookmarkInfo);
        if (bookmarkInfo) {
            setBookmarked(bookmarkInfo?.name === i?.name);
        }
    }, [cat, i]);

    // const { width } = ref?.current?.getBoundingClientRect() || 20;
    // console.log(width);

    return (
        <div className="relative my-5 h-fit w-full min-w-80">
            <div className="item-center mb-2 flex justify-between gap-2">
                <div className="flex w-full items-center justify-between">
                    <div className={`item-center ${tabNum === 1 ? 'border-sky-500' : 'border-zinc-600 dark:border-zinc-800'} relative flex overflow-hidden rounded-sm border duration-300`}>
                        <div
                            className={`absolute z-30 flex h-9 w-20 items-center ${tabNum === 1 ? 'bg-sky-500' : 'bg-zinc-600 dark:bg-zinc-800'} duration-300`}
                            style={{ transform: `translateX(${tabNum * 101}%)` }}
                        ></div>

                        <button
                            // ref={ref}
                            onClick={() => setTabNum(0)}
                            className={`z-40 w-20 cursor-pointer select-none px-3 py-2 text-center text-sm ${tabNum === 0 ? 'text-white' : 'text-black dark:text-white'} `}
                        >
                            Preview
                        </button>
                        <button onClick={() => setTabNum(1)} className={`z-40 w-20 cursor-pointer select-none px-3 py-2 text-sm ${tabNum === 1 ? 'text-white' : 'text-black dark:text-white'} `}>
                            React
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

            <div className={`relative mb-20 rounded-sm`}>
                <div
                    className={`absolute inset-0 -z-50 overflow-hidden rounded-sm backdrop-blur-lg ${tabNum === 1 ? 'bg-slate-800 dark:bg-zinc-50/10' : 'border border-gray-300/80 bg-zinc-300/5 dark:border-gray-50/10'}`}
                ></div>{' '}
                {totalConfig[tabNum].component}
            </div>
        </div>
    );
}
