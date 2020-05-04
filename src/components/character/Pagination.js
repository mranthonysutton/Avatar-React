import React from "react";

const Pagination = (props) => {
  return (
    <div>
      <button onClick={props.handlePrev}>Prev</button>
      <button onClick={props.handleNext}>Next</button>
    </div>
  );
};

export default Pagination;
