import React, { useState, useEffect } from "react";
import axios from "axios";

export default function SearchUser({ onUserSelected }) {
  const [query, setQuery] = useState("");
  const [users, setUsers] = useState([]);
  const [funcionaSearch, setfuncionaSearch] = useState(false);
  const [error, setError] = useState("");
  async function getUsuarios() {
    try {
      const rs = await axios.get(
        `https://api.github.com/search/users?q=${query}`
      );
      setUsers(rs.data.items);
    } catch (error) {
      setError(error.message);
      setUsers([]);
    } finally {
      setfuncionaSearch(false);
    }
  }
  useEffect(() => {
    if (funcionaSearch) {
      getUsuarios();
    }
  }, [funcionaSearch, query]);
  const handleKeyDown = (e) => {
    if (e.key === "Enter" && query.trim() !== "") {
      setfuncionaSearch(true);
    }
  };

  return (
    <>
      <div className="absolute top-4 left-1/2 -translate-x-1/2 flex items-center bg-[#364153] w-70 h-10 rounded-md md:w-100 md:top-8">
        <img src="/Search.svg" alt="" className="w-5 mx-3" />
        <input
          type="text"
          name="username"
          id=""
          placeholder="username"
          className="text-[#CDD5E0] p-0.5 w-80/100"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
          }}
          onKeyDown={handleKeyDown}
        />
      </div>
      {users.length > 0 && (
        <div className="z-10 w-70 absolute top-16 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 bg-[#111729] rounded-md md:w-100 md:top-20 ">
          <div className=" w-85/100  ">
            <ul className="mt-4 bg-[#2b3344] w-full rounded-md max-h-60 overflow-auto">
              {users.map((user) => (
                <li
                  key={user.id}
                  className="p-2 border-b border-[#444c5a] cursor-pointer"
                  onClick={() => {
                    onUserSelected(user.login);
                    setUsers([]);
                  }}
                >
                  <div className="flex gap-2">
                    <img
                      src={user.avatar_url}
                      alt={user.login}
                      className="w-6 h-6 rounded-full"
                    />
                    <p>{user.login}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
}
