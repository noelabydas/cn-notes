import React from "react";

const Index = ({ notes, activeNoteID, handleClick }) => {
  return (
    <ul className="list-group list-group-flush">
      {notes.map((note) => {
        let className = "list-group-item";
        if (note.id === activeNoteID) className += " active";
        return (
          <li
            key={note.id}
            className={className}
            onClick={() => handleClick(note.id)}
            style={{ cursor: "pointer" }}
          >
            {note.title}
          </li>
        );
      })}
    </ul>
  );
};

export default Index;
