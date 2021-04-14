import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(note) {
    setNotes((prev) => {
      return [...prev, note];
    });
    // note.content = "";
    // note.title = "";
  }

  function deletNote(id) {
    setNotes((prev) => {
      return prev.filter((note, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea addNote={addNote} />
      <div>
        {notes.map((note, index) => {
          return (
            <Note
              key={index}
              id={index}
              title={note.title}
              content={note.content}
              deletNote={deletNote}
            />
          );
        })}
      </div>
      <Footer />
    </div>
  );
}

export default App;
