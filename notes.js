/* The notes.js file will list all my functions for the command handlers */
const fs = require('fs');
const chalk = require('chalk');

// addNote
const addNote = (title, body) => {
  let notes = loadNotes();
  const duplicateNote = notes.find((note) => note.title === title);

  if (!duplicateNote) {
    const note = {
      title,
      body
    };

    notes.push(note);

    console.log(chalk.magenta.inverse('Note added!'));
    saveNotes(notes);
  } else {
    console.log(
      chalk.red.inverse('Duplicate title! Please amend and try again.')
    );
  }
};

// removeNote
const removeNote = (title) => {
  const notes = loadNotes();

  const newNotes = notes.filter((note) => note.title !== title);

  console.log(chalk.magenta.inverse(`Note "${title}" removed!`));
  saveNotes(newNotes);

  if (newNotes.length < 1) {
    console.log(chalk.blue.inverse('Note list is empty'));
  }
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
  addNote,
  removeNote
};
