import CP from '@/ui/CP';
import Image from 'next/image';

const code = `
export default function Avatar() {
    return (
        <img
            width={500}
            height={500}
            className="size-10 rounded-full bg-slate-500 object-cover"
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=2080&auto=format&fit=crop"
            alt="avatar navigate ui"
        />
    );
}
`;

export default function CircleAvatar(i) {
    return (
        // you can remove the blur by removing hover:blur-[2px] duration-500 these classes
        <CP code={code} i={i}>
            <div className="flex gap-10">
                <Image
                    width={500}
                    height={500}
                    className="size-10 rounded-full bg-slate-500 object-cover"
                    src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=2080&auto=format&fit=crop"
                    alt="avatar navigate ui"
                />
                <Image
                    width={500}
                    height={500}
                    className="size-12 rounded-full bg-slate-500 object-cover"
                    src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=2080&auto=format&fit=crop"
                    alt="avatar navigate ui"
                />
                <Image
                    width={500}
                    height={500}
                    className="size-14 rounded-full bg-slate-500 object-cover"
                    src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=2080&auto=format&fit=crop"
                    alt="avatar navigate ui"
                />
            </div>
        </CP>
    );
}
