import BasicInput from '@/components/Input/BasicInput';
import FloatingPlaceholder from '@/components/Input/FloatingPlaceholder';
import FloatingPlaceholderInside from '@/components/Input/FloatingPlaceholderInside';
import InputWithRing from '@/components/Input/InputWithRing';
import UnderlineInput from '@/components/Input/UnderlineInput';
import { ComponentPortion } from '@/ui/componentPortion';

export const metadata = {
    title: 'Input Components',
    description: 'Input tailwind components'
};

const inputArr = [
    {
        name: 'Basic Input',
        Comp: BasicInput
    },
    {
        name: 'Input with ring',
        Comp: InputWithRing
    },
    {
        name: 'Underline input',
        Comp: UnderlineInput
    },
    {
        name: 'Floating placeholder',
        Comp: FloatingPlaceholder
    },
    {
        name: 'Floating placeholder inside',
        Comp: FloatingPlaceholderInside
    }
];

export default function InputPage() {
    return <ComponentPortion arr={inputArr} />;
}
