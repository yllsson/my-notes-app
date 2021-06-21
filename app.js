/* The app.js file will contain all my yargs commands and take in the functions from notes.js to manipulate the data from the command line */
const yargs = require('yargs');
const chalk = require('chalk');

// I want 4 commands - add, remove, read, list
yargs.command({
  command: 'add',
  describe: 'Add a new note',
  build: {
    title: {
      describe: 'Title of the note',
      demandOption: true,
      type: 'string'
    }
  },
  handler(argv) {
    console.log(chalk.magenta.inverse('Adding a note'), argv.title);
  }
});

yargs.parse();
