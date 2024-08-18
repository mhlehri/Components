import Image from 'next/image';
import CP from '@/ui/CP';

const code = `export default function ProfileCard3() {
    return (
        <div className="max-w-[350px] space-y-8 rounded-2xl bg-white px-6 py-8 shadow-md dark:bg-[#18181B] md:max-w-[350px]">
            {/* profile image & bg  */}
            <div className="relative ">
                <img width={350} height={150} className="h-[150px] w-[350px] rounded-2xl bg-gray-500" src="https://images.unsplash.com/photo-1483347756197-71ef80e95f73?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="card navigate ui" />
                <img width={100} height={100} className="absolute -bottom-12 left-1/2 h-[100px] w-[100px] -translate-x-1/2 rounded-full border-4 border-white bg-gray-400 dark:border-[#18181B]" src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=2080&auto=format&fit=crop" alt="card navigate ui"/>
            </div>
            {/* profile name & role */}
            <div className="space-y-1 pt-8 text-center">
                <h1 className="text-xl md:text-2xl">Shiyam Sarker</h1>
                <p className="text-sm text-gray-400">Product Designer</p>
            </div>
            {/* post , followers following  */}
            <div className="flex flex-wrap items-center justify-between px-4">
                <div className="text-center">
                    <h5 className="text-xl font-medium">17</h5>
                    <p className="text-sm text-gray-400">Post</p>
                </div>
                <div className="text-center">
                    <h5 className="text-xl font-medium">9.7k</h5>
                    <p className="text-sm text-gray-400">Followers</p>
                </div>
                <div className="text-center">
                    <h5 className="text-xl font-medium">217</h5>
                    <p className="text-sm text-gray-400">Following</p>
                </div>
            </div>
            <div className="flex justify-center">
                <button className="w-[80%] rounded-full py-2 font-medium text-gray-400 shadow-[0px_0px_10px_#E2DADA] duration-500  hover:scale-95 hover:bg-[#0095FF] hover:text-white hover:shadow-xl dark:shadow-[0px_2px_8px_0px_rgba(0,0,0,0.8)]">Follow</button>
            </div>
        </div>
    );
}
`;
export default function ProfileCard3() {
    return (
        <CP code={code} id="Profile Card 3">
            <div className="mx-auto max-w-[350px] space-y-8 rounded-2xl bg-white px-6 py-8 shadow-md md:max-w-[350px] dark:bg-[#18181B]">
                {/* profile image & bg  */}
                <div className="relative">
                    <Image
                        width={350}
                        height={150}
                        className="h-[150px] w-[350px] rounded-2xl bg-gray-500"
                        src="https://images.unsplash.com/photo-1483347756197-71ef80e95f73?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="card navigate ui"
                    />
                    <Image
                        width={100}
                        height={100}
                        className="absolute -bottom-12 left-1/2 h-[100px] w-[100px] -translate-x-1/2 rounded-full border-4 border-white bg-gray-400 dark:border-[#18181B]"
                        src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=2080&auto=format&fit=crop"
                        alt="card navigate ui"
                    />
                </div>
                {/* profile name & role */}
                <div className="space-y-1 pt-8 text-center">
                    <h1 className="text-xl md:text-2xl">Shiyam Sarker</h1>
                    <p className="text-sm text-gray-400">Product Designer</p>
                </div>
                {/* post , followers following  */}
                <div className="flex flex-wrap items-center justify-between px-4">
                    <div className="text-center">
                        <h5 className="text-xl font-medium">17</h5>
                        <p className="text-sm text-gray-400">Post</p>
                    </div>
                    <div className="text-center">
                        <h5 className="text-xl font-medium">9.7k</h5>
                        <p className="text-sm text-gray-400">Followers</p>
                    </div>
                    <div className="text-center">
                        <h5 className="text-xl font-medium">217</h5>
                        <p className="text-sm text-gray-400">Following</p>
                    </div>
                </div>
                <div className="flex justify-center">
                    <button className="w-[80%] rounded-full py-2 font-medium text-gray-400 shadow-[0px_0px_10px_#E2DADA] duration-500 hover:scale-95 hover:bg-[#0095FF] hover:text-white hover:shadow-xl dark:shadow-[0px_2px_8px_0px_rgba(0,0,0,0.8)]">
                        Follow
                    </button>
                </div>
            </div>
        </CP>
    );
}
