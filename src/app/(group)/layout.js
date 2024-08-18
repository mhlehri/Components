import Sidebar from '@/ui/navigation/Sidebar';

export const metadata = {
    title: { default: 'Components', template: '%s - Navigate UI' },
    description: 'tailwindCSS and react Components'
};

export default function ComponentLayout({ children }) {
    return (
        <div className="flex min-w-72 justify-between px-3 2xl:mx-auto">
            <div className="hidden w-full max-w-[20%] justify-self-end lg:block">
                <Sidebar />
            </div>
            <div className="mt-5 w-full pb-5 pt-2 lg:w-4/5 xl:w-[80%]">{children}</div>
            {/* <div className="xl:w-[20%]"></div> */}
        </div>
    );
}
