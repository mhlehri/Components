import BasicSwitchWithPeer from '@/components/Switch/BasicSwitchWithPeer';
import BasicSwitchWithState from '@/components/Switch/BasicSwitchWithState';
import Breadcrumb from '@/ui/breadcrumb';
import Heading from '@/ui/heading';

export default function page() {
    return (
        <div>
            <Breadcrumb />
            <Heading>BasicSwitchWithPeer</Heading>
            <BasicSwitchWithPeer />
            <Heading>BasicSwitchWithState</Heading>
            <BasicSwitchWithState />
        </div>
    );
}
