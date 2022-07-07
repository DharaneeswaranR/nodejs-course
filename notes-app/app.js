import notes from './notes.js'
import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'

const yarg = yargs(hideBin(process.argv))

// customise yargs version
yarg.version("1.1.0")


// commands for notes app
yarg.command({
    command: "add",
    describe: "Add a new note",
    builder: {
        title: {
            describe: "Add title",
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: "Body of the content",
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.addNote(argv.title, argv.body)
    }
})

yarg.command({
    command: "remove",
    describe: "Remove a note",
    builder: {
        title: {
            describe: "Title of note to remove",
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.removeNote(argv.title)
    }
})

yarg.command({
    command: "list",
    describe: "List the notes",
    handler() {
        notes.listNotes()
    }
})

yarg.command({
    command: "read",
    describe: "Read the notes",
    builder: {
        title: {
            describe: "Note to be read",
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.readNote(argv.title)
    }
})

yarg.parse()




