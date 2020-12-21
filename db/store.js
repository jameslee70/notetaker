  
const fs = require('fs');
const util = require('util');
const { v4: uuidv4 } = require('uuid');

const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

class Store {
    read(){
        return readFileAsync("db/db.json", "utf8")
    }

    write(newNote){
        return writeFileAsync("db/db.json", JSON.stringify(newNote))   
    }

    getNotes(){
        return this.read().then((notes) => { 
            let parseNotes = JSON.parse(notes);
            return parseNotes;
        })
        
    }

    async addNotes(note){
        let {title, text} = note;
        let addID = {title, text, id: uuidv4()}
    //    let notesArray = await this.getNotes();
       return this.getNotes()
        .then(notes => [...notes, addID])
        .then(updatedNotes => this.write(updatedNotes))
        .then(() => addID)

    }

    removeNote(id) {
        console.log("remove notes");
        return this.getNotes()
            .then(notes => notes.filter(note => note.id !== id))
            .then(updatedNotes => this.write(updatedNotes))
    }
}


module.exports = new Store()