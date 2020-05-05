import React, { useState } from "react";
import RenderCharacter from "./RenderCharacter";
import Pagination from "./Pagination";

const Character = () => {
  const [pagination, setPagination] = useState(1);
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

  return (
    <div>
      <h1 className="text-center text-4xl">Avatar Characters</h1>
      <Pagination handlePrev={handlePrev} handleNext={handleNext} />
      <RenderCharacter pagination={pagination} />
      <Pagination handlePrev={handlePrev} handleNext={handleNext} />
    </div>
  );
};

export default Character;
