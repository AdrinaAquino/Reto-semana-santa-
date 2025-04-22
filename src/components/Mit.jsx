import React from "react";

export default function Mit() {
  return (
    <div className=" mb-6 p-3 repo w-85/100 rounded-xl">
      <span className="text-[#CDD5E0] font-semibold text-sm">
        accessibility-alt-text-bot
      </span>
      <p className="my-3">
        An action to remind users to add alt text on Isues, Pull Requests, and
        Discussions
      </p>
      <div className="flex items-center justify-center gap-2">
        <img src="public/Chield_alt.svg" alt="" />
        <span>MIT</span>
        <img src="public/Nesting.svg" alt="" />
        <span>5</span>
        <img src="public/star.svg" alt="" />
        <span>777</span>
        <p className="text-[9px]">
          updated <span>4</span> days ago
        </p>
      </div>
    </div>
  );
}
