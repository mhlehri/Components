'use client';
import { useCallback, useEffect, useState } from 'react';
import CP from '@/ui/CP';
import Image from 'next/image';

const code = `
import { useState } from 'react';
export const Carousel8 = () => {
    const [currentSlider, setCurrentSlider] = useState(0);
    const sliders = ['https://source.unsplash.com/1200x540/?snow-fall','https://source.unsplash.com/1200x540/?Spring','https://images.unsplash.com/photo-1719749990914-a3ba54e6343f?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D','https://images.unsplash.com/photo-1467195468637-72eb862bb14e?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D','https://source.unsplash.com/1200x540/?Autumn'];
    const nextSlider = () => setCurrentSlider((currentSlider) => (currentSlider === sliders.length - 1 ? 0 : currentSlider + 1));
    useEffect(() => {
        const intervalId = setInterval(() => {
            nextSlider();
        }, 3000);
        return () => clearInterval(intervalId);
    }, [currentSlider]);

    return (
        <CP code={code}>
            <div className="w-full mx-auto h-[240px] md:h-[540px] flex flex-col lg:flex-row items-center overflow-hidden gap-5 lg:gap-10 px-10">
                <div className="relative overflow-hidden">
                    {/* dots */}
                    <div className="flex h-fit rounded-full z-50 absolute right-0 bottom-1/2 w-fit gap-1 rotate-90">
                        {sliders.map((_, inx) => (
                            <button key={inx} onClick={() => setCurrentSlider(inx)}
                                className={\`rounded-full duration-300 bg-white \${currentSlider === inx ? 'w-10' : 'w-2'} h-2\`}>
                            </button>
                        ))}
                    </div>
                    {/* slider container */}
                    <div className="ease-linear duration-300 flex flex-col h-60 sm:h-96 md:h-[540px] transform-gpu relative" style={{ transform: \`translateY(-\${currentSlider * 100}%)\` }}>
                        {/* sliders */}
                        {sliders.map((_, inx) => (
                            <div key={inx} className="min-w-full duration-200 before:content-['Image'] before:bg-black/20 before:-z-10 before:absolute before:text-3xl before:flex before:justify-center before:items-center before:text-black/40 before:inset-0 relative">
                                <img src={_} className="w-full h-60 sm:h-96 md:h-[540px] object-cover" alt={\`Slider - \${inx + 1}\`} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </CP>
    );
};
`;

export const Carousel8 = () => {
    const [currentSlider, setCurrentSlider] = useState(0);
    const sliders = [
        'https://source.unsplash.com/1200x540/?snow-fall',
        'https://source.unsplash.com/1200x540/?Spring',
        'https://images.unsplash.com/photo-1719749990914-a3ba54e6343f?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1467195468637-72eb862bb14e?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://source.unsplash.com/1200x540/?Autumn'
    ];
    const nextSlider = useCallback(() => {
        setCurrentSlider((currentSlider) => (currentSlider === sliders.length - 1 ? 0 : currentSlider + 1));
    }, [sliders.length]);
    useEffect(() => {
        const intervalId = setInterval(() => {
            nextSlider();
        }, 3000);
        return () => clearInterval(intervalId);
    }, [nextSlider, currentSlider]);

    return (
        <CP code={code}>
            <div className="mx-auto h-full min-w-[100%] md:h-[540px]">
                <div className="relative overflow-hidden">
                    {/* dots */}
                    <div className="absolute bottom-1/2 right-0 z-50 flex h-fit w-fit rotate-90 gap-1 rounded-full">
                        {sliders.map((_, inx) => (
                            <button key={inx} onClick={() => setCurrentSlider(inx)} className={`rounded-full bg-white duration-300 ${currentSlider === inx ? 'w-10' : 'w-2'} h-2`}></button>
                        ))}
                    </div>
                    {/* slider container */}
                    <div className="relative flex h-60 transform-gpu flex-col duration-300 ease-linear sm:h-96 md:h-[540px]" style={{ transform: `translateY(-${currentSlider * 100}%)` }}>
                        {/* sliders */}
                        {sliders.map((_, inx) => (
                            <div
                                key={inx}
                                className="relative min-w-full duration-200 before:absolute before:inset-0 before:-z-10 before:flex before:items-center before:justify-center before:bg-black/20 before:text-3xl before:text-black/40 before:content-['Image']"
                            >
                                <Image width={1200} height={540} src={_} className="h-60 w-full object-cover sm:h-96 md:h-[540px]" alt={`Slider - ${inx + 1}`} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </CP>
    );
};
