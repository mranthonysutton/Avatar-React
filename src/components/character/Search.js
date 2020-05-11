import React, { useState } from "react";

const Search = (props) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="container">
      <form className="inline w-full max-w-sm" onSubmit={props.charName}>
        <input
          className="w-full rounded shadow-md px-1 py-2 font-bold"
          type="text"
          name="name"
          placeholder="Search character name..."
          onChange={handleChange}
          value={searchTerm}
        />
        <div className="relative">
          <select
            onChange={props.affiliation}
            className="block appearance-none w-full bg-gray-200 rounded leading-tight focus:outline-none py-2 px-3 my-3"
          >
            <option value="">Affiliation</option>
            <option value="Water+Tribe">Water Tribe</option>
            <option value="Fire+Nation">Fire Nation</option>
            <option value="Air+Nomads">Air Nomads</option>
            <option value="Earth+Kingdom">Earth Kingdom</option>
          </select>
        </div>
        <div className="relative">
          <select
            onChange={props.changeResults}
            className="bloc appearance-none w-full bg-gray-200 rounded leading-tight focus:outline-none py-2 px-3 my-3"
          >
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={15}>15</option>
            <option value={20}>20</option>
          </select>
        </div>
        <button className="bg-red-400 hover:bg-red-300 rounded py-2 px-1">
          Search
        </button>
      </form>
    </div>
  );
};

export default Search;
