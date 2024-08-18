import CP from '@/ui/CP';
import Image from 'next/image';

const code = `
export default function ProductCard3() {
    return (
        <div className="w-full max-w-md space-y-4 rounded-lg bg-white p-5 shadow-lg dark:bg-[#18181B]">
            <div className="flex flex-col space-y-1.5">
                <h3 className="text-2xl font-semibold ">Classic Leather Jacket</h3>
                <p className="text-sm text-gray-500 dark:text-white/60">Made with genuine leather, our Classic Leather Jacket is the perfect addition to every wardrobe.</p>
            </div>
            <div className="flex items-end justify-between">
                <h2 className="text-center text-2xl font-medium">$199.99</h2>
                <p className="rounded-lg bg-gray-700 p-2 text-center text-sm text-white">Category: Clothing</p>
            </div>
            <img width={400} height={300} className="h-[300px] w-full rounded-lg bg-gray-600 object-cover" src="https://images.unsplash.com/photo-1525428262024-54ab5fbe3b5c?q=80&w=1962&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="card navigate ui" />
            <button className="w-full rounded-lg bg-slate-800 px-6 py-2 text-[12px] font-semibold text-white hover:bg-slate-900 sm:text-sm md:text-base">Add to Cart</button>
        </div>
    );
};

`;

export default function ProductCard3(i) {
    return (
        <CP code={code} i={i}>
            <div className="mx-auto w-full max-w-sm space-y-4 rounded-lg bg-white p-5 shadow-lg dark:bg-[#18181B]">
                <div className="flex flex-col space-y-1.5">
                    <h3 className="text-2xl font-semibold">Classic Leather Jacket</h3>
                    <p className="text-sm text-gray-500 dark:text-white/60">Made with genuine leather, our Classic Leather Jacket is the perfect addition to every wardrobe.</p>
                </div>
                <div className="flex items-end justify-between">
                    <h2 className="text-center text-2xl font-medium">$199.99</h2>
                    <p className="rounded-lg bg-gray-700 p-2 text-center text-sm text-white">Category: Clothing</p>
                </div>
                <Image
                    width={400}
                    height={300}
                    className="h-[300px] w-full rounded-lg bg-gray-600 object-cover"
                    src="https://images.unsplash.com/photo-1525428262024-54ab5fbe3b5c?q=80&w=1962&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="card navigate ui"
                />
                <button className="w-full rounded-lg bg-slate-800 px-6 py-2 text-[12px] font-semibold text-white hover:bg-slate-900 sm:text-sm md:text-base">Add to Cart</button>
            </div>
        </CP>
    );
}
