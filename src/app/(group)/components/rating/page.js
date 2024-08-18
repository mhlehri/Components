import LoveRating from '@/components/Rating/LoveRating';
import RateOnClick from '@/components/Rating/RateOnClick';
import RateOnHover from '@/components/Rating/RateOnHover';
import { ComponentPortion } from '@/ui/componentPortion';
export const metadata = {
    title: 'Rating Components',
    description: 'Rating tailwind components'
};

const ratingArr = [
    {
        name: 'On Hover Rating',
        Comp: RateOnHover
    },
    {
        name: 'On click Rating',
        Comp: RateOnClick
    },
    {
        name: 'Love Rating',
        Comp: LoveRating
    }
];

const Rating = () => {
    return <ComponentPortion arr={ratingArr} />;
};

export default Rating;
