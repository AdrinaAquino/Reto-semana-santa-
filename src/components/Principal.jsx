import React from "react";

export default function Principal() {
  return (
    <div className="relative w-full h-65 bg-[#20293A]">
      <img
        src="/github-mark-white.png"
        alt=""
        className="absolute -top-8 left-8 w-22 bg-[#000000] rounded-xl border-6 border-[#20293A]"
      />
      <div className="absolute top-20 left-7 h-40 flex flex-col justify-between text-[#CDD5E0] ">
        <div className="flex items-center  w-38 h-10 bg-[#111729] rounded-md divide-x-1 divide-[#364153]">
          <span className="text-center p-1 text-xs w-6/10 h-7">followers</span>
          <span className="text-center p-1 text-xs w-4/10 h-7">22222</span>
        </div>
        <div className="flex items-center  min-w-32 w-32 h-10 bg-[#111729] rounded-md divide-x-1 divide-[#364153]">
          <span className="text-center p-1 text-xs w-2/3 h-7">following</span>
          <span className="text-center p-1 text-xs w-1/3 h-7">0</span>
        </div>
        <div className="flex items-center  min-w-50 h-10 bg-[#111729] rounded-md divide-x-1 divide-[#364153]">
          <span className="text-center p-1 text-xs w-1/3 h-7">location</span>
          <span className="text-center p-1 text-xs w-2/3 h-7">
            san francisco,caa
          </span>
        </div>
      </div>
    </div>
  );
}
