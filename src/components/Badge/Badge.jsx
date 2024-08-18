import CP from '@/ui/CP';
import React from 'react';

const code = `
export default function Badge() {
    return (
       <span className="rounded-full bg-gray-600 px-3 py-1 text-xs text-white">Badge</span>
    );
}
`;

export default function Badge(i) {
    return (
        <CP code={code} i={i}>
            <div className="space-x-2">
                <span className="rounded-full bg-gray-600 px-3 py-1 text-xs text-white">Badge</span>
                <span className="rounded-full bg-red-600 px-3 py-1 text-xs text-white">Badge</span>
                <span className="rounded-full bg-green-600 px-3 py-1 text-xs text-white">Badge</span>
                <span className="rounded-full bg-blue-600 px-3 py-1 text-xs text-white">Badge</span>
            </div>
        </CP>
    );
}
