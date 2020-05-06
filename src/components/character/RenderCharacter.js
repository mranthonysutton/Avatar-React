import React, { useEffect, useState } from "react";
import axiosHook from "../../utils/axiosHook";

const RenderCharacter = (props) => {
  const [characterData, setCharacterData] = useState({});
  const [perPage, setPerPage] = useState(5);

  useEffect(() => {
    axiosHook()
      .get(`/api/v1/characters?page=${props.pagination}&perPage=${perPage}`)
      .then((response) => {
        setCharacterData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [props.pagination]);

  return (
    <div className="flex flex-wrap align-center justify-center">
      {characterData.length > 0 &&
        characterData.map((character) => (
          <div
            className="w-full sm:w-2/5 md:w-1/4 border-2 border-solid border-red-900 mx-1 my-2 rounded py-1 px-1"
            key={character._id}
          >
            <h3>{character.name}</h3>
            <p>{character.affiliation}</p>
            <img src={character.photoUrl} alt={character.name} />
            <div className="">
              <button className="">Allies</button>
              <button>Enemies</button>
            </div>
          </div>
        ))}
    </div>
  );
};

export default RenderCharacter;
