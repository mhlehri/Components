'use client';
import { useState } from 'react';
import CP from '@/ui/CP';

const code = `import { useState } from 'react';

const accordionData = [{title: 'heading', subtitle: 'Hey! How are you doing?', colorBg: 'bg-amber-500', colorBorder: 'border-amber-500'},{title: 'heading', subtitle: 'Hey! How are you doing? This is my new', colorBg: 'bg-orange-500', colorBorder: 'border-orange-500'},{title: 'heading', subtitle: 'Hey! How are you doing?', colorBg: 'bg-red-500', colorBorder: 'border-red-500'},{title: 'heading', subtitle: 'Hey! How are you doing?', colorBg: 'bg-sky-500', colorBorder: 'border-sky-500'},{title: 'heading', subtitle: 'Hey! How are you doing?', colorBg: 'bg-purple-500', colorBorder: 'border-purple-500'}];

export default function VerticalMenuAccordion() {
    // Toggle State and Function
    const [isActive, setIsActive] = useState(0);
    const handleToggle = (idx) => {
        setIsActive((prevIdx) => (prevIdx === idx ? null : idx));
    };
    return (
      <div className="mx-auto flex min-h-[300px] w-fit gap-1 rotate-90 md:rotate-0">
          {accordionData?.map((data, idx) => (
              <div key={idx} className="flex ">
                  {/* toggle item */}
                  <button onClick={() => handleToggle(idx)} className={\`flex h-full w-14 flex-col items-center justify-around \${data?.colorBg} relative rounded-lg text-white\`}> {isActive === idx && <span className={\`h-0 w-0 \${data?.colorBorder} absolute left-10 top-4 rotate-[225deg] border-b-[20px] border-r-[20px] border-r-transparent\`}></span>}
                      <p className="-rotate-90 md:rotate-0">{idx + 1}</p>
                      <p className="rotate-[270deg]">Example</p>
                  </button>
                  {/* container */}
                  <div className={\`grid place-content-center rounded-lg bg-gray-200 dark:bg-[#18181B] shadow-md \${isActive === idx ? 'opacity-1 scale-1 h-[200px] md:h-auto w-[300px] md:w-56 px-5' : 'w-0 scale-0 opacity-0'} md:ml-2 mt-12 md:mt-0 text-black duration-300 ease-in-out -rotate-90 md:rotate-0\`}>
                      <h2 className="font-black lg:text-2xl dark:text-white">{data?.title}</h2>
                      <p className="text-black/60 dark:text-white/60">{data?.subtitle}</p>
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
export default function VerticalMenuAccordion(i) {
    // Toggle State and Function
    const [isActive, setIsActive] = useState(0);
    const handleToggle = (idx) => {
        setIsActive((prevIdx) => (prevIdx === idx ? null : idx));
    };
    return (
        <CP code={code} i={i}>
            <div className="flex h-screen items-center justify-center md:block md:h-auto">
                <div className="mx-auto flex min-h-[300px] w-fit rotate-90 gap-1 md:rotate-0">
                    {accordionData?.map((data, idx) => (
                        <div key={idx} className="flex">
                            {/* toggle item */}
                            <button onClick={() => handleToggle(idx)} className={`flex h-full w-14 flex-col items-center justify-around ${data?.colorBg} relative rounded-lg text-white`}>
                                {isActive === idx && (
                                    <span className={`h-0 w-0 ${data?.colorBorder} absolute left-10 top-4 rotate-[225deg] border-b-[20px] border-r-[20px] border-r-transparent`}></span>
                                )}
                                <p className="-rotate-90 md:rotate-0">{idx + 1}</p>
                                <p className="rotate-[270deg]">Example</p>
                            </button>
                            {/* container */}
                            <div
                                className={`grid place-content-center rounded-lg bg-gray-200 shadow-md dark:bg-[#18181B] ${
                                    isActive === idx ? 'opacity-1 scale-1 h-[200px] w-[300px] px-5 md:h-auto md:w-56' : 'w-0 scale-0 opacity-0'
                                } mt-12 -rotate-90 text-black duration-300 ease-in-out md:ml-2 md:mt-0 md:rotate-0`}
                            >
                                <h2 className="font-black lg:text-2xl dark:text-white">{data?.title}</h2>
                                <p className="text-black/60 dark:text-white/60">{data?.subtitle}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </CP>
    );
}
