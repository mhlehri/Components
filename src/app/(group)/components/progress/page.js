import DynamicProgress from '@/components/Progress/DynamicProgress';
import InsidePercentageProgress from '@/components/Progress/InsidePercentageProgress';
import OutsidePercentageProgress from '@/components/Progress/OutsidePercentageProgress';
import CircleProgress from '@/components/Progress/CircleProgress';
import StaticProgress from '@/components/Progress/StaticProgress';
import StaticWithPercentage from '@/components/Progress/StaticWithPercentage';
import { ComponentPortion } from '@/ui/componentPortion';

export const metadata = {
    title: 'Progress Components',
    description: 'Navbar tailwind components'
};

const progressArr = [
    {
        name: 'Static progress',
        Comp: StaticProgress
    },
    {
        name: 'Static with percentage',
        Comp: StaticWithPercentage
    },
    {
        name: 'Dynamic progress',
        Comp: DynamicProgress
    },
    {
        name: 'Inside percentage progress',
        Comp: InsidePercentageProgress
    },
    {
        name: 'Outside percentage progress',
        Comp: OutsidePercentageProgress
    },
    {
        name: 'Circle progress',
        Comp: CircleProgress
    }
];

export default function Progress() {
    return <ComponentPortion arr={progressArr} />;
}
