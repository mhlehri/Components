'use client';
import { sendGAEvent } from '@next/third-parties/google';
import { useState } from 'react';
import { FaCheck, FaRegClipboard } from 'react-icons/fa6';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { a11yDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';

const yourElementStyle = {
    background: 'transparent',
    maxHeight: '500px',
    borderRadius: '6px',
    fontSize: 14,
    border: 0,
    margin: 0
};
export default function Highlighter({ code, showLineNumbers, language }) {
    const [isCopied, setIsCopied] = useState(false);

    const handleCopy = () => {
        setIsCopied(true);
        navigator.clipboard.writeText(code);
        setTimeout(() => {
            setIsCopied(false);
        }, 1000);
    };
    return (
        <div className="group relative overflow-hidden rounded-sm">
            <SyntaxHighlighter customStyle={yourElementStyle} className="codebox" showLineNumbers={showLineNumbers == false ? false : true} language={language ? language : 'jsx'} style={a11yDark}>
                {code.trim()}
            </SyntaxHighlighter>
            <div className="absolute inset-0 -z-10 overflow-hidden rounded-sm bg-slate-800 backdrop-blur-lg dark:bg-zinc-800"></div>
            <button
                onClick={() => {
                    handleCopy();
                    sendGAEvent({
                        category: 'Button Clicks',
                        action: 'Copy Button triggered',
                        label: 'Copy'
                    });
                }}
                className="invisible absolute right-3 top-2 z-50 rounded-md border border-zinc-500 bg-zinc-500/20 p-2 group-hover:visible dark:bg-slate-500/20"
            >
                {isCopied ? <FaCheck className="text-zinc-400" size={20} /> : <FaRegClipboard className="text-zinc-400" size={20} />}
            </button>
        </div>
    );
}
