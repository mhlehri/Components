'use client';
import { usePathname } from 'next/navigation';
import { FaAngleRight } from 'react-icons/fa6';

export default function Breadcrumb() {
    const path = usePathname();
    const regex = /^\/([^\/]+)\/([^\/]+)$/;
    const match = path.match(regex);

    if (!match) {
        return null;
    }
    // console.log(match);

    const [, firstSegment, secondSegment] = match;

    return (
        <h6 className="mb-5 text-sm capitalize">
            <span className="text-zinc-500 dark:text-zinc-400">{firstSegment}</span>
            <FaAngleRight className="mx-1 inline-block size-3" />
            <span className="font-semibold">{secondSegment}</span>
        </h6>
    );
}
