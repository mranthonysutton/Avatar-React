import React, { useEffect, useState } from "react";
import axiosHook from "../../utils/axiosHook";

const RenderCharacter = () => {
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

  return (
    <div className="char-card">
      {characterData.length > 0 &&
        characterData.map((character) => (
          <div className="char-card" key={character._id}>
            <h3>{character.name}</h3>
            <p>{character.affiliation}</p>
            <img src={character.photoUrl} alt={character.name} />
            <div className="character-buttons">
              <button>Allies</button>
              <button>Enemies</button>
            </div>
          </div>
        ))}
    </div>
  );
};

export default RenderCharacter;