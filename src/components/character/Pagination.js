import React from "react";

const Pagination = (props) => {
  return (
    <div className="inline-flex">
      <button
        className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l"
        onClick={props.handlePrev}
      >
        Prev
      </button>
      <button
        className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r"
        onClick={props.handleNext}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
