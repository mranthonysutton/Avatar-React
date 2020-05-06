import React, { useState } from "react";
import RenderCharacter from "./RenderCharacter";
import Pagination from "./Pagination";
import Search from "./Search";

const Character = () => {
  const [pagination, setPagination] = useState(1);
  const [searchName, setSearchName] = useState("");

  const handlePrev = (event) => {
    event.preventDefault();
    if (pagination > 1) {
      setPagination(pagination - 1);
    }
  };

  const handleNext = (event) => {
    event.preventDefault();
    setPagination(pagination + 1);
  };

  const changeCharName = (event) => {
    event.preventDefault();
    setSearchName(event.target.name.value);
  };

  return (
    <div className="container">
      <h1 className="text-center text-4xl">Avatar Characters</h1>
      <Search charName={changeCharName} />
      <RenderCharacter pagination={pagination} searchName={searchName} />
      <Pagination handlePrev={handlePrev} handleNext={handleNext} />
    </div>
  );
};

export default Character;
