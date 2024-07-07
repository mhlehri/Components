'use client';

import CP from '@/ui/CP';
import React from 'react';
import { useState } from 'react';

const codeStr = `
import { useState } from 'react';

export const SquareCardPagination = () => {
    const [pageNumber,setPageNumber] = useState(0)
    const page = 5 // Adjust the page numbers the way you want
    const updatePageNumber = (num)=>{
        if((num > (page - 1)) || (0 > num)){ return setPageNumber(0) }
        setPageNumber(num)
    }
    return (
     <div className='flex justify-center items-center gap-3 bg-white p-2 shadow-lg rounded-md w-fit mx-auto select-none'>
        {/* left arrow */}
        <div onClick={()=>{updatePageNumber(pageNumber - 1)}} className=' hover:scale-110 scale-100 transition-all duration-200 cursor-pointer bg-sky-100 px-1 py-1 rounded-md'>
          <svg className='w-8' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth={0} /><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" /><g id="SVGRepo_iconCarrier"> <path d="M15 7L10 12L15 17" stroke="#0284C7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /> </g></svg>
        </div> 
        <div className='flex justify-center items-center gap-2 '>
                 {[...Array(page).keys()].map((item,ind) => <div onClick={()=>{setPageNumber(item)}} className={\`cursor-pointer hover:scale-110 text-sm scale-100 transition-all duration-200 px-3 \${pageNumber === item ? 'bg-sky-500 text-white':'bg-white'} border-sky-300  font-semibold text-gray-700   py-[6px] rounded-md\`} key={item}>
                {item + 1}
              </div>)}
        </div>
        {/* right arrow */}
        <div  onClick={()=>{updatePageNumber(pageNumber + 1)}} className=' hover:scale-110 scale-100 transition-all duration-200 cursor-pointer bg-sky-100 px-1 py-1 rounded-md'>
            <svg className='w-7' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M10 7L15 12L10 17" stroke="#0284C7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
        </div>
    </div>
    );
};

`;

const SquareCardPagination = () => {
    const [pageNumber, setPageNumber] = useState(0);
    const page = 5; // Adjust the page numbers the way you want
    const updatePageNumber = (num) => {
        if (num > page - 1 || 0 > num) {
            return setPageNumber(0);
        }
        setPageNumber(num);
    };
    return (
        <CP code={codeStr}>
            <div className="mx-auto flex w-fit select-none items-center justify-center gap-3 rounded-md bg-white p-2 shadow-lg">
                {/* left arrow */}
                <div
                    onClick={() => {
                        updatePageNumber(pageNumber - 1);
                    }}
                    className="scale-100 cursor-pointer rounded-md bg-sky-100 px-1 py-1 transition-all duration-200 hover:scale-110"
                >
                    <svg className="w-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15 7L10 12L15 17" stroke="#0284C7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />{' '}
                    </svg>
                </div>
                <div className="flex items-center justify-center gap-2">
                    {[...Array(page).keys()].map((item, ind) => (
                        <div
                            onClick={() => {
                                setPageNumber(item);
                            }}
                            className={`scale-100 cursor-pointer px-3 text-sm transition-all duration-200 hover:scale-110 ${pageNumber === item ? 'bg-sky-500 text-white' : 'bg-white'} rounded-md border-sky-300 py-[6px] font-semibold text-gray-700`}
                            key={item}
                        >
                            {item + 1}
                        </div>
                    ))}
                </div>
                {/* right arrow */}
                <div
                    onClick={() => {
                        updatePageNumber(pageNumber + 1);
                    }}
                    className="scale-100 cursor-pointer rounded-md bg-sky-100 px-1 py-1 transition-all duration-200 hover:scale-110"
                >
                    <svg className="w-7" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 7L15 12L10 17" stroke="#0284C7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>{' '}
                    </svg>
                </div>
            </div>
        </CP>
    );
};

export default SquareCardPagination;
