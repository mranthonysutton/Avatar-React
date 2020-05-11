import React, { useState } from "react";

const Search = (props) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="flex flex-wrap justify-center container w-4/5">
      <form className="w-full max-w-lg" onSubmit={props.charName}>
        <input
          className="w-full bg-gray-200 rounded shadow-sm px-2 py-2 font-medium mb-2"
          type="text"
          name="name"
          placeholder="Search character name..."
          onChange={handleChange}
          value={searchTerm}
        />
        <div className="flex">
          <div className="w-full md:w-3/5 mb-3 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 mb-2 text-xs"
              htmlFor="affiliation"
            >
              Affiliation
            </label>

            <select
              id="affiliation"
              onChange={props.affiliation}
              className="appearance-none bg-gray-200 rounded leading-tight focus:outline-none py-2 px-3 shadow-sm"
            >
              <option value="">All</option>
              <option value="Water+Tribe">Water Tribe</option>
              <option value="Fire+Nation">Fire Nation</option>
              <option value="Air+Nomads">Air Nomads</option>
              <option value="Earth+Kingdom">Earth Kingdom</option>
            </select>
          </div>
          <div className="w-full md:w-2/5 mb-3 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 mb-2 text-xs"
              htmlFor="results"
            >
              Per Page
            </label>

            <select
              id="results"
              onChange={props.changeResults}
              className="appearance-none bg-gray-200 rounded leading-tight focus:outline-none py-2 px-3 shadow-sm"
            >
              <option value={5}>5</option>
              <option value={10}>10</option>
              <option value={15}>15</option>
              <option value={20}>20</option>
            </select>
          </div>
        </div>
        <button className="text-indigo-900 bg-indigo-300 hover:bg-indigo-200 rounded py-2 px-1 my-2 w-full">
          Search
        </button>
      </form>
    </div>
  );
};

export default Search;
