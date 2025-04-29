import React from "react";

export default function Principal({ user }) {
  return (
    <div className="relative w-full h-65 md:h-15">
      <img
        src={user.avatar_url || "/github-mark-white.png"}
        alt=""
        className="absolute -top-8 left-6 w-24 bg-[#000000] rounded-xl border-6 border-[#20293A] md:left-14 lg:left-26"
      />
      <div className="absolute top-20 left-6 h-40 flex flex-col justify-between text-[#CDD5E0] md:flex-row md:gap-5 md:top-3 md:left-45 md:h-0 lg:left-60">
        <div className="flex items-center  w-38 h-10 bg-[#111729] rounded-md divide-x-1 divide-[#364153]">
          <span className="text-center p-1 text-xs w-6/10 h-7">followers</span>
          <span className="text-center p-1 text-xs w-4/10 h-7">
            {user.followers ?? "N/A"}
          </span>
        </div>
        <div className="flex items-center  min-w-32 w-32 h-10 bg-[#111729] rounded-md divide-x-1 divide-[#364153]">
          <span className="text-center p-1 text-xs w-2/3 h-7">following</span>
          <span className="text-center p-1 text-xs w-1/3 h-7">
            {user.following ?? "N/A"}
          </span>
        </div>
        <div className="flex items-center  min-w-50 w-50 h-10 bg-[#111729] rounded-md divide-x-1 divide-[#364153]">
          <span className="text-center p-1 text-xs w-1/3 h-7">location</span>
          <p className="text-center p-1 text-xs w-2/3 h-7">
            {user.location ?? "N/A"}
          </p>
        </div>
      </div>
    </div>
  );
}
