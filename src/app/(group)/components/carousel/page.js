import { Carousel1 } from '@/components/Carousel/Carousel1';
import { Carousel2 } from '@/components/Carousel/Carousel2';
import { Carousel3 } from '@/components/Carousel/Carousel3';
import { Carousel4 } from '@/components/Carousel/Carousel4';
import { Carousel5 } from '@/components/Carousel/Carousel5';
import Carousel6 from '@/components/Carousel/Carousel6';
import { Carousel7 } from '@/components/Carousel/Carousel7';
import { Carousel8 } from '@/components/Carousel/Carousel8';
import { Carousel9 } from '@/components/Carousel/Carousel9';
import Breadcrumb from '@/ui/breadcrumb';
import Heading from '@/ui/heading';

export const metadata = {
    title: 'Carousel Components',
    description: 'Carousel tailwind components'
};

export default function SliderPage() {
    return (
        <div>
            <Breadcrumb />
            <Heading>Explore The Carousel Collections</Heading>
            <Carousel1 />
            {/* <Carousel2 /> */}
            <Carousel3 />
            <Carousel4 />
            <Carousel5 />
            <Carousel6 />
            <Carousel7 />
            {/* <Carousel8 /> */}
            <h1 className="text-red-500">Have some Issue.. (but code JSX will work perfectly in React project)</h1>
            <Carousel9></Carousel9>
        </div>
    );
}
