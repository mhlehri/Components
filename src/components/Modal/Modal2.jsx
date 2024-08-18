'use client';
import { useState } from 'react';
import CP from '@/ui/CP';

const code = `import { useState } from 'react';

export const Modal2 = () => {
    const [openModal, setOpenModal] = useState(false);
    return (
      <div>
        <button onClick={() => setOpenModal(true)} className="rounded-md bg-zinc-500 px-5 py-[6px] text-white">Open\</button>
        <div className={\`fixed z-[100] flex items-center justify-center \${openModal ? 'opacity-1 visible' : 'invisible opacity-0'} inset-0 bg-black/20 backdrop-blur-sm duration-100\`}>
          <div className={\`absolute max-w-md rounded-lg bg-white p-3 pb-5 text-center drop-shadow-2xl dark:bg-gray-800 dark:text-white \${openModal ? 'scale-1 opacity-1 duration-300' : 'scale-0 opacity-0 duration-150'} \`}>
            <svg onClick={() => setOpenModal(false)} className="mx-auto mr-0 w-8 cursor-pointer fill-black dark:fill-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g strokeWidth="0"></g><g strokeLinecap="round" strokeLinejoin="round"></g><g><path d="M6.99486 7.00636C6.60433 7.39689 6.60433 8.03005 6.99486 8.42058L10.58 12.0057L6.99486 15.5909C6.60433 15.9814 6.60433 16.6146 6.99486 17.0051C7.38538 17.3956 8.01855 17.3956 8.40907 17.0051L11.9942 13.4199L15.5794 17.0051C15.9699 17.3956 16.6031 17.3956 16.9936 17.0051C17.3841 16.6146 17.3841 15.9814 16.9936 15.5909L13.4084 12.0057L16.9936 8.42059C17.3841 8.03007 17.3841 7.3969 16.9936 7.00638C16.603 6.61585 15.9699 6.61585 15.5794 7.00638L11.9942 10.5915L8.40907 7.00636C8.01855 6.61584 7.38538 6.61584 6.99486 7.00636Z"></path></g></svg>
            <h1 className="mb-2 text-2xl font-semibold">Welcome to NavigateUI!</h1>
            <p className="px-1 mb-3 text-sm opacity-80">Elevate your React projects with beautifully crafted components designed for TailwindCSS.</p>
            <button onClick={() => setOpenModal(false)} className="rounded-md bg-indigo-600 hover:bg-indigo-700 px-6 py-1.5 text-white">Ok</button>
          </div>
        </div>
      </div>
    )}`;

const Modal2 = () => {
    const [openModal, setOpenModal] = useState(false);
    return (
        <CP code={code}>
            <div className="mx-auto w-fit">
                <button onClick={() => setOpenModal(true)} className="rounded-md border border-zinc-500 px-5 py-[6px] text-zinc-500">
                    Click
                </button>
                <div
                    className={`fixed z-[100] flex items-center justify-center ${openModal ? 'visible opacity-100' : 'invisible opacity-0'} inset-0 bg-black/20 backdrop-blur-sm duration-100 dark:bg-transparent`}
                >
                    <div
                        className={`absolute max-w-md rounded-lg bg-white p-3 pb-8 text-center drop-shadow-2xl dark:bg-gray-800 dark:text-white ${openModal ? 'scale-1 opacity-1 duration-300' : 'scale-0 opacity-0 duration-150'} `}
                    >
                        <svg
                            onClick={() => setOpenModal(false)}
                            className="mx-auto mr-0 w-8 cursor-pointer fill-black dark:fill-white"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M6.99486 7.00636C6.60433 7.39689 6.60433 8.03005 6.99486 8.42058L10.58 12.0057L6.99486 15.5909C6.60433 15.9814 6.60433 16.6146 6.99486 17.0051C7.38538 17.3956 8.01855 17.3956 8.40907 17.0051L11.9942 13.4199L15.5794 17.0051C15.9699 17.3956 16.6031 17.3956 16.9936 17.0051C17.3841 16.6146 17.3841 15.9814 16.9936 15.5909L13.4084 12.0057L16.9936 8.42059C17.3841 8.03007 17.3841 7.3969 16.9936 7.00638C16.603 6.61585 15.9699 6.61585 15.5794 7.00638L11.9942 10.5915L8.40907 7.00636C8.01855 6.61584 7.38538 6.61584 6.99486 7.00636Z"></path>
                        </svg>
                        <h1 className="mb-2 text-2xl font-semibold">Welcome to NavigateUI!</h1>
                        <p className="mb-4 px-1 text-sm opacity-80">Elevate your React projects with beautifully crafted components designed for TailwindCSS.</p>
                        <button onClick={() => setOpenModal(false)} className="rounded-md bg-indigo-600 px-6 py-1.5 text-white hover:bg-indigo-700">
                            Ok
                        </button>
                    </div>
                </div>
            </div>
        </CP>
    );
};

export default Modal2;
