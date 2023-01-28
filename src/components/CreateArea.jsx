import React, { useState } from "react";

function CreateArea(props) {
  const [newNote, setNewNote] = useState({
    title: "",
    content: ""
  });
  function setNote(event) {
    const { name, value } = event.target;

    setNewNote((prevValue) => {
      if (name === "title") {
        return {
          title: value,
          content: prevValue.content
        };
      } else if (name === "content") {
        return {
          title: prevValue.title,
          content: value
        };
      }
    });
  }

  return (
    <div>
      <form>
        <input
          onChange={setNote}
          name="title"
          placeholder="Title"
          value={newNote.title}
        />
        <textarea
          onChange={setNote}
          name="content"
          placeholder="Take a note..."
          value={newNote.content}
          rows="3"
        />
        <button
          onClick={(event) => {
            props.onAdd(newNote);
            setNewNote({ title: "", content: "" });
            event.preventDefault();
          }}
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
