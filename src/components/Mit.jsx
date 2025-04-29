import React from "react";

export default function Mit({ repo }) {
  return (
    <div
      className="mb-6 p-3 repo rounded-xl"
      onClick={() => window.open(repo.html_url, "_blank")}
    >
      <span className="text-[#CDD5E0] font-semibold text-sm">{repo.name}</span>
      <p className="my-3">{repo.description}</p>
      <div className="flex items-center gap-2">
        <img src="/Chield_alt.svg" alt="" />
        <span>{repo.license?.name || "Sin licencia"}</span>
        <img src="/Nesting.svg" alt="" />
        <span>{repo.forks_count}</span>
        <img src="/Star.svg" alt="" />
        <span>{repo.stargazers_count}</span>
        <p className="text-[9px]">
          updated <span>{repo.updated_at}</span>
        </p>
      </div>
    </div>
  );
}
