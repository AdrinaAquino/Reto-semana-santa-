import React from "react";
export default function NavBar() {
  return (
    <>
      <div className="w-screen h-40 overflow-hidden md:h-50 ">
        <img
          src="/hero-image-github-profile.jpg"
          alt=""
          className=" w-full h-full object-cover"
        />
      </div>
      <div className="absolute top-4 left-1/2 -translate-x-1/2 flex items-center bg-[#364153] w-70 h-10 rounded-md md:w-100 md:top-8">
        <img src="/Search.svg" alt="" className="w-5 mx-3" />
        <input
          type="text"
          name="username"
          id=""
          placeholder="username"
          className="text-[#CDD5E0] p-0.5 w-80/100"
        />
      </div>
      <div className="z-10 w-70 absolute top-16 left-1/2 -translate-x-1/2 flex items-center  bg-[#111729] rounded-md md:w-100 md:top-20">
        <img
          src="/github-mark-white.png"
          alt=""
          className="w-15 bg-[#000000] rounded-xl border-6 border-[#111729] md:left-14 lg:left-26"
        />
        <div className=" w-85/100 my-5 ">
          <h1 className="font-semibold text-[#CDD5E0]">GitHub</h1>
          <p className="text-xs text-[#97A3B6]">How people buid software</p>
        </div>
      </div>
    </>
  );
}
