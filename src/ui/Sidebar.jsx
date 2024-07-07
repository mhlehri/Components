'use client';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import { RiCloseFill, RiMenu2Line } from 'react-icons/ri';

export function SidebarMenuItem({ menuItem, setIsOpen }) {
    const [isDropdownOpen, setIsDropdownOpen] = useState(true);
    const path = usePathname();
    // console.log(path);
    return (
        <div className={`${path.includes('components') && menuItem.about === 'Blocks' ? 'hidden' : path.includes('blocks') && menuItem.about === 'Components' ? 'hidden' : null}`}>
            {/* click event div  */}
            <div onClick={() => setIsDropdownOpen(!isDropdownOpen)} className={`group my-2 flex w-full cursor-pointer items-center justify-between gap-5`}>
                <h4 className={`group-hover:text-primary font-semibold capitalize dark:text-white`}>{menuItem.about}</h4>
                <IoIosArrowDown className={`${isDropdownOpen ? '-rotate-180 duration-300' : 'duration-300'}`} />
            </div>
            {/* the dropdown  */}
            <div className={`grid origin-top overflow-hidden font-mono duration-300 ease-in-out ${isDropdownOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                <div className="flex flex-col space-y-1 overflow-hidden text-zinc-600 dark:text-zinc-400 sm:space-y-1 lg:space-y-1.5">
                    {menuItem?.links?.map((item, key) => {
                        return (
                            <div key={key}>
                                {menuItem.about === 'Getting Start' ? (
                                    <h1 className="pl-2 lg:pl-0">
                                        <span
                                            className={`text-sm duration-200 ${path.includes(item.route.replace(/\s+/g, '')) ? 'text-sky-400' : 'group-hover:pl-[2px] group-hover:tracking-widest group-hover:text-white'}`}
                                        >
                                            {item.route}
                                        </span>
                                        <span className="rounded-lg border border-cyan-400 px-1 font-mono text-xs text-cyan-400" hidden={!item.new}>
                                            {item.new ? 'new' : ''}
                                        </span>
                                    </h1>
                                ) : (
                                    <Link
                                        onClick={() => {
                                            setIsOpen(false);
                                        }}
                                        className="group flex items-center gap-1 pl-2 lg:pl-0"
                                        href={`/${menuItem.about.toLowerCase()}/${item.route.toLowerCase().replace(/\s+/g, '')}`}
                                    >
                                        <span
                                            className={`${path === `/${menuItem.about.toLowerCase()}/${item.route.toLowerCase().replace(/\s+/g, '')}` ? 'font-semibold text-black dark:text-white' : 'group-hover:pl-[2px] group-hover:font-medium group-hover:tracking-widest group-hover:text-black dark:group-hover:text-white'} text-sm duration-200`}
                                        >
                                            {item?.route}
                                        </span>
                                        <span
                                            className={`rounded-lg border px-1 text-xs ${item.new ? 'border-cyan-400 bg-cyan-400/20 text-cyan-400' : item.update ? 'border-orange-500 bg-orange-500/20 text-orange-500' : 'hidden'}`}
                                        >
                                            {item.new ? 'new' : item.update ? 'updated' : null}
                                        </span>
                                    </Link>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

const MenuItems = [
    {
        about: 'Getting Start',
        links: [{ route: 'Installation' }, { route: 'Overview' }, { route: 'Components' }, { route: 'Blocks' }]
    },
    {
        about: 'Components',
        links: [
            { route: 'Accordion' },
            { route: 'Avatar' },
            { route: 'Badge' },
            { route: 'Button' },
            { route: 'Card' },
            { route: 'Carousel', update: true },
            { route: 'Dropdown' },
            { route: 'Footer' },
            { route: 'Form' },
            { route: 'File Upload', new: true },
            { route: 'Hero' },
            { route: 'Input' },
            { route: 'Modal' },
            { route: 'Navbar' },
            { route: 'Pagination' },
            { route: 'Rating', new: true },
            { route: 'Progress' },
            { route: 'Select' },
            { route: 'Skeleton' },
            { route: 'Speed Dial' },
            { route: 'Spinner' },
            { route: 'Switch' },
            { route: 'Table' },
            { route: 'Tooltip' }
        ]
    },
    // {
    // about: 'Animated-c',
    // links: []
    // },
    {
        about: 'Blocks',
        links: [{ route: 'Pricing' }, { route: 'Contact Us' }]
    }
];

export default function Sidebar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <div
                className={`sidebar fixed top-0 z-[99] h-screen select-none overflow-hidden duration-300 md:text-lg lg:visible lg:top-auto lg:h-ch lg:pl-0 lg:text-base lg:backdrop-blur-0 ${isOpen ? 'visible left-0 w-64 origin-left bg-white/90 backdrop-blur-3xl dark:bg-black/90 lg:left-auto lg:border-none lg:bg-transparent' : 'invisible -left-64 lg:visible lg:left-auto'} lg:w-48`}
            >
                <div className="sticky top-0 flex items-center justify-between border-b bg-white py-2 pr-2 text-slate-800 dark:text-white lg:hidden">
                    <Link href="/" className="group flex flex-1 items-center gap-px font-semibold">
                        <Image src="/Logo.svg" className="size-8" width={25} height={24} alt="navigate ui logo" />
                        <span className="text-sky-400">NavigateUI</span>
                    </Link>
                    <button
                        onClick={() => {
                            setIsOpen(false);
                        }}
                    >
                        <RiCloseFill size={25} />
                    </button>
                </div>
                <div className="sidebar mt-2 h-[calc(100vh-65px)] overflow-y-scroll pl-3 pr-1">
                    {MenuItems.map((menuItem, idx) => (
                        <SidebarMenuItem key={idx} isOpen={isOpen} setIsOpen={setIsOpen} menuItem={menuItem} />
                    ))}
                </div>
            </div>
            <button
                onClick={() => {
                    setIsOpen((prev) => !prev);
                }}
                className={`z-[99] block lg:hidden`}
            >
                {!isOpen ? <RiMenu2Line size={20} className="dark:text-white" /> : null}
            </button>
        </>
    );
}
