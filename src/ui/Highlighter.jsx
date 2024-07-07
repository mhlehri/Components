'use client';
import { sendGAEvent } from '@next/third-parties/google';
import { useState } from 'react';
import { FaCheck, FaRegClipboard } from 'react-icons/fa6';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { brownPaper, codepenEmbed, darcula, dark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { a11yDark, base16AteliersulphurpoolLight, cb } from 'react-syntax-highlighter/dist/esm/styles/prism';

const yourElementStyle = {
    background: 'transparent',
    maxHeight: '500px',
    borderRadius: '5px',
    fontSize: 14,
    border: 0
};
export default function Highlighter({ code }) {
    const [isCopied, setIsCopied] = useState(false);

    const handleCopy = () => {
        setIsCopied(true);
        setTimeout(() => {
            setIsCopied(false);
            navigator.clipboard.writeText(code);
        }, 500);
    };
    return (
        <div className="layout group relative">
            <SyntaxHighlighter customStyle={yourElementStyle} className="codebox" showLineNumbers language="jsx" style={a11yDark}>
                {code.trim()}
            </SyntaxHighlighter>

            <button
                onClick={() => {
                    handleCopy();
                    sendGAEvent({
                        category: 'Button Clicks',
                        action: 'Copy Button triggered',
                        label: 'Copy'
                    });
                }}
                className="invisible absolute right-3 top-2 z-50 rounded-md bg-gray-400/20 p-2 hover:bg-[#080808] group-hover:visible dark:bg-slate-500/20 hover:dark:bg-[#080808]"
            >
                {isCopied ? <FaCheck color="#fff" size={16} /> : <FaRegClipboard color="#fff" size={16} />}
            </button>
        </div>
    );
}
