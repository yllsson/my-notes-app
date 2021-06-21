/* The app.js file will contain all my yargs commands and take in the functions from notes.js to manipulate the data from the command line */
const yargs = require('yargs');
const notes = require('./notes');

// Add note
yargs.command({
  command: 'add',
  describe: 'Add a new note',
  build: {
    title: {
      describe: 'Title of the note',
      demandOption: true,
      type: 'string'
    },
    body: {
      describe: 'Body of the note',
      demandOption: true,
      type: 'string'
    }
  },
  handler(argv) {
    notes.addNote(argv.title, argv.body);
  }
});

// Remove note
yargs.command({
  command: 'remove',
  describe: 'Remove a note',
  build: {
    title: {
      describe: 'Note Title',
      demandOption: true,
      type: 'string'
    }
  },
  handler(argv) {
    notes.removeNote(argv.title);
  }
});

// List notes
yargs.command({
  command: 'list',
  describe: 'List all notes',
  handler() {
    notes.listNotes();
  }
});

// Read note
yargs.command({
  command: 'read',
  describe: 'Read a note',
  build: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string'
    }
  },
  handler(argv) {
    notes.readNote(argv.title);
  }
});

yargs.parse();
