import Image from 'next/image';
import Link from 'next/link';
import { FaDiscord, FaFacebook, FaGithub, FaStar } from 'react-icons/fa6';
import ThemeSwitch, { BookmarkDrawer, NavMenu } from './Client';
import Sidebar from './Sidebar';

export async function getRepoData() {
    const res = await fetch('https://api.github.com/repos/NavigateXtend/NavigateUI', { next: { revalidate: 3600 } });
    return res.json();
}
export default async function Navbar() {
    // const data = 142;
    const data = await getRepoData();

    return (
        <nav className="sticky top-0 z-[99] h-[50px] w-full bg-white text-zinc-700 shadow-[0px_0px_.7px] dark:bg-black/90 dark:text-white">
            <div className="item-center mx-auto flex h-full max-w-con justify-between px-2 py-2 lg:px-10">
                <div className="flex items-center lg:hidden">
                    <Sidebar />
                </div>
                <Link href="/" className="group hidden items-center gap-px rounded-lg text-xl font-semibold lg:flex">
                    <Image src="/Logo.svg" className="size-8" width={25} height={24} alt="navigate ui logo" />
                    <span className="text-primary">NavigateUI</span>
                </Link>
                <NavMenu />
                <ul className="flex items-center gap-2 text-2xl">
                    <ThemeSwitch />
                    <BookmarkDrawer />
                    <li>
                        <Link className="group relative flex items-center gap-1" href="https://github.com/NavigateUI/NavigateUI" target="_blank">
                            <div className="flex items-center justify-center gap-[2px] rounded-md bg-zinc-700 px-1 py-[2px] text-xs font-black text-white dark:bg-white/90 dark:text-black">
                                <FaStar />
                                <span className="font-mono">{data?.stargazers_count || 142}</span>
                            </div>
                            <FaGithub className="size-5 rounded-full group-hover:bg-white group-hover:text-black" />
                        </Link>
                    </li>
                    <li>
                        <Link className="group relative flex items-center justify-center" href="https://discord.com/invite/ezphnpnEXx" target="_blank">
                            <FaDiscord className="size-5 hover:animate-[spin_.4s] hover:text-[#5662f6]" />
                        </Link>
                    </li>
                    <li>
                        <Link className="group relative flex items-center justify-center" href="https://www.facebook.com/groups/navigateui/" target="_blank">
                            <FaFacebook className="size-5 hover:text-[#0866ff]" />
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
