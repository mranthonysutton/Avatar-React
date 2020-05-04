import React, { useState } from "react";
import axiosHook from "../../utils/axiosHook";

const Character = () => {
  const [characterData, setCharacterData] = useState({});

  axiosHook()
    .get("/api/v1/characters")
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.error(error);
    });

  return (
    <div>
      <h3>Avatar Characters</h3>
    </div>
  );
};

export default Character;
