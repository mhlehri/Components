import CP from '@/ui/CP';

const code = `
export default function SignInV5() {
    return (
        <div className="group mx-auto flex w-full max-w-xl border border-blue-400 bg-white text-blue-400 shadow-lg dark:bg-zinc-900">
            <div className="relative hidden min-h-[110%] w-1/3 overflow-hidden bg-blue-400 sm:block">
                <h1 className="absolute bottom-3 right-3 text-right text-2xl font-semibold text-white">
                    Hey! <br /> Welcome to
                    <br /> NavigateUI
                </h1>
                <span className="absolute -left-8 -top-8 z-20 h-32 w-32 rounded-full bg-blue-800/20 duration-500 group-hover:h-56 group-hover:w-56"></span>
                <span className="absolute -left-5 -top-5 z-10 h-36 w-36 rounded-full bg-blue-800/50"></span>
            </div>
            <form className="flex-1 p-8">
                <h1 className="pb-6 text-3xl font-semibold tracking-tight">Sign In</h1>
                <div className="space-y-5">
                    <div className="relative text-sm">
                        <input
                            className="peer/email block w-full rounded-md border border-blue-400 bg-inherit p-2.5 shadow-lg outline-none"
                            type="email"
                            placeholder=""
                            id="navigate_ui_email_33"
                            required
                        />
                        <label
                            className="absolute -top-2 left-2 rounded-md bg-blue-300 px-2 text-xs text-blue-600 duration-300 peer-placeholder-shown/email:top-3 peer-placeholder-shown/email:bg-transparent peer-placeholder-shown/email:text-sm peer-placeholder-shown/email:text-zinc-400 peer-focus/email:-top-2 peer-focus/email:bg-blue-300 peer-focus/email:text-xs peer-focus/email:text-blue-600"
                            htmlFor="navigate_ui_email_33"
                        >
                            Email
                        </label>
                    </div>
                    <div className="relative text-sm">
                        <input
                            className="peer/pass block w-full rounded-md border border-blue-400 bg-inherit p-2.5 shadow-lg outline-none"
                            type="password"
                            placeholder=""
                            id="navigate_ui_password_33"
                            required
                        />
                        <label
                            className="absolute -top-2 left-2 rounded-md bg-blue-300 px-2 text-xs text-blue-600 duration-300 peer-placeholder-shown/pass:top-3 peer-placeholder-shown/pass:bg-transparent peer-placeholder-shown/pass:text-sm peer-placeholder-shown/pass:text-zinc-400 peer-focus/pass:-top-2 peer-focus/pass:bg-blue-300 peer-focus/pass:text-xs peer-focus/pass:text-blue-600"
                            htmlFor="navigate_ui_password_33"
                        >
                            Password
                        </label>
                    </div>
                </div>
                {/* button type will be submit for handling form submission*/}
                <button
                    type="submit"
                    className="relative z-50 mb-4 mt-8 inline-block overflow-hidden rounded-md uppercase border border-blue-400 px-5 py-2 shadow-lg before:absolute before:inset-0 before:-z-10 before:block before:translate-x-full before:rounded-s-full before:bg-blue-400 before:duration-300 after:absolute after:inset-0 after:-z-10 after:block after:-translate-x-full after:rounded-e-full after:bg-blue-400 after:duration-300 hover:text-white before:hover:translate-x-0 after:hover:translate-x-0"
                >
                    Submit
                </button>
            </form>
        </div>
    );
}
`;
export default function SignInV5(i) {
    return (
        <CP code={code} i={i}>
            <div className="group mx-auto flex w-full max-w-xl border border-blue-400 bg-white text-blue-400 shadow-lg dark:bg-zinc-900">
                <div className="relative hidden min-h-[110%] w-1/3 overflow-hidden bg-blue-400 sm:block">
                    <h1 className="absolute bottom-3 right-3 text-right text-2xl font-semibold text-white">
                        Hey! <br /> Welcome to
                        <br /> NavigateUI
                    </h1>
                    <span className="absolute -left-8 -top-8 z-20 h-32 w-32 rounded-full bg-blue-800/20 duration-500 group-hover:h-56 group-hover:w-56"></span>
                    <span className="absolute -left-5 -top-5 z-10 h-36 w-36 rounded-full bg-blue-800/50"></span>
                </div>
                <form className="flex-1 p-8">
                    <h1 className="pb-6 text-3xl font-semibold tracking-tight">Sign In</h1>
                    <div className="space-y-5">
                        <div className="relative text-sm">
                            <input
                                className="peer/email block w-full rounded-md border border-blue-400 bg-inherit p-2.5 shadow-lg outline-none"
                                type="email"
                                placeholder=""
                                id="navigate_ui_email_33"
                                required
                            />
                            <label
                                className="absolute -top-2 left-2 rounded-md bg-blue-300 px-2 text-xs text-blue-600 duration-300 peer-placeholder-shown/email:top-3 peer-placeholder-shown/email:bg-transparent peer-placeholder-shown/email:text-sm peer-placeholder-shown/email:text-zinc-400 peer-focus/email:-top-2 peer-focus/email:bg-blue-300 peer-focus/email:text-xs peer-focus/email:text-blue-600"
                                htmlFor="navigate_ui_email_33"
                            >
                                Email
                            </label>
                        </div>
                        <div className="relative text-sm">
                            <input
                                className="peer/pass block w-full rounded-md border border-blue-400 bg-inherit p-2.5 shadow-lg outline-none"
                                type="password"
                                placeholder=""
                                id="navigate_ui_password_33"
                                required
                            />
                            <label
                                className="absolute -top-2 left-2 rounded-md bg-blue-300 px-2 text-xs text-blue-600 duration-300 peer-placeholder-shown/pass:top-3 peer-placeholder-shown/pass:bg-transparent peer-placeholder-shown/pass:text-sm peer-placeholder-shown/pass:text-zinc-400 peer-focus/pass:-top-2 peer-focus/pass:bg-blue-300 peer-focus/pass:text-xs peer-focus/pass:text-blue-600"
                                htmlFor="navigate_ui_password_33"
                            >
                                Password
                            </label>
                        </div>
                    </div>
                    {/* button type will be submit for handling form submission*/}
                    <button
                        type="submit"
                        className="relative z-50 mb-4 mt-8 inline-block overflow-hidden rounded-md border border-blue-400 px-5 py-2 uppercase shadow-lg before:absolute before:inset-0 before:-z-10 before:block before:translate-x-full before:rounded-s-full before:bg-blue-400 before:duration-300 after:absolute after:inset-0 after:-z-10 after:block after:-translate-x-full after:rounded-e-full after:bg-blue-400 after:duration-300 hover:text-white before:hover:translate-x-0 after:hover:translate-x-0"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </CP>
    );
}
