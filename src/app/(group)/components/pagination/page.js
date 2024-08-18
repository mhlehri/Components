import CardPagination from '@/components/Pagination/CardPagination';
import SimplePagination from '@/components/Pagination/SimplePagination';
import SquareCardPagination from '@/components/Pagination/SquareCardPagination';
import SquareCardPagination2 from '@/components/Pagination/SquareCardPagination2';
import TransParentPagination from '@/components/Pagination/TransParentPagination';
import Breadcrumb from '@/ui/breadcrumb';
import Heading from '@/ui/heading';

export const metadata = {
    title: 'Pagination Components',
    description: 'Pagination tailwind components'
};

export default function page() {
    return (
        <div>
            <Breadcrumb />
            <Heading>Explore The Pagination Collections</Heading>
            <SimplePagination />
            <CardPagination />
            <SquareCardPagination />
            <SquareCardPagination2 />
            <TransParentPagination />
        </div>
    );
}
