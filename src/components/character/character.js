import React, { useEffect, useState } from "react";
import axiosHook from "../../utils/axiosHook";

const Character = () => {
  const [characterData, setCharacterData] = useState({});

  useEffect(() => {
    axiosHook()
      .get("/api/v1/characters")
      .then((response) => {
        setCharacterData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  console.log(characterData);

  return (
    <div>
      <h3>Avatar Characters</h3>
    </div>
  );
};

export default Character;
