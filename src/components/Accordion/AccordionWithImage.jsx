'use client';
import { useState } from 'react';
import CP from '@/ui/CP';
import Image from 'next/image';

const code = `import { useState } from 'react';

export default function AccordionWithImage() {

    const [isOpen, setIsOpen] = useState(null);
    const toggle = ({ currentIdx }) => setIsOpen((prevIdx) => (prevIdx == currentIdx ? null : currentIdx));
    const sliders = [
            {
                img: 'https://images.unsplash.com/photo-1485433592409-9018e83a1f0d?q=80&w=1814&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                title: 'Winter'
            },
            {
                img: 'https://images.unsplash.com/photo-1522748906645-95d8adfd52c7?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                title: 'Spring'
            },
            {
                img: 'https://images.unsplash.com/photo-1570299437522-f66ff98d52e7?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                title: 'Summer'
            },
            {
                img: 'https://images.unsplash.com/photo-1667587870757-b2a4a407aeee?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                title: 'Autumn'
            }
        ];  

  return (
        <div className="flex justify-center gap-1 md:gap-4">
            {sliders.map((slide, idx) => (
                <div onClick={() => toggle({ currentIdx: idx })}
                    className={\`relative h-[600px] rounded-3xl bg-gray-300 duration-500 ease-in-out \${isOpen == idx ? ' w-[300px] md:w-[400px] ' : 'w-[100px]'}\`}
                    key={idx}
                    >
                    <img width={640} height={540} className="h-full rounded-3xl object-cover" src={slide.img} alt="accordion navigate ui" />
                    <img width={64} height={64}
                        className={\`absolute bottom-5 border border-white transition-all duration-500 md:border-2 \${isOpen === idx ? 'left-4' : 'left-1/2 -translate-x-1/2 duration-700'} h-10 w-10 rounded-full object-cover md:h-[50px] md:w-[50px]\`}
                        src={slide.img}
                        alt="accordion navigate ui"/>
                    <div className={\`absolute bottom-5 left-[45%] text-white transition-all duration-300 md:left-[100px] \${isOpen === idx ? 'opacity-100' : 'opacity-0 '}\`}>
                        <h3 className="text-lg font-semibold md:text-3xl">Status</h3>
                        <p className="text-sm md:text-xl">{slide.title}</p>
                    </div>
                </div>
            ))}
        </div>
   );
}`;

export default function AccordionWithImage(i) {
    const [isOpen, setIsOpen] = useState(null);

    const toggle = ({ currentIdx }) => setIsOpen((prevIdx) => (prevIdx == currentIdx ? null : currentIdx));

    const sliders = [
        {
            img: 'https://images.unsplash.com/photo-1485433592409-9018e83a1f0d?q=80&w=1814&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            title: 'Winter'
        },
        {
            img: 'https://images.unsplash.com/photo-1522748906645-95d8adfd52c7?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            title: 'Spring'
        },
        {
            img: 'https://images.unsplash.com/photo-1570299437522-f66ff98d52e7?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            title: 'Summer'
        },
        {
            img: 'https://images.unsplash.com/photo-1667587870757-b2a4a407aeee?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            title: 'Autumn'
        }
    ];
    return (
        <CP code={code} i={i}>
            <div className="flex justify-center gap-1 md:gap-4">
                {sliders.map((slide, idx) => (
                    <div
                        onClick={() => toggle({ currentIdx: idx })}
                        className={`relative h-[600px] rounded-3xl bg-gray-300 duration-500 ease-in-out ${isOpen == idx ? 'w-[300px] md:w-[400px]' : 'w-[100px]'}`}
                        key={idx}
                    >
                        {/* main image  */}
                        <Image width={640} height={540} className="h-full rounded-3xl object-cover" src={slide.img} alt="accordion navigate ui" />
                        <Image
                            width={64}
                            height={64}
                            className={`absolute bottom-5 border border-white transition-all duration-500 md:border-2 ${
                                isOpen === idx ? 'left-4' : 'left-1/2 -translate-x-1/2 duration-700'
                            } h-10 w-10 rounded-full object-cover md:h-[50px] md:w-[50px]`}
                            src={slide.img}
                            alt="accordion navigate ui"
                        />
                        <div className={`absolute bottom-5 left-[45%] text-white transition-all duration-300 md:left-[100px] ${isOpen === idx ? 'opacity-100' : 'opacity-0'}`}>
                            <h3 className="text-lg font-semibold md:text-3xl">Status</h3>
                            <p className="text-sm md:text-xl">{slide.title}</p>
                        </div>
                    </div>
                ))}
            </div>
        </CP>
    );
}
