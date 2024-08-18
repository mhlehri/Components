'use client';
import { useCallback, useEffect, useState } from 'react';
import CP from '@/ui/CP';
import Image from 'next/image';

const code = `
import { useEffect, useState } from 'react';

export const Carousel7 = () => {
  const [currentSlider, setCurrentSlider] = useState(0);
  // The slider images array
  const sliderImages = ['https://source.unsplash.com/500x500/?nature/?1','https://source.unsplash.com/500x500/?nature/?3','https://source.unsplash.com/500x500/?nature/?5','https://source.unsplash.com/500x500/?nature/?2','https://source.unsplash.com/500x500/?nature/?4'];
  const prevSlider = () => {
    setCurrentSlider((currentSlider) => (currentSlider === 0 ? sliderImages.length - 1 : currentSlider - 1));
  };
  const nextSlider = useCallback(() => {
    setCurrentSlider((currentSlider) => (currentSlider === sliderImages.length - 1 ? 0 : currentSlider + 1));
  }, [sliderImages.length]);

  // if you don't want to change the slider automatically then you can just remove the useEffect
  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlider();
    }, 3000);
    return () => clearInterval(intervalId);
  }, [nextSlider, currentSlider]);

    return (
      <div className="relative mx-auto w-fit">
        {/* arrow left */}
        <button onClick={prevSlider} className="absolute -left-6 top-1/2 flex h-6 w-6 items-center justify-center md:h-8 md:w-8"><svg viewBox="0 0 1024 1024" className="icon h-4 w-4 md:h-6 md:w-6" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path  d="M685.248 104.704a64 64 0 010 90.496L368.448 512l316.8 316.8a64 64 0 01-90.496 90.496L232.704 557.248a64 64 0 010-90.496l362.048-362.048a64 64 0 0190.496 0z"></path></g></svg></button>
        {/* arrow right */}<button onClick={nextSlider} className="absolute -right-6 top-1/2 flex h-6 w-6 items-center justify-center md:h-8 md:w-8"><svg viewBox="0 0 1024 1024" className="icon h-4 w-4 md:h-6 md:w-6" xmlns="http://www.w3.org/2000/svg" fill="#000000" transform="rotate(180)"><g strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path  d="M685.248 104.704a64 64 0 010 90.496L368.448 512l316.8 316.8a64 64 0 01-90.496 90.496L232.704 557.248a64 64 0 010-90.496l362.048-362.048a64 64 0 0190.496 0z"></path></g></svg></button>
        <div className="w-full max-w-72 overflow-hidden">
          {/* slider container */}
          <div className="flex transform-gpu duration-500 ease-linear" style={{ transform: \`translateX(-\${currentSlider * 100}%)\` }}>
            {/* sliders */}
            {sliderImages.map((slide, inx) => (
              <img width={500} height={500} key={inx} src={slide} className="mx-[2.5%] h-full min-w-[95%] rounded-2xl border-8 border-transparent object-cover" alt={\`Slider - \${inx + 1}\`} />
            ))}
          </div>
        </div>
      </div>
    );
};

`;

export const Carousel7 = () => {
    const [currentSlider, setCurrentSlider] = useState(0);
    // The slider images array
    const sliderImages = [
        'https://images.unsplash.com/photo-1458408990864-27997f8c2984?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1561131506-3c48296e2c20?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1517271710308-aa99f1519490?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1506610654-064fbba4780c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1507780502196-cc5495d283ce?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    ];
    const prevSlider = () => {
        setCurrentSlider((currentSlider) => (currentSlider === 0 ? sliderImages.length - 1 : currentSlider - 1));
    };
    const nextSlider = useCallback(() => {
        setCurrentSlider((currentSlider) => (currentSlider === sliderImages.length - 1 ? 0 : currentSlider + 1));
    }, [sliderImages.length]);

    return (
        <CP code={code}>
            <div className="relative mx-auto size-72">
                {/* arrow left */}
                <button onClick={prevSlider} className="absolute -left-6 top-1/2 flex h-6 w-6 items-center justify-center md:h-8 md:w-8">
                    <svg viewBox="0 0 1024 1024" className="icon h-4 w-4 fill-zinc-700 md:h-6 md:w-6" xmlns="http://www.w3.org/2000/svg">
                        <path d="M685.248 104.704a64 64 0 010 90.496L368.448 512l316.8 316.8a64 64 0 01-90.496 90.496L232.704 557.248a64 64 0 010-90.496l362.048-362.048a64 64 0 0190.496 0z"></path>
                    </svg>
                </button>
                {/* arrow right */}
                <button onClick={nextSlider} className="absolute -right-6 top-1/2 flex h-6 w-6 items-center justify-center md:h-8 md:w-8">
                    <svg viewBox="0 0 1024 1024" className="icon h-4 w-4 fill-zinc-700 md:h-6 md:w-6" xmlns="http://www.w3.org/2000/svg" transform="rotate(180)">
                        <path d="M685.248 104.704a64 64 0 010 90.496L368.448 512l316.8 316.8a64 64 0 01-90.496 90.496L232.704 557.248a64 64 0 010-90.496l362.048-362.048a64 64 0 0190.496 0z"></path>
                    </svg>
                </button>
                <div className="w-full overflow-hidden">
                    {/* slider container */}
                    <div className="flex transform-gpu duration-500 ease-linear" style={{ transform: `translateX(-${currentSlider * 100}%)` }}>
                        {sliderImages.map((slide, inx) => (
                            <div className="size-72 min-h-full min-w-full p-2" key={inx}>
                                <Image width={300} height={300} src={slide} className="size-full rounded-2xl" alt={`Slider - ${inx + 1}`} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </CP>
    );
};
