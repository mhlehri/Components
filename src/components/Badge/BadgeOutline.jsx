import CP from '@/ui/CP';
import React from 'react';

const code = `
export default function BadgeOutline() {
    return (
       <span className="rounded-full border border-gray-600 px-3 py-1 text-xs text-">Badge</span>
    );
}
`;

export default function BadgeOutline(i) {
    return (
        <CP code={code} i={i}>
            <div className="space-x-2">
                <span className="rounded-full border border-gray-600 px-3 py-1 text-xs text-gray-600">Badge</span>
                <span className="rounded-full border border-red-600 px-3 py-1 text-xs text-red-600">Badge</span>
                <span className="rounded-full border border-green-600 px-3 py-1 text-xs text-green-600">Badge</span>
                <span className="rounded-full border border-blue-600 px-3 py-1 text-xs text-blue-600">Badge</span>
            </div>
        </CP>
    );
}
