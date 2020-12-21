const store = require('../db/store')
const router = require('express').Router();
const db = require("../db/db.json")

console.log(db)

 

router.get('/notes', (req, res) => {
    console.log("inside API Routes")
    
    store.getNotes()
    .then(notes => res.json(notes))
    .catch(err => res.status(500).json(err));
        
})

router.post('/notes', (req, res) => {
    let newNote = req.body;
    console.log("this is being logged", newNote);
    store.addNotes(newNote);

    res.json(newNote)
})

router.delete('/notes/:id', (req, res) => {
    store.removeNote(req.params.id)
        .then(() => res.json({
            ok: true
        }))
        .catch(err => res.status(500).json(err));
})