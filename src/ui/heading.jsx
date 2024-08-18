export default function Heading({ children, id }) {
    return (
        <h1 className="text-lg font-semibold text-black sm:text-xl lg:text-3xl dark:text-white" id={id}>
            {children}
        </h1>
    );
}
