'use client';
import CP from '@/ui/CP';
import { useState } from 'react';

const code = `import { useState } from 'react';

export default function FileUpload1 ()  {
    const [showName,setShowName] = useState({})
    return (
        <div className="my-10 flex justify-center">
            <label className="flex h-full w-max items-end gap-4 rounded-md bg-cyan-500 px-6 py-4 text-white active:ring-4 active:ring-cyan-200" htmlFor="file">
                <svg width={30} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="white"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><g id="Complete"><g id="upload"><g><path d="M3,12.3v7a2,2,0,0,0,2,2H19a2,2,0,0,0,2-2v-7" fill="none" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path><g><polyline data-name="Right" fill="none" id="Right-2" points="7.9 6.7 12 2.7 16.1 6.7" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></polyline><line fill="none" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="12" x2="12" y1="16.3" y2="4.8"></line></g></g></g></g></g>
                </svg>
                <p className="text-lg font-medium"> {showName.name ? showName.name : 'Upload'}</p>
            </label>
            <input onChange={(e) => {
                    if (e.target.files && e.target.files[0]) {
                        const imageFile = e.target.files[0];
                        setShowName(imageFile)
                    }
                }} className="hidden" id="file" type="file"/>
        </div>
    );
};`;

export default function FileUpload1() {
  const [showName, setShowName] = useState({});
  return (
    <CP code={code}>
      <div className="my-10 flex justify-center">
        <label className="flex h-full w-max items-end gap-4 rounded-md bg-cyan-500 px-6 py-4 text-white active:ring-4 active:ring-cyan-200" htmlFor="file">
          <svg width={30} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="white">
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
              <g id="Complete">
                <g id="upload">
                  <g>
                    <path d="M3,12.3v7a2,2,0,0,0,2,2H19a2,2,0,0,0,2-2v-7" fill="none" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                    <g>
                      <polyline data-name="Right" fill="none" id="Right-2" points="7.9 6.7 12 2.7 16.1 6.7" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></polyline>
                      <line fill="none" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="12" x2="12" y1="16.3" y2="4.8"></line>
                    </g>
                  </g>
                </g>
              </g>
            </g>
          </svg>
          <p className="text-lg font-medium"> {showName.name ? showName.name : 'Upload'}</p>
        </label>
        <input
          onChange={(e) => {
            if (e.target.files && e.target.files[0]) {
              const imageFile = e.target.files[0];
              setShowName(imageFile);
            }
          }}
          className="hidden"
          id="file"
          type="file"
        />
      </div>
    </CP>
  );
}
