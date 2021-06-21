/* The notes.js file will list all my functions for the command handlers */
const fs = require('fs');

// addNote
const addNote = (title, body) => {
  const note = {
    title,
    body
  };

  const stringJSON = JSON.stringify(note);
  fs.writeFileSync('notes.json', stringJSON);
};

module.exports = {
  addNote
};
