'use client';
import CP from '@/ui/CP';
import React, { useState } from 'react';

const code = `
import React, { useState } from 'react';

 export default function FileUpload2 (){
  const [showName, setShowName] = useState({});
  return (
    <div className="space-y-4 flex flex-col justify-center">
      {/* cyan  - blue  */}
      <div>
        <label htmlFor="type2-1" className="flex max-w-[380px] md:w-[380px]">
          <div className="w-fit whitespace-nowrap  bg-cyan-500 px-2 py-1 text-sm text-white">Choose File</div>
          <div className=" flex w-full max-w-[380px] items-center  border-b-[2px] border-cyan-500 px-2 text-sm font-medium text-gray-400">{showName.name ? showName.name : 'No File Chosen'}</div>
        </label>
        <input
          onChange={(e) => {
            if (e.target.files && e.target.files[0]) { const imageFile = e.target.files[0]; setShowName(imageFile);
            }
          }} className="hidden" type="file" name="" id="type2-1"
        />
      </div>
      {/* amber - yellow  */}
      <div>
        <label htmlFor="type2-2" className="flex w-full max-w-[380px] md:w-[380px]">
          <div className="w-fit whitespace-nowrap bg-amber-500 px-3 py-2 text-white">Choose File</div>
          <div className="flex w-full max-w-[380px] items-center border-b-[2px] border-amber-500 px-2 font-medium text-gray-400">{showName.name ? showName.name : 'No File Chosen'}</div>
        </label>
        <input
          onChange={(e) => {
            if (e.target.files && e.target.files[0]) {
              const imageFile = e.target.files[0];
              setShowName(imageFile);
            }
          }} className="hidden" type="file" name="" id="type2-2"/>
      </div>
      {/* purple - color  */}
      <div>
        <label htmlFor="type2-3" className="flex w-full max-w-[380px] md:w-[380px]">
          <div className="w-fit whitespace-nowrap  bg-purple-500 px-4 py-3 text-lg text-white">Choose File</div>
          <div className=" flex w-full max-w-[380px] items-center border-b-[2px] border-purple-500 px-2 font-medium text-gray-400">{showName.name ? showName.name : 'No File Chosen'}</div>
        </label>
        <input
          onChange={(e) => {
            if (e.target.files && e.target.files[0]) {
              const imageFile = e.target.files[0];
              setShowName(imageFile);
            }
          }} className="hidden" type="file" name="" id="type2-3"/>
      </div>
    </div>
  );
};
`;
export default function FileUpload2() {
  const [showName, setShowName] = useState({});
  return (
    <CP code={code}>
      <div className="space-y-4 flex flex-col items-center">
        {/* cyan  - blue  */}
        <div>
          <label htmlFor="type2-1" className="flex w-[380px]">
            <div className="w-fit whitespace-nowrap  bg-cyan-500 px-2 py-1 text-sm text-white">Choose File</div>
            <div className=" flex w-full max-w-[380px] items-center  border-b-[2px] border-cyan-500 px-2 text-sm font-medium text-gray-400">{showName.name ? showName.name : 'No File Chosen'}</div>
          </label>
          <input
            onChange={(e) => {
              if (e.target.files && e.target.files[0]) {
                const imageFile = e.target.files[0];
                setShowName(imageFile);
              }
            }}
            className="hidden"
            type="file"
            name=""
            id="type2-1"
          />
        </div>
        {/* amber - yellow  */}
        <div>
          <label htmlFor="type2-2" className="flex w-full max-w-[380px] md:w-[380px]">
            <div className="w-fit whitespace-nowrap bg-amber-500 px-3 py-2 text-white flex-1">Choose File</div>
            <div className="flex w-full max-w-[380px]  items-center border-b-[2px] border-amber-500 px-2 font-medium text-gray-400">{showName.name ? showName.name : 'No File Chosen'}</div>
          </label>
          <input
            onChange={(e) => {
              if (e.target.files && e.target.files[0]) {
                const imageFile = e.target.files[0];
                setShowName(imageFile);
              }
            }}
            className="hidden"
            type="file"
            name=""
            id="type2-2"
          />
        </div>
        {/* purple - color  */}
        <div>
          <label htmlFor="type2-3" className="flex w-full max-w-[380px] md:w-[380px]">
            <div className="w-fit whitespace-nowrap  bg-purple-500 px-4 py-3 text-lg text-white">Choose File</div>
            <div className=" flex w-full max-w-[380px] items-center border-b-[2px] border-purple-500 px-2 font-medium text-gray-400">{showName.name ? showName.name : 'No File Chosen'}</div>
          </label>
          <input
            onChange={(e) => {
              if (e.target.files && e.target.files[0]) {
                const imageFile = e.target.files[0];
                setShowName(imageFile);
              }
            }}
            className="hidden"
            type="file"
            name=""
            id="type2-3"
          />
        </div>
      </div>
    </CP>
  );
}
