/* The notes.js file will list all my functions for the command handlers */
const fs = require('fs');

// addNote
const addNote = (title, body) => {
  let notes = loadNotes();
  const note = {
    title,
    body
  };

  notes.push(note);

  saveNotes(notes);
};

// loadNotes
const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync('notes.json');
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (error) {
    return [];
  }
};

// saveNotes
const saveNotes = (notes) => {
  const stringJSON = JSON.stringify(notes);
  fs.writeFileSync('notes.json', stringJSON);
};

module.exports = {
  addNote
};
