'use client';
import CP from '@/ui/CP';
import { useState } from 'react';

const code = `import { useState } from "react";

export default function BasicAccordion() {
  const [isOpen, setIsOpen] = useState(null);
  const dataArr = [{title: "How do I create an account?", description: 'To create an account, click on the "Sign Up" button and fill out the required information. Once done, you can enjoy the benefits of being a registered member.',}, {title: "What is your return policy?", description:"Our return policy allows you to return items within 30 days of purchase. Please visit our returns page for detailed instructions and to initiate a return.",}, {title: "Can I change my shipping address?", description:"Yes, you can change your shipping address before your order is shipped. Go to your account settings and update the shipping information accordingly.",}, {title: "Are there any discounts for loyal customers?", description: "We appreciate our loyal customers! Stay tuned for exclusive discounts, promotions, and special offers available to members of our loyalty program.",},];
  const toggle = (idx) => {
    setIsOpen((prevIdx) => (prevIdx === idx ? null : idx))
  };

    return (
        <div className="mx-auto max-w-[500px] bg-white px-2 *:mix-blend-difference dark:bg-inherit">
            {dataArr.map((PerAccordion, idx) => (
                <div key={idx} className="border-b border-gray-500/50 py-3">
                    <button onClick={() => toggle(idx)} className="flex h-full w-full justify-between font-medium outline-none text-white">
                        <span>{PerAccordion.title}</span>
                        <span className="rounded-full p-2">
                            <svg className="ml-8 size-3 shrink-0 fill-white" xmlns="http://www.w3.org/2000/svg">
                                <rect y="5" width="12" height="2" rx="1" className={\`origin-center transform transition duration-200 ease-out \${isOpen === idx && '!rotate-180'}\`} />
                                <rect y="5" width="12" height="2" rx="1" className={\`origin-center rotate-90 transform transition duration-200 ease-out \${isOpen === idx && '!rotate-180'}\`} />
                            </svg>
                        </span>
                    </button>
                    <div className={\`grid overflow-hidden text-zinc-400 transition-all duration-300 ease-in-out \${isOpen === idx ? 'grid-rows-[1fr] pb-1 pt-3 opacity-100' : 'grid-rows-[0fr] opacity-0'}\`}>
                        <div className="overflow-hidden pr-4 text-sm">{PerAccordion.description}</div>
                    </div>
                </div>
            ))}
        </div>
    );
}`;
export default function BasicAccordion(i) {
    const [isOpen, setIsOpen] = useState(null);
    const dataArr = [
        {
            title: 'How do I create an account?',
            description: 'To create an account, click on the "Sign Up" button and fill out the required information. Once done, you can enjoy the benefits of being a registered member.'
        },
        {
            title: 'What is your return policy?',
            description: 'Our return policy allows you to return items within 30 days of purchase. Please visit our returns page for detailed instructions and to initiate a return.'
        },
        {
            title: 'Can I change my shipping address?',
            description: 'Yes, you can change your shipping address before your order is shipped. Go to your account settings and update the shipping information accordingly.'
        },
        {
            title: 'Are there any discounts for loyal customers?',
            description: 'We appreciate our loyal customers! Stay tuned for exclusive discounts, promotions, and special offers available to members of our loyalty program.'
        }
    ];

    const toggle = (idx) => {
        setIsOpen((prevIdx) => (prevIdx === idx ? null : idx));
    };

    return (
        <CP code={code} i={i}>
            <div className="mx-auto max-w-[500px] bg-white px-2 *:mix-blend-difference dark:bg-inherit">
                {dataArr.map((PerAccordion, idx) => (
                    <div key={idx} className="border-b border-gray-500/50 py-3">
                        <button onClick={() => toggle(idx)} className="flex h-full w-full justify-between font-medium text-white outline-none">
                            <span>{PerAccordion.title}</span>
                            <span className="rounded-full">
                                <svg className="ml-8 size-3 shrink-0 fill-white" xmlns="http://www.w3.org/2000/svg">
                                    <rect y="5" width="12" height="2" rx="1" className={`origin-center transform transition duration-200 ease-out ${isOpen === idx && '!rotate-180'}`} />
                                    <rect y="5" width="12" height="2" rx="1" className={`origin-center rotate-90 transform transition duration-200 ease-out ${isOpen === idx && '!rotate-180'}`} />
                                </svg>
                            </span>
                        </button>
                        <div
                            className={`grid overflow-hidden text-zinc-400 transition-all duration-300 ease-in-out ${isOpen === idx ? 'grid-rows-[1fr] pb-1 pt-3 opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
                        >
                            <div className="overflow-hidden pr-4 text-sm">{PerAccordion.description}</div>
                        </div>
                    </div>
                ))}
            </div>
        </CP>
    );
}
