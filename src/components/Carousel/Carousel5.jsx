'use client';
import { useEffect, useState } from 'react';
import CP from '@/ui/CP';
import Image from 'next/image';

const code = `import { useEffect, useState } from "react";

export const Carousel5 = () => {
  const [currentSlider, setCurrentSlider] = useState(0);
  const sliders = [{img: "https://images.unsplash.com/photo-1421789665209-c9b2a435e3dc?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", title: "Escape 1", des: "A Symphony of Tranquility. Experience the perfect blend of relaxation and excitement.",}, {img: "https://images.unsplash.com/photo-1508873881324-c92a3fc536ba?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", title: "Escape 2", des: "A Symphony of Tranquility. Experience the perfect blend of relaxation and excitement.",}, {img: "https://images.unsplash.com/photo-1719749990914-a3ba54e6343f?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", title: "Escape 3", des: "A Symphony of Tranquility. Experience the perfect blend of relaxation and excitement.",}, {img: "https://images.unsplash.com/photo-1467195468637-72eb862bb14e?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", title: "Escape 4",des: "A Symphony of Tranquility. Experience the perfect blend of relaxation and excitement.",}, {img: "https://images.unsplash.com/photo-1532155297578-a43684be8db8?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", title: "Escape 5", des: "A Symphony of Tranquility. Experience the perfect blend of relaxation and excitement.",},];
  // if you don't want to change the slider automatically then you can just remove the useEffect
  useEffect(() => {
    const intervalId = setInterval(() => setCurrentSlider(currentSlider === sliders.length - 1 ? 0 : currentSlider + 1), 5000);
    return () => clearInterval(intervalId);
  }, [currentSlider]);

  return (
        <>
            <div className="w-full h-60 sm:h-96 md:h-[540px] flex flex-col items-center justify-center gap-5 lg:gap-10 bg-cover bg-center before:absolute before:bg-black/50 before:inset-0 transform duration-1000 ease-linear"
                style={{ backgroundImage: \`url(\${sliders[currentSlider].img})\` }}>
                {/* text container here */}
                <div className="drop-shadow-lg text-white text-center px-5">
                    <h1 className="text-xl lg:text-3xl font-semibold mb-3">{sliders[currentSlider].title}</h1>
                    <p className="text-sm md:text-base lg:text-lg">{sliders[currentSlider].des}</p>
                </div>
            </div>
            {/* slider container */}
            <div className="flex justify-center items-center gap-3 p-2">
                {/* sliders */}
                {sliders.map((slide, inx) => (
                    <img onClick={() => setCurrentSlider(inx)} key={inx}
                        src={slide.img} className={\`w-10 md:w-20 h-6 sm:h-8 md:h-12 bg-black/20 \${currentSlider === inx ? 'border-2 border-black p-px' : ''} rounded-md md:rounded-lg box-content cursor-pointer\`}
                        alt={slide.title}/>
                ))}
            </div>
        </>
  )};
`;

const sliders = [
    {
        img: 'https://images.unsplash.com/photo-1421789665209-c9b2a435e3dc?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: 'Escape 1',
        des: 'A Symphony of Tranquility. Experience the perfect blend of relaxation and excitement.'
    },
    {
        img: 'https://images.unsplash.com/photo-1508873881324-c92a3fc536ba?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: 'Escape 2',
        des: 'A Symphony of Tranquility. Experience the perfect blend of relaxation and excitement.'
    },
    {
        img: 'https://images.unsplash.com/photo-1719749990914-a3ba54e6343f?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: 'Escape 3',
        des: 'A Symphony of Tranquility. Experience the perfect blend of relaxation and excitement.'
    },
    {
        img: 'https://images.unsplash.com/photo-1467195468637-72eb862bb14e?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: 'Escape 4',
        des: 'A Symphony of Tranquility. Experience the perfect blend of relaxation and excitement.'
    },
    {
        img: 'https://images.unsplash.com/photo-1532155297578-a43684be8db8?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: 'Escape 5',
        des: 'A Symphony of Tranquility. Experience the perfect blend of relaxation and excitement.'
    }
];
export const Carousel5 = () => {
    const [currentSlider, setCurrentSlider] = useState(0);

    // if you don't want to change the slider automatically then you can just remove the useEffect
    useEffect(() => {
        const intervalId = setInterval(() => setCurrentSlider(currentSlider === sliders.length - 1 ? 0 : currentSlider + 1), 5000);
        return () => clearInterval(intervalId);
    }, [currentSlider]);

    return (
        <CP code={code}>
            <>
                <div
                    className="flex h-60 w-full transform flex-col items-center justify-center gap-5 bg-cover bg-center duration-1000 ease-linear before:absolute before:inset-0 before:bg-black/50 sm:h-96 md:h-[540px] lg:gap-10"
                    style={{ backgroundImage: `url(${sliders[currentSlider].img})` }}
                >
                    {/* text container here */}
                    <div className="px-5 text-center text-white drop-shadow-lg duration-300 ease-linear">
                        <h1 className="mb-3 text-xl font-semibold lg:text-3xl">{sliders[currentSlider].title}</h1>
                        <p className="text-sm md:text-base lg:text-lg">{sliders[currentSlider].des}</p>
                    </div>
                </div>
                {/* slider container */}
                <div className="flex items-center justify-center gap-3 p-2">
                    {/* sliders */}
                    {sliders.map((slide, inx) => (
                        <Image
                            width={1200}
                            height={540}
                            onClick={() => setCurrentSlider(inx)}
                            key={inx}
                            src={slide.img}
                            className={`h-6 w-10 bg-black/20 sm:h-8 md:h-12 md:w-20 ${currentSlider === inx ? 'border-2 border-black p-px' : ''} box-content cursor-pointer rounded-md md:rounded-lg`}
                            alt={slide.title}
                        />
                    ))}
                </div>
            </>
        </CP>
    );
};
