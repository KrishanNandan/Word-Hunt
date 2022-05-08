import React from "react";
import classes from "./Definations.module.css";
const Defination = ({ word, meanings, category }) => {
  return (
    <div className={classes.meanings}>
      {/* audio---------------------------- */}
      {meanings[0] && word && category === "en" && (
        <audio
          src={meanings[0].phonetics[0] && meanings[0].phonetics[0].audio}
          className={classes.audio}
          controls
          autoPlay
        >
          Your browser does not support the audio element.
        </audio>
      )}
      {/* audio---------------------------- */}
      {word === "" ? (
        <span className={classes.subtitle}>
          Start by typing a word in search
        </span>
      ) : (
        meanings.map((mean) => {
          return mean.meanings.map((item) =>
            item.definitions.map((def) => (
              <div
                className="singleMean"
                style={{
                  backgroundColor: "silver",
                  color: "black",
                  padding: "5px",
                }}
              >
                <b>{def.definition}</b>
                {def.synonyms.length > 0 && (
                  <span>
                    <br />
                    <b>Synonyms:</b>
                    {def.synonyms.map((s1) => ` ${s1} `)}
                  </span>
                )}
                {def.example && (
                  <span>
                    <br />
                    <b>Example:</b> {def.example}
                  </span>
                )}
                <hr style={{ backgroundColor: "black", width: "100%" }} />
              </div>
            ))
          );
        })
      )}
    </div>
  );
};

export default Defination;
