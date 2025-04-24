import React from "react";
import Mit from "./Mit";
export default function InformationPeople() {
  return (
    <div className="h-screen flex flex-col items-center">
      <div className="flex flex-col items-center w-full text-[#CDD5E0] ">
        <div className=" w-85/100 my-5">
          <h1 className="text-3xl">GitHub</h1>
          <p>How people buid software</p>
        </div>
      </div>
      <div className="w-85/100 text-xs grid grid-cols-1 text-[#97A3B6] md:grid-cols-2 gap-5">
        <div className="mb-6 p-3 repo rounded-xl ">
          <span className="text-[#CDD5E0] font-semibold text-sm">.github</span>
          <p className="my-3">
            Comunity health files for the @GitHub organization
          </p>
          <div className="flex items-center gap-2">
            <img src="public/Nesting.svg" alt="" />
            <span>2,555</span>
            <img src="public/star.svg" alt="" />
            <span>777</span>
          </div>
          <p className="mt-3 text-[9px]">
            updated <span>4</span> days ago
          </p>
        </div>
        <Mit />
      </div>
      <button className="text-center w-full text-[#97A3B6] hover:underline cursor-pointer">
        View all repositories
      </button>
    </div>
  );
}
