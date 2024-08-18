import Link from 'next/link';
import Heading from './heading';
import Breadcrumb from './breadcrumb';

export function ComponentPortion({ arr }) {
    return (
        <div className="flex justify-between">
            <div className="w-full xl:w-[80%]">
                <Breadcrumb />
                {arr?.map((data) => {
                    const { name, Comp } = data;
                    const id = name?.split(' ').join('-').toLowerCase();
                    return (
                        <div key={id}>
                            <Heading id={id}>{name}</Heading>
                            <Comp name={name} id={id} />
                        </div>
                    );
                })}
            </div>
            <div className="sticky top-20 hidden h-fit w-full space-y-2 text-sm xl:block xl:w-[15%]">
                <h6 className="mb-3 font-medium">On this Page</h6>
                {arr?.map((data) => {
                    const { name } = data;
                    const id = name?.split(' ').join('-').toLowerCase();
                    return (
                        <span key={`on_this_page_${id}`} className="block text-sm">
                            <Link href={`#${id}`} className="text-slate-500 hover:text-black dark:text-zinc-400 dark:hover:text-white">
                                {name}
                            </Link>
                        </span>
                    );
                })}
            </div>
        </div>
    );
}
