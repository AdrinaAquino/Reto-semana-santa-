import React, { useState } from "react";
import NavBar from "./components/NavBar";
import Principal from "./components/Principal";
import InformationPeople from "./components/InformationPeople";
import SearchUser from "./components/SearchUser";

export default function App() {
  const [userData, setUserData] = useState("");
  const [repos, setRepos] = useState([]);
  const [error, setError] = useState(null);

  const gitHubData = async (username) => {
    try {
      setError(null);
      const rs = await fetch(`https://api.github.com/users/${username}`);
      if (!rs.ok) throw new Error("Usuario no encontrado");
      const profileData = await rs.json();
      const reposRes = await fetch(profileData.repos_url);
      const reposData = await reposRes.json();
      setUserData(profileData);
      setRepos(reposData);
    } catch (err) {
      setError(err.message);
      setUserData(null);
      setRepos([]);
    }
  };
  return (
    <div className="bg-[#20293A] h-full">
      <NavBar />
      <SearchUser onUserSelected={gitHubData} />
      <Principal user={userData} />
      <InformationPeople repos={repos} user={userData} />
    </div>
  );
}
