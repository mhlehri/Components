import TooltipBottom from '@/components/Tooltip/TooltipBottom';
import TooltipLeft from '@/components/Tooltip/TooltipLeft';
import TooltipRight from '@/components/Tooltip/TooltipRight';
import TooltipTop from '@/components/Tooltip/TooltipTop';
import { ComponentPortion } from '@/ui/componentPortion';

export const metadata = {
    title: 'Tooltip Components',
    description: 'Tooltip tailwind components'
};

const tooltipArr = [
    {
        name: 'Tooltip right',
        Comp: TooltipRight
    },
    {
        name: 'Tooltip left',
        Comp: TooltipLeft
    },
    {
        name: 'Tooltip top',
        Comp: TooltipTop
    },
    {
        name: 'Tooltip bottom',
        Comp: TooltipBottom
    }
];

export default function TooltipPage() {
    return <ComponentPortion arr={tooltipArr} />;
}
