export default function loading() {
    return (
        <div className="relative flex h-ch w-full items-center justify-center">
            <span className="absolute h-12 w-12 animate-[u_1s_linear_infinite] rounded-full border-4 border-zinc-400 border-l-transparent border-r-transparent"></span>
            <span className="absolute h-16 w-16 animate-[spin_1s_linear_infinite] rounded-full border-4 border-zinc-500 border-l-transparent border-r-transparent"></span>
        </div>
    );
}
