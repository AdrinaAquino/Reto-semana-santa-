import React, { useState } from "react";
import Mit from "./Mit";
export default function InformationPeople({ repos, user }) {
  const [showAll, setShowAll] = useState(false);
  const displayedRepos = showAll ? repos : repos.slice(0, 4);
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col items-center w-full text-[#CDD5E0] ">
        <div className=" w-85/100 my-5">
          <h1 className="text-3xl">{user.login || user.name}</h1>
          <p>How people buid software</p>
        </div>
      </div>
      <div className="w-85/100 text-xs grid grid-cols-1 text-[#97A3B6] md:grid-cols-2 gap-5">
        {displayedRepos.map((repo) => (
          <Mit key={repo.id} repo={repo} />
        ))}
      </div>
      {repos.length > 4 && !showAll && (
        <button
          className="text-center w-full text-[#97A3B6] hover:underline cursor-pointer"
          onClick={() => setShowAll(true)}
        >
          View all repositories
        </button>
      )}
    </div>
  );
}
