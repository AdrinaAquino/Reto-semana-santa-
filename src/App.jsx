import React from "react";
import NavBar from "./components/NavBar";
import Principal from "./components/Principal";
import InformationPeople from "./components/InformationPeople";

export default function App() {
  return (
    <div className="bg-[#20293A]">
      <NavBar />
      <Principal />
      <InformationPeople />
    </div>
  );
}
