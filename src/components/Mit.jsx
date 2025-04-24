import React from "react";

export default function Mit() {
  return (
    <div className=" mb-6 p-3 repo rounded-xl ">
      <span className="text-[#CDD5E0] font-semibold text-sm">
        accessibility-alt-text-bot
      </span>
      <p className="my-3">
        An action to remind users to add alt text on Isues, Pull Requests, and
        Discussions
      </p>
      <div className="flex items-center gap-2">
        <img src="/Chield_alt.svg" alt="" />
        <span>MIT</span>
        <img src="/Nesting.svg" alt="" />
        <span>5</span>
        <img src="/star.svg" alt="" />
        <span>777</span>
        <p className="text-[9px]">
          updated <span>4</span> days ago
        </p>
      </div>
    </div>
  );
}
