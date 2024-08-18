import SpeedDial1 from '@/components/SpeedDial/SpeedDial1';
import SpeedDial2 from '@/components/SpeedDial/SpeedDial2';
import SpeedDial3 from '@/components/SpeedDial/SpeedDial3';
import SpeedDial4 from '@/components/SpeedDial/SpeedDial4';
import SpeedDial5 from '@/components/SpeedDial/SpeedDial5';
import SpeedDial6 from '@/components/SpeedDial/SpeedDial6';
import Heading from '@/ui/heading';

export const metadata = {
    title: 'Speed Dial Components',
    description: 'Speed Dial tailwind components'
};

export default function SpeedDialPage() {
    return (
        <div>
            <Heading>Explore The SpeedDials Collections</Heading>
            <SpeedDial1 />
            <SpeedDial2 />
            <SpeedDial3 />
            <SpeedDial4 />
            <SpeedDial5 />
            <SpeedDial6 />
        </div>
    );
}
