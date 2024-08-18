'use client'
import CP from '@/ui/CP';
import { useState } from 'react';


const code = `import { useState } from 'react';

export default function FileUpload3 () {
  const [showName1, setShowName1] = useState({});
  return (
    <div className="my-10 space-y-4">
      <div>
        <label htmlFor="type3-1" className="flex w-full max-w-[140px]">
          <p className="w-max truncate rounded-full hover:shadow-[0px_0px_4px_0.5px] border-[3px] border-purple-500 px-4 py-2 text-sm font-medium text-purple-500 shadow-md">{showName1.name ? showName1.name : 'CHOOSE FILE'}</p>
        </label>
        <input
          onChange={(e) => {
            if (e.target.files && e.target.files[0]) {
              const imageFile = e.target.files[0];
              setShowName1(imageFile);
            }
          }} className="hidden" type="file" name="" id="type3-1"/>
      </div>
      <div>
        <label htmlFor="type3-2" className="flex w-full max-w-[170px]">
          <p className="w-max truncate rounded-full hover:shadow-[0px_0px_4px_0.5px] border-[3px] border-green-500 px-6 py-3 font-medium text-green-500 shadow-md">{showName1.name ? showName1.name : 'CHOOSE FILE'}</p>
        </label>
        <input
          onChange={(e) => {
            if (e.target.files && e.target.files[0]) {
              const imageFile = e.target.files[0];
              setShowName1(imageFile);
            }
          }} className="hidden" type="file" name="" id="type3-2"/>
      </div>
      <div>
        <label htmlFor="type3-3" className="flex w-full max-w-[200px]">
          <p className="r w-full truncate rounded-full hover:shadow-[0px_0px_4px_0.5px] border-[3px] border-cyan-500 px-8 py-3 text-lg font-medium text-cyan-500 shadow-md">{showName1.name ? showName1.name : 'CHOOSE FILE'}</p>
        </label>
        <input
          onChange={(e) => {
            if (e.target.files && e.target.files[0]) {
              const imageFile = e.target.files[0];
              setShowName1(imageFile);
            }
          }} className="hidden" type="file" name="" id="type3-3"/>
      </div>
    </div>
  );
};

`;
export default function FileUpload3 () {
  const [showName1, setShowName1] = useState({});
  return (
    <CP code={code}>
      <div className="my-10 space-y-4 flex flex-col items-center">
        <div>
          <label htmlFor="type3-1" className="flex w-full max-w-[140px]">
            <p className="w-max truncate rounded-full hover:shadow-[0px_0px_4px_0.5px] border-[3px] border-purple-500 px-4 py-2 text-sm font-medium text-purple-500 shadow-md">{showName1.name ? showName1.name : 'CHOOSE FILE'}</p>
          </label>
          <input
            onChange={(e) => {
              if (e.target.files && e.target.files[0]) {
                const imageFile = e.target.files[0];
                setShowName1(imageFile);
              }
            }}
            className="hidden"
            type="file"
            name=""
            id="type3-1"
          />
        </div>
        <div>
          <label htmlFor="type3-2" className="flex w-full max-w-[170px]">
            <p className="w-max truncate rounded-full hover:shadow-[0px_0px_4px_0.5px] border-[3px] border-green-500 px-6 py-3 font-medium text-green-500 shadow-md">{showName1.name ? showName1.name : 'CHOOSE FILE'}</p>
          </label>
          <input
            onChange={(e) => {
              if (e.target.files && e.target.files[0]) {
                const imageFile = e.target.files[0];
                setShowName1(imageFile);
              }
            }}
            className="hidden"
            type="file"
            name=""
            id="type3-2"
          />
        </div>
        <div>
          <label htmlFor="type3-3" className="flex w-full max-w-[200px]">
            <p className="r w-full truncate rounded-full hover:shadow-[0px_0px_4px_0.5px] border-[3px] border-cyan-500 px-8 py-3 text-lg font-medium text-cyan-500 shadow-md">{showName1.name ? showName1.name : 'CHOOSE FILE'}</p>
          </label>
          <input
            onChange={(e) => {
              if (e.target.files && e.target.files[0]) {
                const imageFile = e.target.files[0];
                setShowName1(imageFile);
              }
            }}
            className="hidden"
            type="file"
            name=""
            id="type3-3"
          />
        </div>
      </div>
    </CP>
  );
};

