'use client';
import { useState } from 'react';
import CP from '@/ui/CP';

const code = `import { useState } from 'react';

const accordionData = [{title: 'heading', subtitle: 'Hey! How are you doing?', colorBg: 'bg-amber-500', colorBorder: 'border-amber-500'},{title: 'heading', subtitle: 'Hey! How are you doing? This is my new', colorBg: 'bg-orange-500', colorBorder: 'border-orange-500'},{title: 'heading', subtitle: 'Hey! How are you doing?', colorBg: 'bg-red-500', colorBorder: 'border-red-500'},{title: 'heading', subtitle: 'Hey! How are you doing?', colorBg: 'bg-sky-500', colorBorder: 'border-sky-500'},{title: 'heading', subtitle: 'Hey! How are you doing?', colorBg: 'bg-purple-500', colorBorder: 'border-purple-500'}];

export default function VerticalAccordion() {
    // Toggle State and Function
    const [isActive, setIsActive] = useState(0);
    const handleToggle = (idx) => {
        setIsActive((prevIdx) => (prevIdx === idx ? null : idx));
    };

    return (
        <div className="mx-auto my-10 flex w-fit rotate-90 shadow-md min-h-[220px] md:min-h-[300px] md:rotate-0 ">
            {accordionData?.map((data, idx) => (
                <div key={idx} className="flex">
                    {/* toggle item */}
                    <button onClick={() => handleToggle(idx)} className={\` flex h-full w-fit items-end border-b-8 bg-white pb-10 dark:bg-[#323238] \${data?.colorBorder} shadow-[2px_2px_5px_#00000083]\`}>
                        <div className={\`size-10 text-white md:size-16 \${data?.colorBg} relative flex items-center justify-center \`}>
                            <span className={\`h-0 w-0 \${data?.colorBorder} dark:\${data?.colorBorder} absolute left-8 -z-10 hidden  rotate-[225deg] rounded-lg border-b-[60px] border-r-[60px] border-r-transparent md:block\`}></span>
                            <span className="-rotate-90 md:rotate-0">0{idx + 1}</span>
                        </div>
                    </button>
                    {/* container */}
                    <div
                        className={\`grid place-content-center \${isActive === idx ? 'opacity-1 scale-1  w-[220px] md:w-56   px-5' : 'w-0 scale-0 opacity-0'} -z-20  -rotate-90 bg-white  text-black duration-300 ease-in-out dark:bg-[#18181B] md:rotate-0\`}>
                        <h2 className="font-black dark:text-white lg:text-2xl ">{data?.title}</h2>
                        <p className="dark:text-white/60 ">{data?.subtitle}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}
`;

const accordionData = [
    {
        title: 'heading 1',
        subtitle: 'Hey! How are you doing?',
        colorBg: 'bg-amber-500',
        colorBorder: 'border-amber-500'
    },
    {
        title: 'heading 2',
        subtitle: 'Hey! How are you doing?',
        colorBg: 'bg-orange-500',
        colorBorder: 'border-orange-500'
    },
    {
        title: 'heading 3',
        subtitle: 'Hey! How are you doing?',
        colorBg: 'bg-red-500',
        colorBorder: 'border-red-500'
    },
    {
        title: 'heading 4',
        subtitle: 'Hey! How are you doing?',
        colorBg: 'bg-sky-500',
        colorBorder: 'border-sky-500'
    },
    {
        title: 'heading 5',
        subtitle: 'Hey! How are you doing?',
        colorBg: 'bg-purple-500',
        colorBorder: 'border-purple-500'
    }
];
export default function VerticalAccordion(i) {
    // Toggle State and Function
    const [isActive, setIsActive] = useState(0);
    const handleToggle = (idx) => {
        setIsActive((prevIdx) => (prevIdx === idx ? null : idx));
    };
    return (
        <CP code={code} i={i}>
            <div className="flex h-screen items-center justify-center md:block md:h-auto">
                <div className="mx-auto my-10 flex min-h-[220px] w-fit rotate-90 overflow-hidden shadow-md md:min-h-[300px] md:rotate-0">
                    {accordionData?.map((data, idx) => (
                        <div key={idx} className="flex">
                            {/* toggle item */}
                            <button
                                onClick={() => handleToggle(idx)}
                                className={`flex h-full w-fit items-end border-b-8 bg-white pb-10 dark:bg-[#323238] ${data?.colorBorder} shadow-[2px_2px_5px_#00000083]`}
                            >
                                <div className={`size-10 text-white md:size-16 ${data?.colorBg} relative flex items-center justify-center`}>
                                    <span
                                        className={`h-0 w-0 ${data?.colorBorder} dark:${data?.colorBorder} absolute left-8 -z-10 hidden rotate-[225deg] rounded-lg border-b-[60px] border-r-[60px] border-r-transparent md:block`}
                                    ></span>
                                    <span className="-rotate-90 md:rotate-0">0{idx + 1}</span>
                                </div>
                            </button>
                            {/* container */}
                            <div
                                className={`grid place-content-center ${isActive === idx ? 'opacity-1 scale-1 w-[220px] px-5 md:w-56' : 'w-0 scale-0 opacity-0'} -z-20 -rotate-90 bg-white text-black duration-300 ease-in-out md:rotate-0 dark:bg-[#18181B]`}
                            >
                                <h2 className="font-black lg:text-2xl dark:text-white">{data?.title}</h2>
                                <p className="dark:text-white/60">{data?.subtitle}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </CP>
    );
}
