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
}

function saveNotes(notes) {
  localStorage.setItem("stickynotes-notes", JSON.stringify(notes));
}

function createNoteHeader() {
  const noteHeader = document.createElement("div");
  noteHeader.classList.add("note-text-box-div");

  const monsterName = document.createElement("textarea");
  monsterName.id = "monsterName";
  monsterName.classList.add("note-monster-title");
  monsterName.maxLength = "12";

  const monsterCurrentHealth = document.createElement("textarea");
  monsterCurrentHealth.id = "monsterCurrentHealth";
  monsterCurrentHealth.classList.add("note-health");
  monsterCurrentHealth.maxLength = "3";
  monsterCurrentHealth.addEventListener("keydown", () => {
    checkInput(monsterCurrentHealth);
  });
  monsterCurrentHealth.addEventListener("keyup", () => {
    checkInput(monsterCurrentHealth);
  });

  const slash = document.createElement("textarea");
  slash.classList.add("note-slash");
  slash.innerHTML = "/";
  slash.readOnly = true;
  slash.tabIndex = "-1";

  const monsterMaxHealth = document.createElement("textarea");
  monsterMaxHealth.id = "monsterMaxHealth";
  monsterMaxHealth.classList.add("note-health");
  monsterMaxHealth.maxLength = "3";
  monsterMaxHealth.addEventListener("keydown", () => {
    checkInput(monsterMaxHealth);
  });
  monsterMaxHealth.addEventListener("keyup", () => {
    checkInput(monsterMaxHealth);
  });

  noteHeader.appendChild(monsterName);
  noteHeader.appendChild(monsterCurrentHealth);
  noteHeader.appendChild(slash);
  noteHeader.appendChild(monsterMaxHealth);

  return noteHeader;
}

function createNoteInfoBar() {
  const infoBar = document.createElement("div");
  infoBar.classList.add("note-info-bar");

  const healButton = document.createElement("button");
  healButton.innerHTML = "HEAL";
  healButton.classList.add("note-heal");

  const noteHealthPoints = document.createElement("textarea");
  noteHealthPoints.classList.add("note-health-points");
  noteHealthPoints.maxLength = "3";
  noteHealthPoints.addEventListener("keydown", () => {
    checkInput(noteHealthPoints);
  });
  noteHealthPoints.addEventListener("keyup", () => {
    checkInput(noteHealthPoints);
  });

  const damageButton = document.createElement("button");
  damageButton.innerHTML = "DMG";
  damageButton.classList.add("note-damage");

  infoBar.appendChild(healButton);
  infoBar.appendChild(noteHealthPoints);
  infoBar.appendChild(damageButton);

  return infoBar;
}

function createNoteElement(id, content) {
  const element = document.createElement("div");
  element.classList.add("note");

  const monsterGeneralNotes = document.createElement("textarea");
  monsterGeneralNotes.classList.add("note-general-text");
  monsterGeneralNotes.id = "monsterGeneralNotes";

  noteHeader = createNoteHeader();
  element.appendChild(noteHeader);

  infoBar = createNoteInfoBar();

  element.appendChild(infoBar);

  element.appendChild(monsterGeneralNotes);

  element.addEventListener("keyup", () => {
    var obj = {
      "monsterName": document.getElementById("monsterName").value,
      "monsterCurrentHealth": document.getElementById("monsterCurrentHealth").value,
      "monsterMaxHealth": document.getElementById("monsterMaxHealth").value,
      "monsterGeneralNotes": document.getElementById("monsterGeneralNotes").value
    };
    console.log(obj);
  });


  const deleteButtonWrapper = document.createElement("div");
  deleteButtonWrapper.classList.add("note-trash-wrapper");
  const deleteButton = document.createElement("button");
  deleteButton.classList.add("note-delete-icon");
  const deleteIcon = document.createElement("img");
  deleteIcon.src = "/src/resources/trash.svg";
  deleteButton.appendChild(deleteIcon);

  deleteButtonWrapper.appendChild(deleteButton);
  element.appendChild(deleteButtonWrapper);

  deleteButton.addEventListener("click", () => {
    deleteNote(id, element);
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

function checkInput(ob) {
  var invalidChars = /[^0-9]/gi;
  if(invalidChars.test(ob.value)) {
    ob.value = ob.value.replace(invalidChars,"");
  }
}

