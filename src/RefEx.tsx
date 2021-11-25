import React, { useState, useEffect, useRef } from "react";
import "./App.css";

const RefSearch = () => {
  const [search, setSearch] = useState("");
    const _searchRef = useRef<any>({});
  
  const _handleSubmit = () => {
    console.log({ "Search result is": _searchRef.current.value });
  };
  useEffect(() => {
    _searchRef.current.focus();
  });
  return (
    <div className="App">
      <h1>Search using UseRef</h1>
      {/* <input
        type="text"
        placeholder="Search your user"
        onChange={(e: any) => setSearch(e.target.value)}
      /> */}
      <input type="text" placeholder="Search your user" ref={_searchRef} />
      <button className="useRefBtn" onClick={_handleSubmit}>
        Save Details
      </button>
    </div>
  );
};

export default RefSearch ;
