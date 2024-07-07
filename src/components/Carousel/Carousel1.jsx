'use client';
import CP from '@/ui/CP';
import Image from 'next/image';
import { useCallback, useEffect, useState } from 'react';

const code = `import { useCallback, useEffect, useState } from "react";

export const Carousel = () => {
  const [currentSlider, setCurrentSlider] = useState(0);
  const carouselImages = ['https://source.unsplash.com/1200x540/?nature','https://source.unsplash.com/1200x540/?hill','https://source.unsplash.com/1200x540/?mountain','https://source.unsplash.com/1200x540/?river','https://source.unsplash.com/1200x540/?sea'];
  const prevSlider = () => setCurrentSlider((currentSlider) => currentSlider === 0 ? carouselImages.length - 1 : currentSlider - 1);
  const nextSlider = useCallback(() => setCurrentSlider((currentSlider) => currentSlider === carouselImages.length - 1 ? 0 : currentSlider + 1), [carouselImages.length]);

  // if you don't want to change the slider automatically then you can just remove the useEffect
  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlider();
    }, 3000);
    return () => clearInterval(intervalId);
  }, [nextSlider]);

  return (
      <div className="h-60 w-full md:h-[470px] lg:h-[540px] relative overflow-hidden">
          {/* arrow left */}
          <button onClick={prevSlider} className="absolute top-1/2 left-3 z-50 flex justify-center items-center bg-white rounded-full w-6 h-6 md:w-8 md:h-8">
              <svg className="icon h-4 w-4 fill-black/50 md:h-6 md:w-6" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="M685.248 104.704a64 64 0 010 90.496L368.448 512l316.8 316.8a64 64 0 01-90.496 90.496L232.704 557.248a64 64 0 010-90.496l362.048-362.048a64 64 0 0190.496 0z"></path></svg>          
          </button>
          {/* arrow right */}
          <button onClick={nextSlider} className="absolute top-1/2 z-50 right-3  flex justify-center items-center bg-white rounded-full w-6 h-6 md:w-8 md:h-8">
              <svg className="icon h-4 w-4 fill-black/50 md:h-6 md:w-6" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" transform="rotate(180)"><path d="M685.248 104.704a64 64 0 010 90.496L368.448 512l316.8 316.8a64 64 0 01-90.496 90.496L232.704 557.248a64 64 0 010-90.496l362.048-362.048a64 64 0 0190.496 0z"></path></svg>
          </button>
          {/* dots */}
          <div className="flex justify-center items-center rounded-full z-50 absolute bottom-4 w-full gap-1">
            {carouselImages.map((img, idx) => (
              <button key={\`\${img}_\${idx}\`} onClick={() => setCurrentSlider(idx)} className={\`rounded-full duration-500 bg-white \${currentSlider === idx ? "w-8" : "wz-2"} h-2\`}></button>
            ))}
          </div>
          {/* Carousel container */}
          <div className="ease-linear duration-500 flex transform-gpu" style={{ transform: \`translateX(-\${currentSlider * 100}%)\`}}>
            {/* sliders */}
            {carouselImages.map((slide, idx) => (
              <img key={slide} src={slide} className="min-w-full h-60 bg-black/20 sm:h-96 md:h-[540px] object-cover" alt={\`Slider - \${idx + 1}\`}/>
            ))}
          </div>
      </div>
  )
};
`;
export const Carousel1 = () => {
    const [currentSlider, setCurrentSlider] = useState(0);

    const carouselImages = [
        'https://source.unsplash.com/1200x540/?nature',
        'https://source.unsplash.com/1200x540/?hill',
        'https://source.unsplash.com/1200x540/?mountain',
        'https://source.unsplash.com/1200x540/?river',
        'https://source.unsplash.com/1200x540/?sea'
    ];

    const prevSlider = () => setCurrentSlider((currentSlider) => (currentSlider === 0 ? carouselImages.length - 1 : currentSlider - 1));

    const nextSlider = useCallback(() => {
        setCurrentSlider((currentSlider) => (currentSlider === carouselImages.length - 1 ? 0 : currentSlider + 1));
    }, [carouselImages.length]);
    // if you don't want to change the slider automatically then you can just remove the useEffect
    useEffect(() => {
        const intervalId = setInterval(() => {
            nextSlider();
        }, 3000);

        return () => {
            clearInterval(intervalId);
        };
    }, [nextSlider, currentSlider]);
    return (
        <CP code={code}>
            <div className="relative h-60 w-full min-w-80 overflow-hidden md:h-[470px] lg:h-[540px]">
                {/* arrow left */}
                <button onClick={prevSlider} className="absolute left-3 top-1/2 z-50 flex h-6 w-6 items-center justify-center rounded-full bg-white/70 hover:bg-white/90 md:h-8 md:w-8">
                    <svg className="icon h-4 w-4 fill-black/50 md:h-6 md:w-6" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
                        <path d="M685.248 104.704a64 64 0 010 90.496L368.448 512l316.8 316.8a64 64 0 01-90.496 90.496L232.704 557.248a64 64 0 010-90.496l362.048-362.048a64 64 0 0190.496 0z"></path>
                    </svg>
                </button>
                {/* arrow right */}
                <button onClick={nextSlider} className="absolute right-3 top-1/2 z-50 flex h-6 w-6 items-center justify-center rounded-full bg-white/70 hover:bg-white/90 md:h-8 md:w-8">
                    <svg className="icon h-4 w-4 fill-black/50 md:h-6 md:w-6" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" transform="rotate(180)">
                        <path d="M685.248 104.704a64 64 0 010 90.496L368.448 512l316.8 316.8a64 64 0 01-90.496 90.496L232.704 557.248a64 64 0 010-90.496l362.048-362.048a64 64 0 0190.496 0z"></path>
                    </svg>
                </button>
                {/* dots */}
                <div className="absolute bottom-4 z-50 flex w-full items-center justify-center gap-1 rounded-full">
                    {carouselImages.map((img, idx) => (
                        <button
                            key={idx}
                            onClick={() => {
                                setCurrentSlider(idx);
                            }}
                            className={`rounded-full bg-white duration-500 ${currentSlider === idx ? 'w-8' : 'w-2'} h-2`}
                        ></button>
                    ))}
                </div>
                {/* Carousel container */}
                <div
                    className="relative flex transform-gpu duration-500 ease-linear"
                    style={{
                        transform: `translateX(-${currentSlider * 100}%)`
                    }}
                >
                    {/* sliders */}
                    {carouselImages.map((img, idx) => (
                        <Image key={`${img}_${idx}`} width={1200} height={540} src={img} className="h-60 min-w-full bg-black/20 object-cover sm:h-96 md:h-[540px]" alt={`Slider - ${idx + 1}`} />
                    ))}
                </div>
            </div>
        </CP>
    );
};
