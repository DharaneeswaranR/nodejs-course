import chalk from 'chalk'
import fs from 'fs'

const addNote = (title, body) => {
    const notes = loadNotes()
    const duplicateNote = notes.find(note => note.title === title)

    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body
        })

        saveNotes(notes)
        console.log(chalk.green.inverse("New note added"))
    } else {
        console.log(chalk.red.inverse("Note title taken"))
    }
}

const removeNote = (title) => {
    const notes = loadNotes()
    const after = notes.filter(note => note.title !== title)

    if (notes.length > after.length) {
        console.log(chalk.green.inverse("Note removed"))
    } else {
        console.log(chalk.red.inverse("Note not found"))
    }

    saveNotes(after)
}

const listNotes = () => {
    console.log(chalk.inverse("Your notes"))
    const notes = loadNotes()

    notes.forEach(note => {
        console.log(note.title)
    })
}

const readNote = (title) => {
    const notes = loadNotes()
    const note = notes.find(note => note.title === title)

    if (note) {
        console.log(chalk.cyan.inverse(note.title))
        console.log(note.body)
    } else {
        console.log(chalk.bgRed("Note not found"))
    }
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()

        return JSON.parse(dataJSON)
    } catch (error) {
        return []
    }
}

export default {  
    addNote, 
    removeNote, 
    listNotes ,
    readNote
}
