import AvatarDropdown from '@/components/DropDown/AvatarDropdown';
import BasicDropdown from '@/components/DropDown/BasicDropdown';
import BoxDropdown from '@/components/DropDown/BoxDropdown';
import FadeLeftDropdown from '@/components/DropDown/FadeLeftDropdown';
import FadeUpBoxDropdown from '@/components/DropDown/FadeUpBoxDropdown';
import FadeUpDropdown from '@/components/DropDown/FadeUpDropdown';
import { ComponentPortion } from '@/ui/componentPortion';

export const metadata = {
    title: 'Dropdown Components',
    description: 'Dropdown tailwind components'
};

const dropdownArr = [
    {
        name: 'Basic Dropdown',
        Comp: BasicDropdown
    },
    {
        name: 'Box Dropdown',
        Comp: BoxDropdown
    },
    {
        name: 'Fade Up Dropdown',
        Comp: FadeUpDropdown
    },
    {
        name: 'Fade Up Box Dropdown',
        Comp: FadeUpBoxDropdown
    },
    {
        name: 'Fade Left Dropdown',
        Comp: FadeLeftDropdown
    },
    {
        name: 'Avatar Dropdown',
        Comp: AvatarDropdown
    }
];

export default function DropDownPage() {
    return <ComponentPortion arr={dropdownArr} />;
}
