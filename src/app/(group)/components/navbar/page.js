import BasicNavbar from '@/components/NavBar/BasicNavbar';
import { NavBar3 } from '@/components/NavBar/NavBar3';
import { NavBar4 } from '@/components/NavBar/NavBar4';
import { NavBar5 } from '@/components/NavBar/NavBar5';
import { NavBar6 } from '@/components/NavBar/NavBar6';
import NavbarWithDropdown from '@/components/NavBar/NavbarWithDropdown';
import { ComponentPortion } from '@/ui/componentPortion';

export const metadata = {
    title: 'Navbar Components',
    description: 'Navbar tailwind components - Navigate UI'
};

const navbarArr = [
    {
        name: 'Basic Navbar',
        Comp: BasicNavbar
    },
    {
        name: 'Navbar with dropdown menu',
        Comp: NavbarWithDropdown
    },
    {
        name: 'Navbar With Three Ends',
        Comp: NavBar3
    },
    {
        name: 'Navbar With Buttons',
        Comp: NavBar4
    },
    {
        name: 'Navbar With Routes and Buttons',
        Comp: NavBar5
    },
    {
        name: 'Responsive Navbar',
        Comp: NavBar6
    }
];

export default function NavbarPage() {
    return <ComponentPortion arr={navbarArr} />;
}
