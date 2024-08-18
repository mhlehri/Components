import ContactForm from '@/components/Form/ContactForm';
import SignIn from '@/components/Form/SignIn';
import SignInV2 from '@/components/Form/SignInV2';
import SignInV3 from '@/components/Form/SignInV3';
import SignInV4 from '@/components/Form/SignInV4';
import SignInV5 from '@/components/Form/SignInV5';
import SignInV6 from '@/components/Form/SignInV6';
import SignUp from '@/components/Form/SignUp';
import SwitchableForm from '@/components/Form/SwitchableForm';
import { ComponentPortion } from '@/ui/componentPortion';

export const metadata = {
    title: 'Form Components',
    description: 'Form tailwind components'
};

const formArr = [
    {
        name: 'Signin',
        Comp: SignIn
    },
    {
        name: 'Signup',
        Comp: SignUp
    },
    {
        name: 'Contact',
        Comp: ContactForm
    },
    {
        name: 'Switchable',
        Comp: SwitchableForm
    },
    {
        name: 'Signin v2',
        Comp: SignInV2
    },
    {
        name: 'Signin v3',
        Comp: SignInV3
    },
    {
        name: 'Signin v4',
        Comp: SignInV4
    },
    {
        name: 'Signin v5',
        Comp: SignInV5
    },
    {
        name: 'Signin v6',
        Comp: SignInV6
    }
];

export default function FormPage() {
    // const pages = await glob('pages/**/*.js', { cwd: __dirname });
    // console.log(pages);
    return <ComponentPortion arr={formArr} />;
}
