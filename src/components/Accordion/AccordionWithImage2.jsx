'use client';
import CP from '@/ui/CP';
import Image from 'next/image';
import { useState } from 'react';

const code = `import { useState } from 'react';

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

export default function AccordionWithImage2() {
    const [isOpen, setIsOpen] = useState(1);
    const handleToggle = (idx) => setIsOpen((prevIdx) => (prevIdx == idx ? null : idx));

    return (
        <div className="flex h-[800px] items-center justify-center gap-4 bg-blue-50">
            {sliders?.map((slide, idx) => (
                <div onClick={() => handleToggle(idx)} key={idx} className={\`\${isOpen == idx ? 'w-[300px] opacity-100 shadow-lg' : 'w-[100px] opacity-70 grayscale'} \${idx % 2 == 0 ? 'translate-y-16' : ''} relative h-[600px] duration-500 ease-in-out\`}>
                    <img className="block h-full w-full rounded-md object-cover shadow-md" src={slide?.img} alt="accordion navigate ui" />
                    <div className={\`\${isOpen == idx ? 'opacity-100' : 'opacity-0'} absolute bottom-0 h-1/2 w-full bg-gradient-to-t from-black to-transparent duration-500 ease-in-out\`}>
                        <h1 className={\`relative text-center text-2xl text-white/80 \${isOpen == idx ? 'top-[150px] opacity-100' : 'top-[200px] opacity-0'} duration-500 ease-in-out\`}>{slide?.title}</h1>
                    </div>
                </div>
            ))}
        </div>
    );
}
`;

export default function AccordionWithImage2(i) {
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
    const [isOpen, setIsOpen] = useState(1);
    const handleToggle = (idx) => setIsOpen((prevIdx) => (prevIdx == idx ? null : idx));
    return (
        <CP code={code} i={i}>
            <div className="flex h-[800px] items-center justify-center gap-4">
                {sliders?.map((slide, idx) => (
                    <div
                        onClick={() => handleToggle(idx)}
                        key={idx}
                        className={`${isOpen == idx ? 'w-[300px] opacity-100 shadow-lg' : 'w-[100px] opacity-70 grayscale'} ${idx % 2 == 0 ? 'translate-y-16' : ''} relative h-[600px] duration-500 ease-in-out`}
                    >
                        <Image height={600} width={300} className="block h-full w-full rounded-md object-cover shadow-md" src={slide?.img} alt="accordion navigate ui" />
                        <div className={`${isOpen == idx ? 'opacity-100' : 'opacity-0'} absolute bottom-0 h-1/2 w-full bg-gradient-to-t from-black to-transparent duration-500 ease-in-out`}>
                            <h1 className={`relative text-center text-2xl text-white/80 ${isOpen == idx ? 'top-[150px] opacity-100' : 'top-[200px] opacity-0'} duration-500 ease-in-out`}>
                                {slide?.title}
                            </h1>
                        </div>
                    </div>
                ))}
            </div>
        </CP>
    );
}
