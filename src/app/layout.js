import Navbar from '@/ui/Navbar';
import Sidebar from '@/ui/Sidebar';
import { GoogleAnalytics } from '@next/third-parties/google';
import { Inter, Lato } from 'next/font/google';
import './globals.css';
import { Providers } from './provider';
import { FaBookmark, FaGear } from 'react-icons/fa6';
import ThemeSwitch, { Gear } from '@/ui/Client';

const inter = Inter({ subsets: ['latin'] });
export const lato = Lato({ subsets: ['latin'], weight: ['100', '300', '400', '700', '900'] });

export const metadata = {
    metadataBase: new URL('https://navigateui.com'),
    title: { default: 'Navigate UI', template: '%s - Navigate UI' },
    openGraph: {
        images: '/opengraph-image.png'
    },
    description: 'Navigate to a world of free, reusable, and highly customizable Tailwind components',
    icons: {
        icon: '/icon.png',
        shortcut: '/shortcut-icon.png',
        apple: '/apple-icon.png'
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Navigate UI',
        description: 'Navigate to a world of free, reusable, and highly customizable Tailwind components',
        creator: '@navigateui_team'
    }
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={`${inter.className} bg-white selection:bg-sky-500 selection:text-white dark:bg-black/90`}>
                <Providers>
                    <Navbar />
                    {/* <div className="lg:hidden">
                        <Sidebar />
                    </div> */}
                    <div className="mx-auto max-w-con px-2 lg:px-10">{children}</div>

                    {/* <Gear /> */}
                </Providers>
                {/* <div className="fixed right-0 top-0 z-0 size-40 rounded-full bg-sky-400 blur-[100px] dark:blur-[200px]"></div> */}
                {/* <div className="fixed bottom-0 left-20 z-0 size-72 rounded-full bg-sky-400 blur-[150px] dark:blur-[280px]"></div> */}
                
            </body>
            <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA4_ID} />
        </html>
    );
}
