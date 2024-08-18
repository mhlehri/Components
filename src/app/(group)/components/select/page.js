import BasicSelect from '@/components/Select/BasicSelect';
import { ComponentPortion } from '@/ui/componentPortion';

export const metadata = {
    title: 'Selector Components',
    description: 'Navbar tailwind components'
};

const selectArr = [
    {
        name: 'Basic Select',
        Comp: BasicSelect
    }
];

const Selector = () => {
    return <ComponentPortion arr={selectArr} />;
};

export default Selector;
