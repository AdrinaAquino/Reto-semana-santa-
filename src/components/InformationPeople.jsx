import React from "react";
import Mit from "./Mit";
export default function InformationPeople() {
  return (
    <div className="bg-[#20293A] h-screen ">
      <div className="flex flex-col items-center w-full text-[#CDD5E0] ">
        <div className=" w-85/100 my-5">
          <h1 className="text-3xl">GitHub</h1>
          <p>How people buid software</p>
        </div>
      </div>
      <div className="text-xs grid place-items-center grid-cols-1 items-center text-[#97A3B6] md:grid-cols-2">
        <div className="mb-6 p-3 repo w-85/100 rounded-xl">
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
