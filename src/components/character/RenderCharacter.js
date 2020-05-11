import React, { useEffect, useState } from "react";
import axiosHook from "../../utils/axiosHook";

const RenderCharacter = (props) => {
  const [characterData, setCharacterData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axiosHook()
      .get(
        `/api/v1/characters?page=${props.pagination}&perPage=${props.results}&name=${props.searchName}&affiliation=${props.affiliation}`
      )
      .then((response) => {
        setCharacterData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [props]);

  return (
    <div className="flex flex-wrap align-center justify-center">
      {loading ? (
        <h1 className="text-5xl pt-5">Loading...</h1>
      ) : characterData.length === 0 ? (
        <h1 className="text-5xl">No character data found</h1>
      ) : (
        characterData.map((character) => (
          <div
            className="w-full sm:w-2/5 md:w-1/4 border-2 border-solid border-indigo-900 mx-1 my-2 rounded py-1 px-1 text-gray-700"
            key={character._id}
          >
            <div className="flex flex-col align-center text-center mb-2">
              <h3 className="text-2xl font-bold">{character.name}</h3>
              <p className="text-xs italic">{character.affiliation}</p>
              <img
                className="rounded mb-2"
                src={character.photoUrl}
                alt={character.name}
              />
            </div>
            <div className="container flex-col mx-2">
              <div className="mb-2">
                <h4 className="text-lg font-medium underline">Allies</h4>
                <ul className="text-sm">{character.allies}</ul>
              </div>
              <div>
                <h4 className="text-lg font-medium underline">Enemies</h4>
                <ul className="text-sm">{character.enemies}</ul>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default RenderCharacter;
