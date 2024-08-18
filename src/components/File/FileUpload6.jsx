'use client';
import { useState } from 'react';
import CP from '@/ui/CP';

const code = `import { useState } from 'react';

export default function FileUpload6 (){
  const [showName, setShowName] = useState([]);
  console.log(showName);

  return (
    <div className=" m-10 w-full max-w-[500px] rounded-lg border border-black/5 p-10 shadow-lg">
      <label htmlFor="file6">
        <div className="flex flex-col items-center justify-center gap-8 rounded-lg border border-dashed border-black/50 p-10">
          <svg width={35} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="white"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><g id="Complete"><g id="upload"> <g><path d="M3,12.3v7a2,2,0,0,0,2,2H19a2,2,0,0,0,2-2v-7" fill="none" stroke="#2E2E30" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path><g> <polyline data-name="Right" fill="none" id="Right-2" points="7.9 6.7 12 2.7 16.1 6.7" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></polyline> <line fill="none" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="12" x2="12" y1="16.3" y2="4.8"></line></g></g></g></g></g></svg>
          <div className="mx-auto w-max rounded-lg bg-black px-4 py-2 font-medium text-white">Browse</div>
        </div>
      </label>
      <input onChange={(e) => {
          if (e.target.files && e.target.files[0]) {
            const imageFile = e.target.files[0];
            setShowName([...showName, imageFile]);
          }
        }} className="hidden" id="file6" type="file"
      />
      <div className="">
        {showName?.map((perFile, idx) => (
          <div className="pt-4" key={idx}>
            <div className="flex items-center gap-4">
              <div className="w-[10%] ">
                <svg width={45} viewBox="-3 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="#000000"><g strokeWidth="0"></g><g strokeLinecap="round" strokeLinejoin="round"></g><g><g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"><g id="Icon-Set" transform="translate(-154.000000, -99.000000)" fill="#000000"><path d="M174,107 C172.896,107 172,106.104 172,105 L172,101 L178,107 L174,107 L174,107 Z M178,127 C178,128.104 177.104,129 176,129 L158,129 C156.896,129 156,128.104 156,127 L156,103 C156,101.896 156.896,101 158,101 L169.972,101 C169.954,103.395 170,105 170,105 C170,107.209 171.791,109 174,109 L178,109 L178,127 L178,127 Z M172,99 L172,99.028 C171.872,99.028 171.338,98.979 170,99 L158,99 C155.791,99 154,100.791 154,103 L154,127 C154,129.209 155.791,131 158,131 L176,131 C178.209,131 180,129.209 180,127 L180,109 L180,107 L172,99 L172,99 Z" id="file-document"></path></g></g></g></svg>
              </div>
              <div className="w-[90%] space-y-1">
                <p className="flex items-center gap-px font-medium">
                  <span className="truncate ">{perFile?.name}</span>
                </p>
                <p className="text-gray-600">
                  <span>{(perFile?.size / 1024).toFixed(1)} KB</span> <span className="mr-4 text-gray-500">({perFile?.type})</span>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

`;
export default function FileUpload6() {
    const [showName, setShowName] = useState([]);

    return (
        <CP code={code}>
            <div className="w-full max-w-[500px] rounded-lg border border-black/5 bg-white p-10 shadow-lg">
                <label htmlFor="file6">
                    <div className="flex flex-col items-center justify-center gap-8 rounded-lg border border-dashed border-black/50 p-10">
                        <svg width={35} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="white">
                            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                            <g id="SVGRepo_iconCarrier">
                                <g id="Complete">
                                    <g id="upload">
                                        <g>
                                            <path d="M3,12.3v7a2,2,0,0,0,2,2H19a2,2,0,0,0,2-2v-7" fill="none" stroke="#2E2E30" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                                            <g>
                                                <polyline
                                                    data-name="Right"
                                                    fill="none"
                                                    id="Right-2"
                                                    points="7.9 6.7 12 2.7 16.1 6.7"
                                                    stroke="black"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                ></polyline>
                                                <line fill="none" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="12" x2="12" y1="16.3" y2="4.8"></line>
                                            </g>
                                        </g>
                                    </g>
                                </g>
                            </g>
                        </svg>
                        <div className="mx-auto w-max rounded-lg bg-black px-4 py-2 font-medium text-white">Browse</div>
                    </div>
                </label>
                <input
                    onChange={(e) => {
                        if (e.target.files && e.target.files[0]) {
                            const imageFile = e.target.files[0];
                            setShowName([...showName, imageFile]);
                        }
                    }}
                    className="hidden"
                    id="file6"
                    type="file"
                />
                <div className="">
                    {showName?.map((perFile, idx) => (
                        <div className="pt-4" key={idx}>
                            <div className="flex items-center gap-4">
                                <div className="w-[10%]">
                                    <svg width={45} viewBox="-3 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="#000000">
                                        <g strokeWidth="0"></g>
                                        <g strokeLinecap="round" strokeLinejoin="round"></g>
                                        <g>
                                            <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                                <g id="Icon-Set" transform="translate(-154.000000, -99.000000)" fill="#000000">
                                                    <path
                                                        d="M174,107 C172.896,107 172,106.104 172,105 L172,101 L178,107 L174,107 L174,107 Z M178,127 C178,128.104 177.104,129 176,129 L158,129 C156.896,129 156,128.104 156,127 L156,103 C156,101.896 156.896,101 158,101 L169.972,101 C169.954,103.395 170,105 170,105 C170,107.209 171.791,109 174,109 L178,109 L178,127 L178,127 Z M172,99 L172,99.028 C171.872,99.028 171.338,98.979 170,99 L158,99 C155.791,99 154,100.791 154,103 L154,127 C154,129.209 155.791,131 158,131 L176,131 C178.209,131 180,129.209 180,127 L180,109 L180,107 L172,99 L172,99 Z"
                                                        id="file-document"
                                                    ></path>
                                                </g>
                                            </g>
                                        </g>
                                    </svg>
                                </div>
                                <div className="w-[90%] space-y-1">
                                    <p className="flex items-center gap-px font-medium">
                                        <span className="truncate">{perFile?.name}</span>
                                    </p>
                                    <p className="text-gray-600">
                                        <span>{(perFile?.size / 1024).toFixed(1)} KB</span> <span className="mr-4 text-gray-500">({perFile?.type})</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </CP>
    );
}
