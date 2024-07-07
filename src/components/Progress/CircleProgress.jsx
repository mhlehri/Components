'use client';
import CP from '@/ui/CP';
import { useEffect, useState } from 'react';

const code = `
import { useEffect, useState } from 'react';

export default function CircleProgress() {
    const [progressNumber, setProgressNumber] = useState(0);

    const number = 2 * Math.PI * 40; // Calculated for full circle (2 * pi * r)
    useEffect(() => {
        if (progressNumber < number) {
            const timeout = setTimeout(() => {
                setProgressNumber(progressNumber + 1);
            }, 300); // Adjust the interval as per your requirement
            return () => clearTimeout(timeout); // Cleanup function to clear the timeout
        }
    }, [progressNumber, number]);

    return (
        <div className="h-40text-black relative w-40 dark:text-white">
            <svg className="h-full w-full" viewBox="0 0 100 100">
                <circle className="stroke-current text-gray-200" strokeWidth={5} cx={50} cy={50} r={40} fill="transparent" />
                <circle
                    style={{
                        strokeDasharray: number,
                        strokeDashoffset: \`\${number - progressNumber}\`,
                        transition: 'stroke-dashoffset 0.35s',
                        transform: 'rotate(-90deg)',
                        transformOrigin: '50% 50%'
                    }}
                    className="progress-ring__circle  stroke-current text-indigo-500"
                    strokeWidth={5}
                    strokeLinecap="round"
                    cx={50}
                    cy={50}
                    r={40}
                    fill="transparent"
                    strokeDashoffset={number}
                />
                <text x={50} y={50} fontFamily="lato" fontSize={10} textAnchor="middle" alignmentBaseline="middle">
                    {Math.floor((progressNumber * 100) / number)}%
                </text>
            </svg>
        </div>
    );
}

`;

export default function CircleProgress(i) {
    const [progressNumber, setProgressNumber] = useState(0);

    const number = 2 * Math.PI * 40; // Calculated for full circle (2 * pi * r)
    useEffect(() => {
        if (progressNumber < number) {
            const timeout = setTimeout(() => {
                setProgressNumber(progressNumber + 1);
            }, 300); // Adjust the interval as per your requirement
            return () => clearTimeout(timeout); // Cleanup function to clear the timeout
        }
    }, [progressNumber, number]);

    return (
        <CP code={code} i={i}>
            <div className="h-40text-black relative w-40 dark:text-white">
                <svg className="h-full w-full" viewBox="0 0 100 100">
                    <circle className="stroke-current text-gray-200" strokeWidth={5} cx={50} cy={50} r={40} fill="transparent" />
                    <circle
                        style={{
                            strokeDasharray: number,
                            strokeDashoffset: `${number - progressNumber}`,
                            transition: 'stroke-dashoffset 0.35s',
                            transform: 'rotate(-90deg)',
                            transformOrigin: '50% 50%'
                        }}
                        className="progress-ring__circle  stroke-current text-indigo-500"
                        strokeWidth={5}
                        strokeLinecap="round"
                        cx={50}
                        cy={50}
                        r={40}
                        fill="transparent"
                        strokeDashoffset={number}
                    />
                    <text x={50} y={50} fontFamily="lato" fontSize={10} textAnchor="middle" alignmentBaseline="middle">
                        {Math.floor((progressNumber * 100) / number)}%
                    </text>
                </svg>
            </div>
        </CP>
    );
}
