import Modal1 from '@/components/Modal/Modal1';
import Modal2 from '@/components/Modal/Modal2';
import Modal3 from '@/components/Modal/Modal3';
import Modal4 from '@/components/Modal/Modal4';
import Modal5 from '@/components/Modal/Modal5';
import Modal6 from '@/components/Modal/Modal6';
import Breadcrumb from '@/ui/breadcrumb';
import Heading from '@/ui/heading';

export const metadata = {
    title: 'Modal Components',
    description: 'Modal tailwind components'
};

export default function ModalPage() {
    return (
        <>
            <Breadcrumb />
            <Heading>Explore The Modal Collections</Heading>
            <Modal1 />
            {/* <Modal2 /> */}
            <Modal3 />
            <Modal4 />
            <Modal5 />
            <Modal6 />
        </>
    );
}
