import React from "react";

const RenderCharacter = () => {
  return (
    <div className="char-card">
      <h3>Character Name</h3>
      <p>Character Affiliation</p>
      <p>Char image</p>
      <div className="character-buttons">
        <button>Allies</button>
        <button>Enemies</button>
      </div>
    </div>
  );
};

export default RenderCharacter;

