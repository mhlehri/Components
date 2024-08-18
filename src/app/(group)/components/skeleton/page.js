import Skeleton1 from '@/components/Skeleton/Skeleton1';
import Skeleton2 from '@/components/Skeleton/Skeleton2';
import Skeleton3 from '@/components/Skeleton/Skeleton3';
import Skeleton4 from '@/components/Skeleton/Skeleton4';
import Skeleton5 from '@/components/Skeleton/Skeleton5';
import Skeleton6 from '@/components/Skeleton/Skeleton6';
import Skeleton7 from '@/components/Skeleton/Skeleton7';
import { ComponentPortion } from '@/ui/componentPortion';

export const metadata = {
    title: 'Skeleton Components',
    description: 'Skeleton tailwind components'
};

const skeletonArr = [
    {
        name: 'Avatar skeleton',
        Comp: Skeleton1
    },
    {
        name: 'Product Details skeleton',
        Comp: Skeleton4
    },
    {
        name: 'Card Skeleton',
        Comp: Skeleton2
    },
    {
        name: 'Card Skeleton 2',
        Comp: Skeleton3
    },
    {
        name: 'Social media post skeleton',
        Comp: Skeleton5
    },
    {
        name: 'Social media post skeleton 2',
        Comp: Skeleton6
    },
    {
        name: 'Social media post skeleton 3',
        Comp: Skeleton7
    }
];

export default function SkeletonPage() {
    return <ComponentPortion arr={skeletonArr} />;
}
