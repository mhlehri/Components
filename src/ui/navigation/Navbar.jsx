import Link from 'next/link';
import { FaDiscord, FaFacebook, FaGithub, FaStar } from 'react-icons/fa6';
import Sidebar from './Sidebar';
import ThemeSwitch, { Logo } from '../Client';
import { NavMenu } from './NavbarMenuItems';

export async function getRepoData() {
    const res = await fetch('https://api.github.com/repos/NavigateXtend/NavigateUI', { next: { revalidate: 3600 } });
    return res.json();
}
export default async function Navbar() {
    const data = await getRepoData();

    return (
        <nav className="sticky top-0 z-[99] h-[50px] w-full bg-white text-zinc-500 shadow-[0px_0px_.7px] dark:bg-black/90 dark:text-white">
            <div className="item-center mx-auto flex h-full max-w-con justify-between px-2 py-2 lg:px-10">
                <div className="flex items-center lg:hidden">
                    <Sidebar />
                </div>
                <div className="flex gap-10">
                    <Link href="/" className="group hidden items-center gap-2 rounded-lg text-xl lg:flex">
                        <Logo />
                        {/* <span className="font-medium text-zinc-800 dark:text-white">NavigateUI</span> */}
                        <span className="font-medium text-red-600">NavigateUI</span>
                    </Link>
                    <NavMenu />
                </div>
                <ul className="flex items-center gap-4">
                    <ThemeSwitch />
                    <li>
                        <Link className="group relative flex items-center gap-2" href="https://github.com/NavigateUI/NavigateUI" target="_blank">
                            <span className="flex items-center gap-[2px] rounded-md px-1.5 py-1 text-[11px] font-black text-slate-600 ring-1 ring-slate-600 dark:text-zinc-400">
                                <FaStar />
                                <span className="font-mono">{data?.stargazers_count || 142}</span>
                            </span>
                            <FaGithub className="size-5 rounded-full group-hover:text-zinc-800" />
                        </Link>
                    </li>
                    <li>
                        <Link className="group relative flex items-center justify-center" href="https://discord.com/invite/ezphnpnEXx" target="_blank">
                            <FaDiscord className="size-5 hover:animate-[spin_.4s] hover:text-[#5662f6]" />
                        </Link>
                    </li>
                    <li>
                        <Link className="group relative flex items-center justify-center" href="https://www.facebook.com/groups/navigateui/" target="_blank">
                            <FaFacebook className="size-5 hover:text-blue-700" />
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
