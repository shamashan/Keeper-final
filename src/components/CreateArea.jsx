import React, { useState } from "react";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handleTitle(event) {
    const title = event.target.value;
    setNote((prev) => {
      return { ...prev, title: title };
    });
  }

  function handleContent(event) {
    const content = event.target.value;
    setNote((prev) => {
      return { ...prev, content: content };
    });
  }
  return (
    <div>
      <form
        onSubmit={(event) => {
          props.addNote(note);
          event.preventDefault();
          setNote({
            title: "",
            content: ""
          });
        }}
      >
        <input
          onChange={handleTitle}
          name="title"
          placeholder="Title"
          value={note.title}
        />
        <textarea
          onChange={handleContent}
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={note.content}
        />
        <button type="submit">+</button>
      </form>
    </div>
  );
}

export default CreateArea;
