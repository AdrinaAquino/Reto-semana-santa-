import React from "react";
export default function NavBar() {
  return (
    <>
      <div className="w-screen h-40 overflow-hidden">
        <img
          src="/hero-image-github-profile.jpg"
          alt=""
          className=" w-full h-full object-cover"
        />
      </div>
      <div className="absolute top-4 left-1/2 -translate-x-1/2 flex items-center bg-[#364153] w-70 h-10 rounded-md ">
        <img src="/Search.svg" alt="" className="w-5 mx-3" />
        <input
          type="text"
          name=""
          id=""
          placeholder="username"
          className="text-[#CDD5E0] p-0.5"
        />
      </div>
    </>
  );
}
