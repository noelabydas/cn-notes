import React from "react";
import Index from "./index";
import Notes from "./notes";
import { notes } from "../data/notes-object";

const Content = ({ activeNoteID, showNav, handleClick }) => {
  return (
    <div
      className="row"
      style={{ width: "80%", margin: "0 auto", paddingTop: "15px" }}
    >
      {!showNav && (
        <div className="col-3" style={{ borderRight: "1px solid #eee" }}>
          <Index
            notes={notes}
            activeNoteID={activeNoteID}
            handleClick={handleClick}
          />
        </div>
      )}
      <div className="col">
        <Notes note={notes[activeNoteID].content} />
      </div>
    </div>
  );
};

export default Content;
