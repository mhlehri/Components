import Badge from '@/components/Badge/Badge';
import BadgeDot from '@/components/Badge/BadgeDot';
import BadgeNumber from '@/components/Badge/BadgeNumber';
import BadgeOutline from '@/components/Badge/BadgeOutline';
import BadgeWithBorder from '@/components/Badge/BadgeWithBorder';
import { ComponentPortion } from '@/ui/componentPortion';

export const metadata = {
    title: 'Badge Components',
    description: 'Badge tailwind components'
};

const badgeArr = [
    {
        name: 'Badge',
        Comp: Badge
    },
    {
        name: 'Badge Outline',
        Comp: BadgeOutline
    },
    {
        name: 'Badge Number',
        Comp: BadgeNumber
    },
    {
        name: 'Badge Dot',
        Comp: BadgeDot
    },
    {
        name: 'Badge with Border',
        Comp: BadgeWithBorder
    }
];

export default function BadgePage() {
    return <ComponentPortion arr={badgeArr} />;
}
