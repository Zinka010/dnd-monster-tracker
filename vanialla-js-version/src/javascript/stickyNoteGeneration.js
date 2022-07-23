function createNoteHeader(noteObject, monsterName, monsterCurrentHealth, monsterMaxHealth) {
  const noteHeader = document.createElement("div");
  noteHeader.classList.add("note-text-box-div");

  monsterName.id = "monsterName";
  monsterName.classList.add("note-monster-title");
  monsterName.maxLength = "12";
  monsterName.innerHTML = noteObject.monsterName;

  monsterCurrentHealth.type = "number";
  monsterCurrentHealth.id = "monsterCurrentHealth";
  monsterCurrentHealth.classList.add("note-health");
  monsterCurrentHealth.value = noteObject.monsterCurrentHealth;

  const slash = document.createElement("textarea");
  slash.classList.add("note-slash");
  slash.innerHTML = "/";
  slash.readOnly = true;
  slash.tabIndex = "-1";

  monsterMaxHealth.type = "number";
  monsterMaxHealth.id = "monsterMaxHealth";
  monsterMaxHealth.classList.add("note-health");
  monsterMaxHealth.value = noteObject.monsterMaxHealth;

  noteHeader.appendChild(monsterName);
  noteHeader.appendChild(monsterCurrentHealth);
  noteHeader.appendChild(slash);
  noteHeader.appendChild(monsterMaxHealth);

  return noteHeader;
}

function createNoteInfoBar(id, monsterHealthChange, monsterCurrentHealth) {
  const infoBar = document.createElement("div");
  infoBar.classList.add("note-info-bar");

  const healButton = document.createElement("button");
  healButton.innerHTML = "HEAL";
  healButton.classList.add("note-heal");

  healButton.addEventListener("click", () => {
    var change = getMonsterHealthChangeValue(monsterHealthChange);
    if (change != 0 && monsterCurrentHealth.value != "") {
      console.log("IF STATEMENT");
      var newHealth = parseInt(monsterCurrentHealth.value) + change;
      monsterCurrentHealth.value = newHealth;
      updateNoteCurrentHealth(id, newHealth);
    }
  });

  monsterHealthChange.type = "number";
  monsterHealthChange.classList.add("note-health-points");
  monsterHealthChange.maxLength = "3";
  monsterHealthChange.placeholder = "amount";

  const damageButton = document.createElement("button");
  damageButton.innerHTML = "DMG";
  damageButton.classList.add("note-damage");

  damageButton.addEventListener("click", () => {
    var change = getMonsterHealthChangeValue(monsterHealthChange);
    if (change != 0 && monsterCurrentHealth.value != "") {
      var newHealth = parseInt(monsterCurrentHealth.value) - change;
      monsterCurrentHealth.value = newHealth;
      updateNoteCurrentHealth(id, newHealth);
    }
  });

  infoBar.appendChild(healButton);
  infoBar.appendChild(monsterHealthChange);
  infoBar.appendChild(damageButton);

  return infoBar;
}

function getMonsterHealthChangeValue(monsterHealthChange) {
  var val = monsterHealthChange.value;
  if (val == "") {
    val = "0";
  }

  return parseInt(val);
}

function createNoteElement(id, noteObject) {
  const element = document.createElement("div");
  element.classList.add("note");

  const monsterGeneralNotes = document.createElement("textarea");
  monsterGeneralNotes.classList.add("note-general-text");
  monsterGeneralNotes.id = "monsterGeneralNotes";
  monsterGeneralNotes.innerHTML = noteObject.monsterGeneralNotes;

  const monsterName = document.createElement("textarea");
  const monsterCurrentHealth = document.createElement("input");
  const monsterMaxHealth = document.createElement("input");

  noteHeader = createNoteHeader(noteObject, monsterName, monsterCurrentHealth, monsterMaxHealth);
  element.appendChild(noteHeader);

  const monsterHealthChange = document.createElement("input");
  infoBar = createNoteInfoBar(id, monsterHealthChange, monsterCurrentHealth);

  element.appendChild(infoBar);

  element.appendChild(monsterGeneralNotes);

  element.addEventListener("keyup", () => {
    var newNoteObject = {
      "monsterName": monsterName.value,
      "monsterCurrentHealth": monsterCurrentHealth.value,
      "monsterMaxHealth": monsterMaxHealth.value,
      "monsterGeneralNotes": monsterGeneralNotes.value
    };
    
    updateNote(id, newNoteObject);
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
