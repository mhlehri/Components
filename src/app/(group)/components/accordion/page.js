import BoxAccordion from '@/components/Accordion/BoxAccordion';
import AccordionWithImage from '@/components/Accordion/AccordionWithImage';
import AccordionWithImage2 from '@/components/Accordion/AccordionWithImage2';
import AccordionWithIndex from '@/components/Accordion/AccordionWithIndex';
import BasicAccordion from '@/components/Accordion/BasicAccordion';
import ColorFulAccordion from '@/components/Accordion/ColorFulAccordion';
import DrawerAccordion from '@/components/Accordion/DrawerAccordion';
import MenuAccordion from '@/components/Accordion/MenuAccordion';
import VerticalAccordion from '@/components/Accordion/VerticalAccordion';
import VerticalMenuAccordion from '@/components/Accordion/VerticalMenuAccordion';
import { ComponentPortion } from '@/ui/componentPortion';

export const metadata = {
    title: 'Accordion Components',
    description: 'Accordion tailwind components'
};

const accordionArr = [
    {
        name: 'Basic Accordion',
        Comp: BasicAccordion
    },
    {
        name: 'Box Accordion',
        Comp: BoxAccordion
    },
    {
        name: 'Accordion With index',
        Comp: AccordionWithIndex
    },
    {
        name: 'Colorful Accordion',
        Comp: ColorFulAccordion
    },
    {
        name: 'Menu Accordion',
        Comp: MenuAccordion
    },
    {
        name: 'Vertical Accordion',
        Comp: VerticalAccordion
    },
    {
        name: 'Vertical Menu Accordion',
        Comp: VerticalMenuAccordion
    },
    {
        name: 'Drawer Accordion',
        Comp: DrawerAccordion
    },
    {
        name: 'Accordion With Image',
        Comp: AccordionWithImage
    },
    {
        name: 'Accordion With Image 2',
        Comp: AccordionWithImage2
    }
];

export default function AccordionPage() {
    return <ComponentPortion arr={accordionArr} />;
}
