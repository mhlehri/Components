import { Breadcrumb } from './Client';

export function Heading({ children, id }) {
    return (
        <h1 className="text-lg font-semibold text-black sm:text-xl lg:text-3xl dark:text-white" id={id}>
            {children}
            {/* <hr className="mt-2 dark:border-zinc-800" /> */}
        </h1>
    );
}

export function ComponentPortion({ arr }) {
    return (
        <div className="flex">
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
            <div className="sticky top-16 hidden h-fit w-full text-end text-sm xl:block xl:w-[20%]">
                <h6 className="font-semibold">On this Page</h6>
                {arr?.map((data) => {
                    const { name } = data;
                    const id = name?.split(' ').join('-').toLowerCase();
                    return (
                        <span key={`on_this_page_${id}`} className="mt-1 block text-sm">
                            <a href={`#${id}`} className="text-zinc-600 hover:text-black dark:text-zinc-400 dark:hover:text-white">
                                {name}
                            </a>
                        </span>
                    );
                })}
            </div>
        </div>
    );
}
