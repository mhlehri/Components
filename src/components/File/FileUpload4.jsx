'use client';
import CP from '@/ui/CP';
import { useRef, useState } from 'react';

const code = `import { useRef, useState } from 'react';

export default function FileUpload4 () {
  const [showName, setShowName] = useState({});
  const fileInputRef = useRef();
  
  const handleClearFile = () => {
    setShowName('');
    fileInputRef.current.value = ''; 
  };
  return (
    <div className="w-max rounded-lg border p-6 bg-white">
      <div className="space-y-1.5">
        <h5 className="whitespace-nowrap text-lg font-medium tracking-tight ">Upload your file</h5>
        <p className="text-sm text-gray-500">File Should be in PDF, DOCX or JPG formate</p>
      </div>
      {/* upload button  */}
      <div className="mt-10">
        <button className="w-full">
          <label className="flex h-full w-full  items-center justify-center gap-4 rounded-lg border  px-4 py-2 text-white active:ring-4 active:ring-cyan-200" htmlFor="file4">
            <svg width={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="white"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><g id="Complete"><g id="upload"><g><path d="M3,12.3v7a2,2,0,0,0,2,2H19a2,2,0,0,0,2-2v-7" fill="none" stroke="#2E2E30" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path><g><polyline data-name="Right" fill="none" id="Right-2" points="7.9 6.7 12 2.7 16.1 6.7" stroke="#2E2E30" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></polyline><line fill="none" stroke="#2E2E30" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="12" x2="12" y1="16.3" y2="4.8"></line></g></g></g></g></g></svg>
            <p className="text-lg font-medium text-[#2E2E30] "> {showName.name ? showName.name : 'Choose File'}</p>
          </label>
          <input
            ref={fileInputRef}
            onChange={(e) => {
              if (e.target.files && e.target.files[0]) {
                const imageFile = e.target.files[0];
                setShowName(imageFile);
              }
            }} className="hidden" id="file4" type="file"/>
        </button>
        {showName.name ? null : <p className="py-1 text-sm text-[#2E2E30]">No file Chosen</p>}
      </div>
      {showName.name && (
        <div className="mt-10">
          <div className="flex items-center gap-4">
            <svg width={45} viewBox="-3 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><title>file-document</title> <desc>Created with Sketch Beta.</desc> <defs> </defs><g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"><g id="Icon-Set" transform="translate(-154.000000, -99.000000)" fill="#000000"><path d="M174,107 C172.896,107 172,106.104 172,105 L172,101 L178,107 L174,107 L174,107 Z M178,127 C178,128.104 177.104,129 176,129 L158,129 C156.896,129 156,128.104 156,127 L156,103 C156,101.896 156.896,101 158,101 L169.972,101 C169.954,103.395 170,105 170,105 C170,107.209 171.791,109 174,109 L178,109 L178,127 L178,127 Z M172,99 L172,99.028 C171.872,99.028 171.338,98.979 170,99 L158,99 C155.791,99 154,100.791 154,103 L154,127 C154,129.209 155.791,131 158,131 L176,131 C178.209,131 180,129.209 180,127 L180,109 L180,107 L172,99 L172,99 Z" id="file-document"></path></g></g></g></svg>
            <div>
              <p className="font-medium">{showName?.name}</p>
              <p className="text-gray-600">{(showName.size / 1024).toFixed(1)} KB</p>
            </div>
          </div>
          <div onClick={handleClearFile} className="mt-4 flex items-center gap-1">
            <svg width={30} viewBox="0 -0.5 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M6.96967 16.4697C6.67678 16.7626 6.67678 17.2374 6.96967 17.5303C7.26256 17.8232 7.73744 17.8232 8.03033 17.5303L6.96967 16.4697ZM13.0303 12.5303C13.3232 12.2374 13.3232 11.7626 13.0303 11.4697C12.7374 11.1768 12.2626 11.1768 11.9697 11.4697L13.0303 12.5303ZM11.9697 11.4697C11.6768 11.7626 11.6768 12.2374 11.9697 12.5303C12.2626 12.8232 12.7374 12.8232 13.0303 12.5303L11.9697 11.4697ZM18.0303 7.53033C18.3232 7.23744 18.3232 6.76256 18.0303 6.46967C17.7374 6.17678 17.2626 6.17678 16.9697 6.46967L18.0303 7.53033ZM13.0303 11.4697C12.7374 11.1768 12.2626 11.1768 11.9697 11.4697C11.6768 11.7626 11.6768 12.2374 11.9697 12.5303L13.0303 11.4697ZM16.9697 17.5303C17.2626 17.8232 17.7374 17.8232 18.0303 17.5303C18.3232 17.2374 18.3232 16.7626 18.0303 16.4697L16.9697 17.5303ZM11.9697 12.5303C12.2626 12.8232 12.7374 12.8232 13.0303 12.5303C13.3232 12.2374 13.3232 11.7626 13.0303 11.4697L11.9697 12.5303ZM8.03033 6.46967C7.73744 6.17678 7.26256 6.17678 6.96967 6.46967C6.67678 6.76256 6.67678 7.23744 6.96967 7.53033L8.03033 6.46967ZM8.03033 17.5303L13.0303 12.5303L11.9697 11.4697L6.96967 16.4697L8.03033 17.5303ZM13.0303 12.5303L18.0303 7.53033L16.9697 6.46967L11.9697 11.4697L13.0303 12.5303ZM11.9697 12.5303L16.9697 17.5303L18.0303 16.4697L13.0303 11.4697L11.9697 12.5303ZM13.0303 11.4697L8.03033 6.46967L6.96967 7.53033L11.9697 12.5303L13.0303 11.4697Z" fill="#000000"></path></g></svg>
            <p>Remove</p>
          </div>
        </div>
      )}
    </div>
  );
};
`;

export default function FileUpload4() {
    const [showName, setShowName] = useState({});
    const fileInputRef = useRef();

    const handleClearFile = () => {
        setShowName('');
        fileInputRef.current.value = '';
    };
    return (
        <CP code={code}>
            <div className="w-full max-w-sm rounded-lg border bg-white p-6 dark:border-zinc-700 dark:bg-zinc-900">
                <div className="space-y-1.5">
                    <h5 className="whitespace-nowrap text-lg font-medium tracking-tight dark:text-zinc-300">Upload your file</h5>
                    <p className="text-sm text-zinc-500">File Should be in PDF, DOCX or JPG formate</p>
                </div>
                {/* upload button  */}
                <div className="mt-10">
                    <button className="w-full">
                        <label
                            className="flex h-full w-full items-center justify-center gap-3 rounded-lg border px-4 py-2 text-zinc-600 active:ring-4 active:ring-blue-200 dark:border-zinc-700 dark:text-zinc-300"
                            htmlFor="file4"
                        >
                            <svg className="size-6 stroke-black dark:stroke-zinc-300" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3,12.3v7a2,2,0,0,0,2,2H19a2,2,0,0,0,2-2v-7" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                                <g>
                                    <polyline data-name="Right" fill="none" id="Right-2" points="7.9 6.7 12 2.7 16.1 6.7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></polyline>
                                    <line fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="12" x2="12" y1="16.3" y2="4.8"></line>
                                </g>
                            </svg>
                            <p className="truncate text-ellipsis text-lg font-medium"> {showName.name ? showName.name : 'Choose File'}</p>
                        </label>
                        <input
                            ref={fileInputRef}
                            onChange={(e) => {
                                if (e.target.files && e.target.files[0]) {
                                    const imageFile = e.target.files[0];
                                    setShowName(imageFile);
                                }
                            }}
                            className="hidden"
                            id="file4"
                            type="file"
                        />
                    </button>
                    {showName.name ? null : <p className="py-1 text-sm dark:text-zinc-500">No file Chosen</p>}
                </div>
                {showName.name && (
                    <div className="mt-10">
                        <div className="flex items-start gap-3">
                            <svg className="size-10 fill-zinc-500" viewBox="-3 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                <g transform="translate(-154.000000, -99.000000)">
                                    <path
                                        d="M174,107 C172.896,107 172,106.104 172,105 L172,101 L178,107 L174,107 L174,107 Z M178,127 C178,128.104 177.104,129 176,129 L158,129 C156.896,129 156,128.104 156,127 L156,103 C156,101.896 156.896,101 158,101 L169.972,101 C169.954,103.395 170,105 170,105 C170,107.209 171.791,109 174,109 L178,109 L178,127 L178,127 Z M172,99 L172,99.028 C171.872,99.028 171.338,98.979 170,99 L158,99 C155.791,99 154,100.791 154,103 L154,127 C154,129.209 155.791,131 158,131 L176,131 C178.209,131 180,129.209 180,127 L180,109 L180,107 L172,99 L172,99 Z"
                                        id="file-document"
                                    ></path>
                                </g>
                            </svg>
                            <div>
                                <p className="text-sm font-medium dark:text-zinc-300">{showName?.name}</p>
                                <p className="text-nowrap text-xs text-zinc-400">{(showName.size / 1024).toFixed(1)} KB</p>
                            </div>
                        </div>
                        <button onClick={handleClearFile} className="mt-4 flex items-center gap-1 outline-none dark:text-zinc-300">
                            <svg className="size-7 fill-black dark:fill-zinc-300" viewBox="0 -0.5 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6.96967 16.4697C6.67678 16.7626 6.67678 17.2374 6.96967 17.5303C7.26256 17.8232 7.73744 17.8232 8.03033 17.5303L6.96967 16.4697ZM13.0303 12.5303C13.3232 12.2374 13.3232 11.7626 13.0303 11.4697C12.7374 11.1768 12.2626 11.1768 11.9697 11.4697L13.0303 12.5303ZM11.9697 11.4697C11.6768 11.7626 11.6768 12.2374 11.9697 12.5303C12.2626 12.8232 12.7374 12.8232 13.0303 12.5303L11.9697 11.4697ZM18.0303 7.53033C18.3232 7.23744 18.3232 6.76256 18.0303 6.46967C17.7374 6.17678 17.2626 6.17678 16.9697 6.46967L18.0303 7.53033ZM13.0303 11.4697C12.7374 11.1768 12.2626 11.1768 11.9697 11.4697C11.6768 11.7626 11.6768 12.2374 11.9697 12.5303L13.0303 11.4697ZM16.9697 17.5303C17.2626 17.8232 17.7374 17.8232 18.0303 17.5303C18.3232 17.2374 18.3232 16.7626 18.0303 16.4697L16.9697 17.5303ZM11.9697 12.5303C12.2626 12.8232 12.7374 12.8232 13.0303 12.5303C13.3232 12.2374 13.3232 11.7626 13.0303 11.4697L11.9697 12.5303ZM8.03033 6.46967C7.73744 6.17678 7.26256 6.17678 6.96967 6.46967C6.67678 6.76256 6.67678 7.23744 6.96967 7.53033L8.03033 6.46967ZM8.03033 17.5303L13.0303 12.5303L11.9697 11.4697L6.96967 16.4697L8.03033 17.5303ZM13.0303 12.5303L18.0303 7.53033L16.9697 6.46967L11.9697 11.4697L13.0303 12.5303ZM11.9697 12.5303L16.9697 17.5303L18.0303 16.4697L13.0303 11.4697L11.9697 12.5303ZM13.0303 11.4697L8.03033 6.46967L6.96967 7.53033L11.9697 12.5303L13.0303 11.4697Z"></path>
                            </svg>
                            <p>Remove</p>
                        </button>
                    </div>
                )}
            </div>
        </CP>
    );
}
