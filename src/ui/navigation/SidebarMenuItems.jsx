'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function SidebarMenuItem({ menuItem, setIsOpen }) {
    const path = usePathname();
    return (
        <div className={`${path.includes('components') && menuItem.about === 'Blocks' ? 'hidden' : path.includes('blocks') && menuItem.about === 'Components' ? 'hidden' : null} text-sm`}>
            <div className={`group my-2 flex w-full cursor-pointer items-center justify-between gap-5`}>
                <h4 className={`group-hover:text-primary-gradient font-semibold capitalize dark:text-white`}>{menuItem.about}</h4>
            </div>
            <div className={`grid origin-top overflow-hidden duration-300 ease-in-out`}>
                <div className="flex flex-col space-y-2 overflow-hidden text-slate-500 dark:text-zinc-400">
                    {menuItem?.links?.map((item, key) => {
                        return (
                            <div key={key}>
                                {menuItem.about === 'Getting Start' ? (
                                    <h1 className="pl-2 lg:pl-0">
                                        <span
                                            className={`duration-200 ${path.includes(item.route.replace(/\s+/g, '')) ? 'text-sky-400' : 'group-hover:pl-[2px] group-hover:tracking-wide group-hover:text-white'}`}
                                        >
                                            {item.route}
                                        </span>
                                    </h1>
                                ) : (
                                    <Link
                                        onClick={() => {
                                            setIsOpen(false);
                                        }}
                                        className="group flex items-center gap-1 pl-2 lg:pl-0"
                                        href={`/${menuItem.about === 'Getting Start' ? '' : menuItem.about.toLowerCase() + '/'}${item.route.toLowerCase().replace(/\s+/g, '')}`}
                                    >
                                        <span
                                            className={`${path === `/${menuItem.about.toLowerCase()}/${item.route.toLowerCase().replace(/\s+/g, '')}` ? 'text-zinc-950 dark:text-white' : 'group-hover:pl-[2px] group-hover:font-medium group-hover:tracking-wide group-hover:text-black dark:group-hover:text-white'} duration-300`}
                                        >
                                            {item?.route}
                                        </span>
                                        <span className={`rounded-lg px-1 text-xs ${item.new ? 'bg-emerald-500/10 text-emerald-500' : item.update ? 'bg-orange-500/10 text-orange-500' : 'hidden'}`}>
                                            <span className="flex items-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5">
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z"
                                                    />
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d="M12 18a3.75 3.75 0 0 0 .495-7.468 5.99 5.99 0 0 0-1.925 3.547 5.975 5.975 0 0 1-2.133-1.001A3.75 3.75 0 0 0 12 18Z"
                                                    />
                                                </svg>{' '}
                                                {item.new ? 'New' : item.update ? 'Updated' : null}
                                            </span>
                                        </span>
                                    </Link>
                                )}{' '}
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
