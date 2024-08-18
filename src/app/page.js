import Link from 'next/link';
import { FaGithub, FaHtml5, FaReact, FaRocket } from 'react-icons/fa6';
import { SiNextdotjs, SiTailwindcss } from 'react-icons/si';

export const metadata = {
    metadataBase: new URL('https://navigateui.com'),
    openGraph: {
        images: '/opengraph-image.png'
    }
};

export default function Home() {
    return (
        <main className="mb-20 text-zinc-700 dark:text-zinc-100">
            <div className="bg-primary-gradient z-10 mx-auto mt-10 w-fit rounded-full px-6 py-1 font-mono text-xs text-white">Dedicated to the Martyrs of 2024</div>
            <div className="z-10 flex justify-center py-6 text-center sm:py-10 md:py-14 lg:py-16">
                <div className="space-y-3 sm:space-y-5">
                    <h2 className="text-2xl font-extrabold lg:text-3xl xl:text-4xl">
                        <span className="text-primary-gradient inline-block pb-2 text-3xl lg:text-4xl xl:text-5xl">NavigateUI </span> Free Component <br />
                        Library for Developers
                    </h2>
                    <p className="mx-auto max-w-xl text-balance text-sm font-medium sm:text-base md:text-lg lg:text-xl">
                        Navigate to a world of <span className="text-primary-gradient">free</span>, <span className="text-primary-gradient">reusable</span>, and highly{' '}
                        <span className="text-primary-gradient">customizable</span> Tailwind components
                    </p>
                    <div className="flex flex-row flex-wrap items-center justify-center gap-1 text-xs font-medium sm:gap-2 sm:text-sm md:gap-3 md:text-base lg:text-lg">
                        <Link href="/components/accordion" className="bg-primary-gradient flex items-center gap-2 text-nowrap rounded-md px-6 py-2 text-white duration-300 md:w-auto">
                            Get Start <FaRocket />
                        </Link>
                        <Link
                            href="https://github.com/NavigateUI/NavigateUI"
                            className="flex items-center gap-2 rounded-md px-6 py-[7px] ring-1 ring-black backdrop-blur-sm transition-colors duration-300 hover:bg-black/10 dark:ring-zinc-300 dark:hover:bg-white/10"
                        >
                            <FaGithub /> Github
                        </Link>
                    </div>
                    <div className="mt-5 flex justify-center gap-3 text-4xl sm:text-5xl dark:text-white">
                        <FaHtml5 className="rounded-lg p-2 text-[#dd4b25] shadow-[0_0_2px] backdrop-blur-sm hover:bg-[#dd4b25]/10" />
                        <SiTailwindcss className="rounded-lg p-2 text-[#38bdf8] shadow-[0_0_2px] backdrop-blur-sm hover:bg-[#38bdf8]/10" />
                        <div className="rounded-lg text-sky-500 shadow-[0_0_2px] backdrop-blur-sm hover:bg-sky-500/10">
                            <FaReact className="animate-[spin_4s_linear_infinite] p-2" />
                        </div>
                        <SiNextdotjs className="rounded-lg p-2 shadow-[0_0_2px] backdrop-blur-sm hover:bg-black/10 dark:hover:bg-white/10" />
                    </div>
                </div>
            </div>

            {/* <ul className="group z-10 mx-auto grid w-fit justify-center overflow-hidden rounded-md text-zinc-100 transition-colors duration-0 *:max-w-52 *:space-y-2 *:p-4 *:font-semibold *:duration-300 sm:grid-cols-2 md:grid-cols-4">
                <li className="bg-primary-gradient">
                    <FiPackage className="mx-auto text-3xl" />
                    <h5 className="text-center text-sm">No dependencies</h5>
                </li>
                <li className="bg-primary-gradient">
                    <RiDeviceLine className="mx-auto text-3xl" />
                    <h5 className="text-center text-sm">Responsive Design</h5>
                </li>
                <li className="bg-primary-gradient">
                    <FiMoon className="mx-auto text-3xl" />
                    <h5 className="text-center text-sm">Dark mode</h5>
                </li>
                <li className="bg-primary-gradient">
                    <FaSwatchbook className="mx-auto text-3xl" />
                    <h5 className="text-center text-sm">Easy to Customize</h5>
                </li>
            </ul> */}
        </main>
    );
}
