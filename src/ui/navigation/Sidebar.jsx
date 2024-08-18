'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { RiCloseFill, RiMenu2Line } from 'react-icons/ri';
import { SidebarMenuItem } from './SidebarMenuItems';
import { sidebarRoutes } from './sidebarRoutes';
import { Logo } from '../Client';
export default function Sidebar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <div
                className={`sidebar fixed top-0 z-[99] h-screen select-none overflow-hidden duration-300 md:text-lg lg:visible lg:top-auto lg:h-ch lg:pl-0 lg:text-base lg:backdrop-blur-0 ${isOpen ? 'visible left-0 w-48 origin-left bg-white/90 backdrop-blur-3xl lg:left-auto lg:border-none lg:bg-transparent dark:bg-black/90' : 'invisible -left-64 lg:visible lg:left-auto'}`}
            >
                <div className="sticky top-0 flex items-center justify-between bg-white py-2 pr-2 text-slate-800 lg:hidden dark:text-white">
                    {/* <Link href="/" className="group flex flex-1 items-center gap-px font-semibold">
                        <Image src="/Logo.svg" className="size-8" width={25} height={24} alt="navigate ui logo" />
                        <span className="text-sky-400">NavigateUI</span>
                    </Link> */}
                    <Link href="/" className="group mx-1 flex flex-1 items-center gap-px font-semibold">
                        <Logo />
                        {/* <span className="font-medium text-zinc-800 dark:text-white">NavigateUI</span> */}
                        <span className="font-medium text-red-600">NavigateUI</span>
                    </Link>
                    <button
                        onClick={() => {
                            setIsOpen(false);
                        }}
                    >
                        <RiCloseFill size={25} />
                    </button>
                </div>
                <div className="sidebar mt-6 h-[calc(100vh-65px)] w-full overflow-y-scroll pl-3 pr-1">
                    {sidebarRoutes.map((menuItem, idx) => (
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
