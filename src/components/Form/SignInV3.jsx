import CP from '@/ui/CP';

const code = `
export default function SignInV3() {
    return (
        <div className="max-w-3xl bg-white p-6 shadow-md sm:px-8 sm:py-10 lg:px-12 lg:py-16 dark:bg-zinc-900">
            <div className="flex flex-col justify-between space-x-0 sm:flex-row sm:space-x-12">
                <div className="mb-8 w-full sm:mb-0 sm:w-1/2">
                    {/* Left side form */}
                    <h2 className="mb-6 text-3xl font-semibold tracking-tight">Sign In</h2>
                    <form>
                        <div className="mb-4 flex flex-col space-y-4">
                            <input className="flex h-10 w-full rounded-md border px-3 py-2 text-sm focus:outline-none dark:border-zinc-700 focus:ring-1" placeholder="Username" type="text" />
                            <input className="flex h-10 w-full rounded-md border px-3 py-2 text-sm focus:outline-none dark:border-zinc-700 focus:ring-1" placeholder="Password" type="password" />
                        </div>
                        <div className="mb-6 flex items-center space-x-2 accent-sky-600">
                            <input type="checkbox" id="keep_signed_in" />
                            <label className="select-none text-sm font-medium" htmlFor="keep_signed_in">
                                Keep me signed in
                            </label>
                        </div>
                        <button className="inline-flex h-10 w-full items-center justify-center rounded-md bg-zinc-600 px-4 py-2 text-sm font-medium uppercase text-white hover:bg-zinc-700">
                            Submit
                        </button>
                    </form>
                    <p className="mt-6 flex gap-1 text-sm">
                        Did you
                        <a className="text-sky-500 underline" href="#">
                            forget your password?
                        </a>
                    </p>
                </div>
                {/* Right side content */}
                <div className="w-full sm:w-1/2">
                    <p className="mb-6 text-sm">If you don&apos;t already have an account click the button below to create your account.</p>
                    <button className="mb-2 inline-flex h-10 w-full items-center justify-center rounded-md bg-zinc-800 px-4 py-2 text-sm font-medium uppercase text-white hover:bg-zinc-700">
                        Create Account
                    </button>
                    <p className="my-4 text-center">OR</p>
                    <button className="mb-2 flex h-10 w-full items-center justify-center gap-1 rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="size-6 text-white"
                        >
                            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                        </svg>
                        SIGN IN WITH FACEBOOK
                    </button>
                    <button className="flex h-10 w-full items-center justify-center gap-1 rounded-md bg-green-600 px-4 py-2 text-sm font-medium text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="size-6 fill-current">
                            <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                        </svg>
                        SIGN IN WITH GOOGLE
                    </button>
                </div>
            </div>
        </div>
    );
}
`;

export default function SignInV3(i) {
    return (
        <CP code={code} i={i}>
            <div className="mx-auto max-w-3xl bg-white p-6 shadow-md sm:px-8 sm:py-10 lg:px-12 lg:py-16 dark:bg-zinc-900">
                <div className="flex flex-col justify-between space-x-0 sm:flex-row sm:space-x-12">
                    <div className="mb-8 w-full sm:mb-0 sm:w-1/2">
                        {/* Left side form */}
                        <h2 className="mb-6 text-3xl font-semibold tracking-tight">Sign In</h2>
                        <form>
                            <div className="mb-4 flex flex-col space-y-4">
                                <input className="flex h-10 w-full rounded-md border px-3 py-2 text-sm focus:outline-none focus:ring-1 dark:border-zinc-700" placeholder="Username" type="text" />
                                <input className="flex h-10 w-full rounded-md border px-3 py-2 text-sm focus:outline-none focus:ring-1 dark:border-zinc-700" placeholder="Password" type="password" />
                            </div>
                            <div className="mb-6 flex items-center space-x-2 accent-sky-600">
                                <input type="checkbox" id="keep_signed_in" />
                                <label className="select-none text-sm font-medium" htmlFor="keep_signed_in">
                                    Keep me signed in
                                </label>
                            </div>
                            <button className="inline-flex h-10 w-full items-center justify-center rounded-md bg-zinc-600 px-4 py-2 text-sm font-medium uppercase text-white hover:bg-zinc-700">
                                Submit
                            </button>
                        </form>
                        <p className="mt-6 flex gap-1 text-sm">
                            Did you
                            <a className="text-sky-500 underline" href="#">
                                forget your password?
                            </a>
                        </p>
                    </div>
                    {/* Right side content */}
                    <div className="w-full sm:w-1/2">
                        <p className="mb-6 text-sm">If you don&apos;t already have an account click the button below to create your account.</p>
                        <button className="mb-2 inline-flex h-10 w-full items-center justify-center rounded-md bg-zinc-800 px-4 py-2 text-sm font-medium uppercase text-white hover:bg-zinc-700">
                            Create Account
                        </button>
                        <p className="my-4 text-center">OR</p>
                        <button className="mb-2 flex h-10 w-full items-center justify-center gap-1 rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="size-6 text-white"
                            >
                                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                            </svg>
                            SIGN IN WITH FACEBOOK
                        </button>
                        <button className="flex h-10 w-full items-center justify-center gap-1 rounded-md bg-green-600 px-4 py-2 text-sm font-medium text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="size-6 fill-current">
                                <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                            </svg>
                            SIGN IN WITH GOOGLE
                        </button>
                    </div>
                </div>
            </div>
        </CP>
    );
}
