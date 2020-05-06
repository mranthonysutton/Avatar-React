import React, { useState } from "react";

const Search = (props) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };
  return (
    <div className="container">
      <form className="w-full max-w-sm inline-block" onSubmit={props.charName}>
        <input
          className="w-full rounded shadow-md px-1 py-2 font-bold"
          type="text"
          name="name"
          placeholder="Search character name..."
          onChange={handleChange}
          value={searchTerm}
        />
        <button className="bg-red-400 hover:bg-red-300 rounded py-2 px-1">
          Search
        </button>
      </form>
    </div>
  );
};

export default Search;
