const express = require('express');
const router = express.Router();

const Book = require('../../models/Book');

router.get('/test', (req, res) => 
    res.send('Testing book router'));

router.get('/', (req, res) => {
    Book.find()
        .then(books => res.json(books))
        .catch(err => res.status(404).json({
            nobooksfound: 'Empty shelf, dude!'
        }));
});

router.get('/:id', (req, res) => {
    Book.findById(req.params.id)
        .then(book => res.json(book))
        .catch(err => res.status(404).json({
            nobookfound: 'No, buy this book first!'
        }));
});

router.post('/', (req, res) => {
    Book.create(req.body)
        .then(book => res.json({
            msg: 'This now in your shelf, buddy!'
        }))
        .catch(err => res.status(400).json({
            error: 'No can do. This book is heavy!'
        }));
});

router.put('/:id', (req, res) => {
    Book.findByIdAndUpdate(req.params.id, req.body)
        .then(book => res.json({
            msg: 'Ok, accepted your mistake for the last time.'
        }))
        .catch(err =>
            res.status(400).json({
                error: 'Whaaaat is happening?!? Can not update!'
            })
        );
});

router.delete('/:id', (req, res) => {
    Book.findByIdAndRemove(req.params.id, req.body)
        .then(book => res.json({
            mgs: 'Yeah threw it away like Shere Bangla!'
        }))
        .catch(err => res.status(404).json({
            error: 'Buy, read. Then delete this one dumbass!'
        }));
});

module.exports = router;