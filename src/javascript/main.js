const notesContainer = document.getElementById("app");
const addNoteContainer = notesContainer.querySelector(".add-note-container");
const addNoteButton = addNoteContainer.querySelector(".add-note")

getNotes().forEach((note) => {
  const noteElement = createNoteElement(note.id, note);
  notesContainer.insertBefore(noteElement, addNoteContainer);
});

addNoteButton.addEventListener("click", () => addNote());

function getNotes() {
  return JSON.parse(localStorage.getItem("stickynotes-notes") || "[]");
}

function saveNotes(notes) {
  localStorage.setItem("stickynotes-notes", JSON.stringify(notes));
}

document.addEventListener("DOMContentLoaded", () => {
  const noteObject = {
    id: Math.floor(Math.random() * 100000),
    "monsterName": "Demogorgon",
    "monsterCurrentHealth": "265",
    "monsterMaxHealth": "350  ",
    "monsterGeneralNotes": "Stranger Things reference!"
  };

  if (getNotes().length == 0) {
    addInitialNote(noteObject);
  }
});

function addInitialNote(noteObject) {
  const notes = getNotes();

  const noteElement = createNoteElement(noteObject.id, noteObject);
  notesContainer.insertBefore(noteElement, addNoteContainer);

  notes.push(noteObject);
  saveNotes(notes);
}

function addNote() {
  const notes = getNotes();

  const noteObject = {
    id: Math.floor(Math.random() * 100000),
    "monsterName": "",
    "monsterCurrentHealth": "",
    "monsterMaxHealth": "",
    "monsterGeneralNotes": ""
  };

  const noteElement = createNoteElement(noteObject.id, noteObject);
  notesContainer.insertBefore(noteElement, addNoteContainer);

  notes.push(noteObject);
  saveNotes(notes);
}

function updateNote(id, newNoteObject) {
  const notes = getNotes();
  const targetNote = notes.filter((note) => note.id == id)[0];

  targetNote.monsterName = newNoteObject.monsterName;
  targetNote.monsterCurrentHealth = newNoteObject.monsterCurrentHealth;
  targetNote.monsterMaxHealth = newNoteObject.monsterMaxHealth;
  targetNote.monsterGeneralNotes = newNoteObject.monsterGeneralNotes;
  saveNotes(notes);
}

function updateNoteCurrentHealth(id, health) {
  const notes = getNotes();
  const targetNote = notes.filter((note) => note.id == id)[0];

  targetNote.monsterCurrentHealth = health;
  saveNotes(notes);
}

function deleteNote(id, element) {
  const notes = getNotes().filter((note) => note.id != id);

  saveNotes(notes);
  notesContainer.removeChild(element);
}

