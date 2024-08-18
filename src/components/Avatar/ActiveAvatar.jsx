import CP from '@/ui/CP';
import Image from 'next/image';

const code = `
export default function ActiveAvatar() {
    return (
        <div className="relative">
            <img
                width={500}
                height={500}
                className="size-10 rounded-full bg-slate-500 object-cover"
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=2080&auto=format&fit=crop"
                alt="avatar navigate ui"
            />
            <span className="absolute bottom-[2px] right-0 size-3 rounded-full border-[2px] border-white bg-green-500"></span>
        </div>
    )
}
`;

export default function ActiveAvatar(i) {
    return (
        <CP code={code} i={i}>
            <div className="flex gap-10 *:h-fit">
                <div className="relative">
                    <Image
                        width={500}
                        height={500}
                        className="size-10 rounded-full bg-slate-500 object-cover"
                        src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=2080&auto=format&fit=crop"
                        alt="avatar navigate ui"
                    />
                    <span className="absolute bottom-[2px] right-0 size-3 rounded-full border-[2px] border-white bg-green-500"></span>
                </div>
                <div className="relative">
                    <Image
                        width={500}
                        height={500}
                        className="size-12 rounded-full bg-slate-500 object-cover"
                        src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=2080&auto=format&fit=crop"
                        alt="avatar navigate ui"
                    />
                    <span className="absolute bottom-[2px] right-0 size-3 rounded-full border-[2px] border-white bg-green-500">
                        <span className="size-3 animate-ping rounded-full bg-green-500"></span>
                    </span>
                </div>
                <div className="group relative">
                    <Image
                        width={500}
                        height={500}
                        className="size-14 rounded-full bg-slate-500 object-cover"
                        src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=2080&auto=format&fit=crop"
                        alt="avatar navigate ui"
                    />
                    <span className="absolute bottom-[2px] right-0 size-3 rounded-full border-[2px] border-white bg-green-500">
                        <span className="size-3 animate-ping rounded-full bg-green-500"></span>
                    </span>
                </div>
            </div>
        </CP>
    );
}
