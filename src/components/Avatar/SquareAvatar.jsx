import Image from 'next/image';
import CP from '@/ui/CP';

const code = `
export default function Avatar() {
    return (
        <img
            width={500}
            height={500}
            className="size-10 rounded-md bg-slate-500 object-cover"
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=2080&auto=format&fit=crop"
            alt="avatar navigate ui"
        />
    );
}
`;

export default function SquareAvatar(i) {
    return (
        <CP code={code} i={i}>
            <div className="flex gap-10">
                <Image
                    width={500}
                    height={500}
                    className="size-10 rounded-md bg-slate-500 object-cover"
                    src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=2080&auto=format&fit=crop"
                    alt="avatar navigate ui"
                />
                <Image
                    width={500}
                    height={500}
                    className="size-12 rounded-md bg-slate-500 object-cover"
                    src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=2080&auto=format&fit=crop"
                    alt="avatar navigate ui"
                />
                <Image
                    width={500}
                    height={500}
                    className="size-14 rounded-md bg-slate-500 object-cover"
                    src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=2080&auto=format&fit=crop"
                    alt="avatar navigate ui"
                />
            </div>
        </CP>
    );
}
