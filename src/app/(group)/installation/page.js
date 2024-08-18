import Highlighter from '@/ui/CodeSnippet';
import CP from '@/ui/CP';
import React from 'react';

export default function page() {
    return (
        <div className="lg:w-4/6">
            <h3 className="text-3xl font-medium">Installation</h3>
            <p className="mt-2 text-zinc-400">
                You don&apos;t need any additional installation steps to include NavigateUI in your project. Simply set up your project with React.js or Next.js, including TailwindCSS, and you&apos;re
                good to go.
            </p>
            <h3 className="mt-5 text-3xl font-medium">Example</h3>
            <h5 className="mt-2 text-zinc-400">With vite react</h5>
            <div className="mt-2 text-zinc-400">
                <Highlighter
                    language="bash"
                    showLineNumbers={false}
                    code={`
# npm
npm create vite@latest my-react-app -- --template react

# yarn
yarn create vite my-react-app --template react

# pnpm
pnpm create vite my-react-app --template react

# bun
bun create vite my-react-app --template react`}
                />
            </div>
        </div>
    );
}
