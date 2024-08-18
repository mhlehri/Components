import AlertCard from '@/components/Card/AlertCard';
import ArticleCard from '@/components/Card/ArticleCard';
import Card14 from '@/components/Card/Card14';
import CookieCard from '@/components/Card/CookieCard';
import PricingCard from '@/components/Card/PricingCard';
import PricingCard2 from '@/components/Card/PricingCard2';
import ProductCard from '@/components/Card/ProductCard';
import ProductCard2 from '@/components/Card/ProductCard2';
import ProductCard3 from '@/components/Card/ProductCard3';
import ProductCard4 from '@/components/Card/ProductCard4';
import ProfileCard from '@/components/Card/ProfileCard';
import ProfileCard2 from '@/components/Card/ProfileCard2';
import ProfileCard3 from '@/components/Card/ProfileCard3';
import { ComponentPortion } from '@/ui/componentPortion';

export const metadata = {
    title: 'Card Components',
    description: 'Card tailwind components'
};

const cardArr = [
    {
        name: 'Product Card',
        Comp: ProductCard
    },
    {
        name: 'Product Card 2',
        Comp: ProductCard2
    },
    {
        name: 'Product Card 3',
        Comp: ProductCard3
    },
    {
        name: 'Product Card 4',
        Comp: ProductCard4
    },
    {
        name: 'Pricing Card',
        Comp: PricingCard
    },
    {
        name: 'Pricing Card 2',
        Comp: PricingCard2
    },
    {
        name: 'Profile Card',
        Comp: ProfileCard
    },
    {
        name: 'Profile Card 2',
        Comp: ProfileCard2
    },
    {
        name: 'Profile Card 3',
        Comp: ProfileCard3
    },
    {
        name: 'Article Card',
        Comp: ArticleCard
    },
    {
        name: 'Cookie Card',
        Comp: CookieCard
    },
    {
        name: 'Alert Card',
        Comp: AlertCard
    }
];

export default function CardPage() {
    return <ComponentPortion arr={cardArr} />;
}
