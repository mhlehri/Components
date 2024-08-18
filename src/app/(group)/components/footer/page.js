import Footer1 from '@/components/Footer/Footer1';
import Footer2 from '@/components/Footer/Footer2';
import Footer3 from '@/components/Footer/Footer3';
import Footer4 from '@/components/Footer/Footer4';
import Footer5 from '@/components/Footer/Footer5';
import Footer6 from '@/components/Footer/Footer6';
import Footer7 from '@/components/Footer/Footer7';
import { ComponentPortion } from '@/ui/componentPortion';

export const metadata = {
    title: 'Footer Components',
    description: 'Footer tailwind components'
};

const footerArr = [
    {
        name: 'Basic Footer',
        Comp: Footer1
    },
    {
        name: 'Single Column Footer',
        Comp: Footer2
    },
    {
        name: 'Single Column Footer V2',
        Comp: Footer3
    },
    {
        name: 'Multi-Column Footer',
        Comp: Footer4
    },
    {
        name: 'Multi-Column Footer V2',
        Comp: Footer5
    }
    // {
    //     name: 'Multi-Column With Vertical Links',
    //     Comp: Footer6
    // },
    // {
    //     name: 'Multi-Column With Three Columns',
    //     Comp: Footer7
    // }
];

export default function FooterPage() {
    return <ComponentPortion arr={footerArr} />;
}
