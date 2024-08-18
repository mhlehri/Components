'use client';
import { useCallback, useEffect, useState } from 'react';
import CP from '@/ui/CP';
import Image from 'next/image';

const code = `const Carousel9 = () => {
    const array = [{ name: 'John Doe', designation: 'Student', testimonialDescription:'Being a student, Taskiee has been my go-to tool for organizing assignments and study schedules. The visual timeline and reminder features have helped me stay on top of my coursework',keyWord: 'Child'}, { name: 'Jane Doe', designation: 'Freelancer', testimonialDescription: 'Taskiee has been a game-changer for my freelance work. It allows me to effortlessly prioritize tasks, set realistic deadlines, and maintain a healthy work-life balance', keyWord: 'Gentlewoman'},{ name: 'Shiyam Sarker', designation: 'Entrepreneur', testimonialDescription: "Taskiee's collaborative features have been instrumental in streamlining tasks for my startup. The ability to share projects and track progress with the team has enhanced our efficiency.", keyWord: 'Gentleman'},{ name: 'Bob Smith', designation: 'Creative Professional', testimonialDescription: 'As a creative professional, Taskiee has simplified my project management. The clean design and goal tracking feature keep me inspired and organized throughout the creative process.', keyWord: 'Child'},{ name: 'Eva Williams', designation: 'Remote Worker', testimonialDescription: "Taskiee's mobile app has made remote work a breeze for me. I can seamlessly manage tasks on the go, ensuring that I stay productive regardless of my location.", keyWord: 'Individual'},{ name: 'Chris Brown', designation: 'Parent', testimonialDescription: 'Managing family schedules is no easy task, but Taskiee has made it seamless. From school activities to household chores, Taskiee keeps our family organized and on track.', keyWord: 'Boy'},{ name: 'Olivia Davis', designation: 'Health Professional', testimonialDescription: 'In the healthcare field, where time is crucial, Taskiee has become my ally. Its time tracking feature has allowed me to optimize patient care and manage administrative tasks efficiently.', keyWord: 'Girl'},{ name: 'Liam Wilson', designation: 'Researcher', testimonialDescription: "Taskiee's analytics feature has proven invaluable in my research endeavors. It provides insightful data on my productivity patterns, helping me refine my workflow and achieve research goals", keyWord: 'Toddler'}];

    const [currentSlider, setCurrentSlider] = useState(0);
    // The slider images array
    const prevSlider = () => setCurrentSlider((currentSlider) => (currentSlider === 0 ? array.length - 2 : currentSlider - 1));
    const nextSlider = () => setCurrentSlider((currentSlider) => (currentSlider === array.length - 2 ? 0 : currentSlider + 1));
    // if you don't want to change the slider automatically then you can just remove the useEffect
    useEffect(() => {
        const intervalId = setInterval(() => {
            nextSlider();
        }, 3000);
        return () => {
            clearInterval(intervalId);
        };
    }, [currentSlider]);

    const isSmallScreen = window.innerWidth <= 768;
    return (
        <div className="max-w-full min-w-[350px]  mx-auto h-[400px] flex flex-row items-center overflow-hidden gap-5 lg:gap-10 px-8 md:px-16 lg:px-24">
            <div className="relative overflow-hidden">
                <div className="absolute w-full h-full flex items-center justify-between z-50 px-5">
                    {/* arrow left */}
                    <button onClick={prevSlider} className="flex justify-center items-center hover:bg-white/30 rounded-full w-6 h-6 md:w-8 md:h-8">
                        <svg viewBox="0 0 1024 1024" className="w-4 h-4 md:w-6 md:h-6 icon" xmlns="http://www.w3.org/2000/svg" fill="black"> <g strokeWidth="0"></g> <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g> <g id="SVGRepo_iconCarrier"><path fill="black" d="M685.248 104.704a64 64 0 010 90.496L368.448 512l316.8 316.8a64 64 0 01-90.496 90.496L232.704 557.248a64 64 0 010-90.496l362.048-362.048a64 64 0 0190.496 0z"></path></g>
                        </svg>
                    </button>
                    {/* arrow right */}
                    <button onClick={nextSlider} className="flex justify-center items-center hover:bg-white/30 rounded-full w-6 h-6 md:w-8 md:h-8">
                        <svg viewBox="0 0 1024 1024" className="w-4 h-4 md:w-6 md:h-6 icon" xmlns="http://www.w3.org/2000/svg" fill="black" transform="rotate(180)"> <g strokeWidth="0"></g> <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g> <g id="SVGRepo_iconCarrier"> <path fill="black" d="M685.248 104.704a64 64 0 010 90.496L368.448 512l316.8 316.8a64 64 0 01-90.496 90.496L232.704 557.248a64 64 0 010-90.496l362.048-362.048a64 64 0 0190.496 0z" ></path></g>
                        </svg>
                    </button>
                </div>
                {/* slider container */}
                <div
                    className="ease-linear duration-300 flex"
                    style={{transform: \`translateX(-\${currentSlider * (isSmallScreen ? 100 : 50)}%)\`}}>
                    {/* sliders */}
                    {array.map((each, idx) => (
                        <div key={idx} className="p-4 min-w-full md:min-w-[50%]">
                            <div className="h-full p-8 rounded shadow-[0px_4px_12px_rgba(0,0,0,0.1)]">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="block w-5 h-5 text-slate-800 mb-4" viewBox="0 0 975.036 975.036">
                                    <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                                </svg>
                                <p className="leading-relaxed mb-6 text-gray-500">{each?.testimonialDescription}</p>
                                <a className="inline-flex items-center">
                                    <img className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center" src={\`https://source.unsplash.com/200x200/?\${each.keyWord}\`} alt="carousel navigate ui"  />
                                    <span className="flex-grow flex flex-col pl-4">
                                        <span className="title-font font-medium text-gray-900">{each.name}</span>
                                        <span className="text-gray-500 text-sm">{each?.designation}</span>
                                    </span>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
export default Carousel9
`;

export const Carousel9 = () => {
    const array = [
        {
            name: 'John Doe',
            designation: 'Student',
            testimonialDescription:
                'Being a student, Taskiee has been my go-to tool for organizing assignments and study schedules. The visual timeline and reminder features have helped me stay on top of my coursework',
            keyWord: 'Child'
        },
        {
            name: 'Jane Doe',
            designation: 'Freelancer',
            testimonialDescription:
                'Taskiee has been a game-changer for my freelance work. It allows me to effortlessly prioritize tasks, set realistic deadlines, and maintain a healthy work-life balance',
            keyWord: 'Gentlewoman'
        },
        {
            name: 'Shiyam Sarker',
            designation: 'Entrepreneur',
            testimonialDescription:
                "Taskiee's collaborative features have been instrumental in streamlining tasks for my startup. The ability to share projects and track progress with the team has enhanced our efficiency.",
            keyWord: 'Gentleman'
        },
        {
            name: 'Bob Smith',
            designation: 'Creative Professional',
            testimonialDescription:
                'As a creative professional, Taskiee has simplified my project management. The clean design and goal tracking feature keep me inspired and organized throughout the creative process.',
            keyWord: 'Child'
        },
        {
            name: 'Eva Williams',
            designation: 'Remote Worker',
            testimonialDescription: "Taskiee's mobile app has made remote work a breeze for me. I can seamlessly manage tasks on the go, ensuring that I stay productive regardless of my location.",
            keyWord: 'Individual'
        },
        {
            name: 'Chris Brown',
            designation: 'Parent',
            testimonialDescription:
                'Managing family schedules is no easy task, but Taskiee has made it seamless. From school activities to household chores, Taskiee keeps our family organized and on track.',
            keyWord: 'Boy'
        },
        {
            name: 'Olivia Davis',
            designation: 'Health Professional',
            testimonialDescription:
                'In the healthcare field, where time is crucial, Taskiee has become my ally. Its time tracking feature has allowed me to optimize patient care and manage administrative tasks efficiently.',
            keyWord: 'Girl'
        },
        {
            name: 'Liam Wilson',
            designation: 'Researcher',
            testimonialDescription:
                "Taskiee's analytics feature has proven invaluable in my research endeavors. It provides insightful data on my productivity patterns, helping me refine my workflow and achieve research goals",
            keyWord: 'Toddler'
        }
    ];

    const [currentSlider, setCurrentSlider] = useState(0);
    // The slider images array
    const prevSlider = () => setCurrentSlider((currentSlider) => (currentSlider === 0 ? array.length - 2 : currentSlider - 1));
    const nextSlider = useCallback(() => {
        setCurrentSlider((currentSlider) => (currentSlider === array.length - 2 ? 0 : currentSlider + 1));
    }, [array.length]);
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
            <div className="mx-auto flex h-[400px] flex-row items-center gap-5 overflow-hidden lg:gap-10">
                <div className="relative overflow-hidden">
                    <div className="absolute z-50 flex h-full w-full items-center justify-between px-5">
                        {/* arrow left */}
                        <button onClick={prevSlider} className="flex h-6 w-6 items-center justify-center rounded-full duration-300 hover:bg-black/10 md:h-8 md:w-8">
                            <svg viewBox="0 0 1024 1024" className="icon h-4 w-4 md:h-6 md:w-6" xmlns="http://www.w3.org/2000/svg" fill="black">
                                <g strokeWidth="0"></g>
                                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                                <g id="SVGRepo_iconCarrier">
                                    <path
                                        fill="black"
                                        d="M685.248 104.704a64 64 0 010 90.496L368.448 512l316.8 316.8a64 64 0 01-90.496 90.496L232.704 557.248a64 64 0 010-90.496l362.048-362.048a64 64 0 0190.496 0z"
                                    ></path>
                                </g>
                            </svg>
                        </button>
                        {/* arrow right */}
                        <button onClick={nextSlider} className="flex h-6 w-6 items-center justify-center rounded-full duration-300 hover:bg-black/10 md:h-8 md:w-8">
                            <svg viewBox="0 0 1024 1024" className="icon h-4 w-4 md:h-6 md:w-6" xmlns="http://www.w3.org/2000/svg" fill="black" transform="rotate(180)">
                                <g strokeWidth="0"></g>
                                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                                <g id="SVGRepo_iconCarrier">
                                    <path
                                        fill="black"
                                        d="M685.248 104.704a64 64 0 010 90.496L368.448 512l316.8 316.8a64 64 0 01-90.496 90.496L232.704 557.248a64 64 0 010-90.496l362.048-362.048a64 64 0 0190.496 0z"
                                    ></path>
                                </g>
                            </svg>
                        </button>
                    </div>
                    {/* slider container */}
                    <div
                        className="flex duration-300 ease-linear"
                        style={{
                            transform: `translateX(-${100}%)`
                        }}
                    >
                        {/* sliders */}
                        {array.map((each, idx) => (
                            <div key={idx} className="min-w-full p-4 md:min-w-[50%]">
                                <div className="h-full rounded p-8 shadow-[0px_4px_12px_rgba(0,0,0,0.1)]">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="mb-4 block h-5 w-5 text-slate-800" viewBox="0 0 975.036 975.036">
                                        <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                                    </svg>
                                    <p className="mb-6 leading-relaxed text-gray-500">{each?.testimonialDescription}</p>
                                    <a className="inline-flex items-center">
                                        <Image
                                            width={48}
                                            height={48}
                                            alt="carousel navigate ui"
                                            src={`https://source.unsplash.com/200x200/?${each.keyWord}`}
                                            className="h-12 w-12 flex-shrink-0 rounded-full object-cover object-center"
                                        />
                                        <span className="flex flex-grow flex-col pl-4">
                                            <span className="title-font font-medium text-gray-900">{each.name}</span>
                                            <span className="text-sm text-gray-500">{each?.designation}</span>
                                        </span>
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </CP>
    );
};
