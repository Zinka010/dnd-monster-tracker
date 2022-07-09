const notesContainer = document.getElementById("app");
const addNoteContainer = notesContainer.querySelector(".add-note-container");
const addNoteButton = addNoteContainer.querySelector(".add-note")

getNotes().forEach((note) => {
  const noteElement = createNoteElement(note.id, note.content);
  notesContainer.insertBefore(noteElement, addNoteContainer);
});

addNoteButton.addEventListener("click", () => addNote());

function getNotes() {
  return JSON.parse(localStorage.getItem("stickynotes-notes") || "[]");
  // return JSON.parse("[]");
}

function saveNotes(notes) {
  localStorage.setItem("stickynotes-notes", JSON.stringify(notes));
}

function createNoteElement(id, content) {
  const element = document.createElement("div");
  element.classList.add("note");

  const newContent = document.createElement("textarea");
  newContent.classList.add("note-text-box");

  const newContent2 = document.createElement("button");
  newContent2.innerHTML = "HEAL";
  newContent2.classList.add("note-heal");

  const newContent3 = document.createElement("textarea");
  newContent3.classList.add("note-health-points");

  const newContent4 = document.createElement("button");
  newContent4.innerHTML = "DMG";
  newContent4.classList.add("note-damage");

  element.appendChild(newContent);
  element.appendChild(newContent2);
  element.appendChild(newContent3);
  element.appendChild(newContent4);

  element.value = content;
  element.placeholder = "Empty Sticky Note";

  element.addEventListener("change", () => {
    updateNote(id, element.value);
  });

  element.addEventListener("dblclick", () => {
    const doDelete = confirm(
      "Are you sure you wish to delete this sticky note?"
    );

    if (doDelete) {
      deleteNote(id, element);
    }
  });

  return element;
}

function addNote() {
  const notes = getNotes();
  const noteObject = {
    id: Math.floor(Math.random() * 100000),
    content: ""
  };

  const noteElement = createNoteElement(noteObject.id, noteObject.content);
  notesContainer.insertBefore(noteElement, addNoteContainer);

  notes.push(noteObject);
  saveNotes(notes);
}

function updateNote(id, newContent) {
  const notes = getNotes();
  const targetNote = notes.filter((note) => note.id == id)[0];

  targetNote.content = newContent;
  saveNotes(notes);
}

function deleteNote(id, element) {
  const notes = getNotes().filter((note) => note.id != id);

  saveNotes(notes);
  notesContainer.removeChild(element);
}
